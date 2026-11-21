<?php
declare(strict_types=1);

/**
 * Private stats page: https://maprisma.com/api/stats.php?key=<secret>
 * The secret lives only on the server in api/cache/stats-key.txt (never deployed).
 */

date_default_timezone_set('Europe/Berlin');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');

$keyFile = __DIR__ . '/cache/stats-key.txt';
$secret  = is_file($keyFile) ? trim((string) file_get_contents($keyFile)) : '';
$given   = is_string($_GET['key'] ?? null) ? $_GET['key'] : '';

if (strlen($secret) < 16 || !hash_equals($secret, $given)) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo "Not found\n";
    exit;
}

$json  = @file_get_contents(__DIR__ . '/cache/stats.json');
$stats = is_string($json) ? json_decode($json, true) : null;
$days  = is_array($stats['days'] ?? null) ? $stats['days'] : [];
krsort($days);

$h = static fn($s): string => htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');

$tot = ['views' => 0, 'visitors' => 0, 'installs' => 0];
$t30 = $tot;
$appsAll = [];
$apps30  = [];
$cut30 = date('Y-m-d', strtotime('-29 days'));
foreach ($days as $date => $d) {
    $inst = array_sum($d['installs'] ?? []);
    $tot['views'] += $d['views'] ?? 0;
    $tot['visitors'] += $d['visitors'] ?? 0;
    $tot['installs'] += $inst;
    foreach ($d['installs'] ?? [] as $a => $n) {
        $appsAll[$a] = ($appsAll[$a] ?? 0) + $n;
    }
    if ($date >= $cut30) {
        $t30['views'] += $d['views'] ?? 0;
        $t30['visitors'] += $d['visitors'] ?? 0;
        $t30['installs'] += $inst;
        foreach ($d['installs'] ?? [] as $a => $n) {
            $apps30[$a] = ($apps30[$a] ?? 0) + $n;
        }
    }
}
arsort($appsAll);

// ?format=json: the same figures for Maprisma My Apps (PHP 7.4 compatible).
if (($_GET['format'] ?? '') === 'json') {
    header('Content-Type: application/json; charset=utf-8');
    $out = [];
    foreach ($days as $date => $d) {
        $out[(string) $date] = [
            'visitors' => (int) ($d['visitors'] ?? 0),
            'views'    => (int) ($d['views'] ?? 0),
            'installs' => is_array($d['installs'] ?? null) ? $d['installs'] : [],
        ];
    }
    echo json_encode([
        'schema'   => 1,
        'since'    => $stats['since'] ?? null,
        'total'    => $tot,
        'last30'   => $t30,
        'apps'     => $appsAll,
        'apps30'   => $apps30,
        'days'     => (object) $out,
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

header('Content-Type: text/html; charset=utf-8');
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Maprisma Stats</title>
<style>
  :root { color-scheme: light dark; --bg:#0f1117; --fg:#e6e8ef; --mute:#8b90a0; --line:#262a36; --acc:#5ee1f0; }
  @media (prefers-color-scheme: light) { :root { --bg:#f7f8fb; --fg:#1a1d26; --mute:#5c6272; --line:#dde0e8; --acc:#0a8a9a; } }
  body { margin:0; padding:24px 16px; background:var(--bg); color:var(--fg); font:15px/1.5 system-ui, sans-serif; }
  main { max-width: 860px; margin: 0 auto; }
  h1 { font-size: 22px; margin: 0 0 4px; } h2 { font-size: 16px; margin: 32px 0 8px; }
  .sub { color: var(--mute); margin: 0 0 20px; }
  .tiles { display:grid; grid-template-columns: repeat(auto-fit, minmax(150px,1fr)); gap:12px; }
  .tile { border:1px solid var(--line); border-radius:10px; padding:12px 14px; }
  .tile b { display:block; font-size:26px; font-variant-numeric: tabular-nums; color: var(--acc); }
  .tile span { color: var(--mute); font-size: 13px; }
  table { width:100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
  th, td { text-align:left; padding:6px 8px; border-bottom:1px solid var(--line); }
  th { color: var(--mute); font-weight: 500; font-size: 13px; }
  td.n, th.n { text-align: right; }
  .wrap { overflow-x: auto; }
</style>
</head>
<body><main>
<h1>Maprisma website stats</h1>
<p class="sub">Counting since <?= $h($stats['since'] ?? '—') ?> · Europe/Berlin time · visitors = unique per day</p>

<div class="tiles">
  <div class="tile"><b><?= $t30['visitors'] ?></b><span>visitors, last 30 days</span></div>
  <div class="tile"><b><?= $t30['views'] ?></b><span>page views, last 30 days</span></div>
  <div class="tile"><b><?= $t30['installs'] ?></b><span>install clicks, last 30 days</span></div>
  <div class="tile"><b><?= $tot['installs'] ?></b><span>install clicks, all time</span></div>
</div>

<h2>Install clicks per app</h2>
<div class="wrap"><table>
<tr><th>App</th><th class="n">Last 30 days</th><th class="n">All time</th></tr>
<?php if (!$appsAll): ?><tr><td colspan="3">No clicks yet.</td></tr><?php endif; ?>
<?php foreach ($appsAll as $a => $n): ?>
<tr><td><?= $h($a) ?></td><td class="n"><?= (int) ($apps30[$a] ?? 0) ?></td><td class="n"><?= (int) $n ?></td></tr>
<?php endforeach; ?>
</table></div>

<h2>Per day</h2>
<div class="wrap"><table>
<tr><th>Date</th><th class="n">Visitors</th><th class="n">Views</th><th class="n">Installs</th><th>Apps</th></tr>
<?php if (!$days): ?><tr><td colspan="5">No data yet.</td></tr><?php endif; ?>
<?php foreach (array_slice($days, 0, 60, true) as $date => $d):
    $inst = $d['installs'] ?? [];
    arsort($inst);
    $list = implode(', ', array_map(fn($a, $n) => "$a ×$n", array_keys($inst), $inst));
?>
<tr><td><?= $h($date) ?></td><td class="n"><?= (int) ($d['visitors'] ?? 0) ?></td><td class="n"><?= (int) ($d['views'] ?? 0) ?></td><td class="n"><?= array_sum($inst) ?></td><td><?= $h($list) ?></td></tr>
<?php endforeach; ?>
</table></div>
</main></body>
</html>
