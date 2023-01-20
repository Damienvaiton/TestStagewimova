<?php
session_start();

$pdo = new PDO('sqlite:./BaseTest.db');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->query('SELECT * FROM user');
$res = $stmt->fetchAll();
echo json_encode($res);
