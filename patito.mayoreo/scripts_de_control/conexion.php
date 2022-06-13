<?php
function conectar(){
	//datos de la coneccion
	$nombreServidor = "localhost";
	$nombreUsuario = "root";
	$passwordBaseDeDatos = "root";
	$nombreBaseDedatos = "users";
	//creacion de la conexion 
	$conexion = mysql_connect($nombreServidor,$nombreUsuario,$passwordBaseDeDatos) or die("Error conectar".msql_error());
	$db = mysql_select_db("users", $conexion) or die ("error no econtrado");

	return $conexion;
}
?>