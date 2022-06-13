<?php
	$username = filter_input(INPUT_POST, 'usuario');
    $password = filter_input(INPUT_POST, 'contraseña');
    $nombre = filter_input(INPUT_POST,'nombre');
    $email = filter_input(INPUT_POST,'email');

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "root";
    $dbname = "users";

    $con = new mysqli ($host,$dbusername, $dbpassword, $dbname);
    if (!$con){
        die("Connection failed: " . mysqli_connect_error());
    } else{
        $sql = "INSERT INTO users(Usuario,Contraseña,Nombre,Email) VALUES ('$username','$password','$nombre','$email')";
        if ($con->query($sql)){
            echo "datos registrados";
            #header("Location: http://www.patito.mayoreo.com");
        } else{
            echo "Error: " .$sql. "<br>". $con->error;
        }
        mysqli_close($con);
    }


?>