<!-- index_insert.php -->

<?php
require_once("./mysql_connect.php");
print_r($_POST);
$title = $_POST['title'];
$details = $_POST['details'];
$timestamp = $_POST['timestamp'];
$user_id = $_POST['user_id'];
$query = "INSERT INTO `todo_items` SET `title` = '$title', `details` = '$details', `timestamp` = '$timestamp', `user_id` = '$user_id'";
$result = mysqli_query($conn, $query);
print('rows inserted: '.mysqli_affected_rows($conn).'<br>');
?>