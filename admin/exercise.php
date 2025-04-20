<?php

$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "fitness";

$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}

$sql = "SELECT * FROM exercise";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $exercises = array();
    while ($row = $result->fetch_assoc()) {
        $exercise = array(
            "name"=> $row["name"],
            "slogan"=> $row["slogan"],
            "second"=> $row["second"],
            "image_url"=> $row["image_url"],
        );
        array_push( $exercises, $exercise);
    }
    header("Content-Type: application/json");
    echo json_encode( $exercises );
}else{
    echo "No exercises found";
}

$conn->close();

?>