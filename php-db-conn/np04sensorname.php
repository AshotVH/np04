<?php
set_time_limit(0);
ini_set('memory_limit', '6G');
ini_set('error_reporting', E_ALL);
ini_set('display_errors', true);

$elemId = $_GET["elemid"];
$hostName = "http://188.185.64.236:8000";
$url = $hostName."/sensor-name/" . $elemId;
$json = json_decode(file_get_contents($url));
// echo(json_encode($json));
echo $_ENV["hostname"];
?>