<?php
	$username = filter_input(INPUT_POST, 'usuario');
	$password = filter_input(INPUT_POST, 'contraseña');
	if (!empty($username)){
		if (!empty($password)){
			$host = "localhost";
			$dbusername = "root";
			$dbpassword = "root";
			$dbname = "users";

			$con = new mysqli ($host,$dbusername, $dbpassword, $dbname);
			if (!$con){
				die("Connection failed: " . mysqli_connect_error());
			} else{
				$sql = "select Usuario from users where Contraseña = '$password' ";
				if ($con->query($sql)){
					echo "usauario econtrado";
					#header("Location: http://www.patito.mayoreo.com");
				} else{
					echo "Error: " .$sql. "<br>". $con->error;
				}
				mysqli_close($con);
			}
		} else {
			echo "contraseña incorrecta";
			die();
		}
	} else {
		echo "Usuario incorrecto";
		die();
	}
?>