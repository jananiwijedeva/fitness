<?php

header("Access-Control-Allow-Origin: *");


$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "fitness";

$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE email = '$email'";

$result = mysqli_query($conn, $query);

if ($result && mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $hashed_password = $row['password'];

    if (password_verify($password, $hashed_password)) {
        $response["success"] = true;
        $response["message"] = "Login successful";
        $response["name"] = $row['name'];
        $response["email"] = $row['email'];
    }else{
        $response["success"] = false;
        $response["message"] = "Invalid email or password";
    }

}else{
    $response["success"] = false;
    $response["message"] = "User not found";
}

echo json_encode($response);

?>