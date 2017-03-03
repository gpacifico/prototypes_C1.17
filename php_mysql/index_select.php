<!-- index_select.php -->
<?php
    require_once('mysql_connect.php');
    $query = "SELECT * FROM `todo_items`";
    $result = mysqli_query($conn, $query);

    //print("<br><br><pre>".print_r($result,true).'<pre>');

    if (!empty($result) && mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $output[] = $row;
        print("<pre>".print_r($row, true)."</pre>");
        }
    }
?>
