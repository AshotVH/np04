<?php
set_time_limit(0);
ini_set('memory_limit', '6G');
ini_set('error_reporting', E_ALL);
ini_set('display_errors', true);

$elemId = $_GET["elemid"];
$startDate = $_GET["startdate"];
$endDate = $_GET["enddate"];

$url = "http://188.185.78.106:5000/range/" . $startDate . "/" . $endDate . "/" . $elemId;
$json = json_decode(file_get_contents($url));
$responseArr = [];
foreach ($json as $key => $value) {
    $key = intval($key);
    $value = round($value, 2);
    $responseArr[$key] = $value;
}
echo(json_encode($responseArr));
?>