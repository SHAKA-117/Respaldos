
function optener(){
	var user = document.getElementById("text").value;
	var pass = document.getElementById("pwd").value;
	localStorage.setItem("user",user);
	localStorage.setItem("pass",pass);
	alert("Enviado con exito...!")
}

function add(){
	var user = localStorage.getItem("user");
	var pass = localStorage.getItem("pass");
	var txt = document.getElementById("text").value = user;
	var pwd = document.getElementById("pwd").value = pass;
}
//method="POST" action="../scripts_de_control/control_usuario.php"

function borrar(){
	localStorage.removeItem("user");
	localStorage.removeItem("pass");
	localStorage.clear();
}