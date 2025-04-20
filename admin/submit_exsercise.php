<?php

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $dbHost = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "fitness";

        $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
        
        if($conn->connect_error){
            die("Connection failed". $conn->connect_error);
        }

        $stmt = $conn->prepare("INSERT INTO exercise (name, slogan, second, image_url) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssis", $name, $slogan, $second, $image_url);

        $name = $_POST['name'];
        $slogan = $_POST['slogan'];
        $second = intval($_POST['second']);

        $target_dir = "uploads/";
        $target_file = $target_dir.basename($_FILES['image']['name']);
        $image_file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        $image_url = $target_file;

        $check = getimagesize($_FILES["image"]["tmp_name"]);
        if($check !== false){
            if($_FILES["image"]["size"] > 5000000){
                echo "Sorry, your file is too large.";
                exit();
            }
            if($image_file_type != "jpg" && $image_file_type != "png" && $image_file_type != "jpeg" && $image_file_type != "gif" ) {
                echo "Sorry, only JPG, JPEG, GIF and PNG files are allowed.";
                exit();
            }

            if(move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)){
                if($stmt->execute()){
                    echo "Exercise added successfully";
                    //header("Location: exercises.php");
                }else{
                    echo "Sorry, there was an error adding your file.";
                }
            }else{
                echo "File is not an image";
            }

            $stmt->close();
            $conn->close();
        }else{
            echo "No form submitted";
        }

    } 

?>