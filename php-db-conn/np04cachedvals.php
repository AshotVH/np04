<?php
set_time_limit(0);
ini_set('memory_limit', '6G');
ini_set('error_reporting', E_ALL);
ini_set('display_errors', true);

// $hostName = $_ENV["hostname"];
$hostName = getenv('hostname');
$elemName = $_GET["elemName"];
$url = $hostName."/latest/".$elemName;
$json = json_decode(file_get_contents($url));
echo(json_encode($json));
?>