var tb = document.getElementById("info");
var fil = 0, col = 0;
var op = false;
function optener(){
	localStorage.removeItem("producto");
	localStorage.removeItem("precio");
	localStorage.removeItem("cantidad");
	var prod = document.getElementById("producto").textContent;
	var precio = document.getElementById("precio").textContent;
	var cantidad = document.getElementById("cantidad").value;
	localStorage.setItem("producto",prod);
	localStorage.setItem("precio",precio);
	localStorage.setItem("cantidad",cantidad);
}
function agregar(){
	var prod = localStorage.getItem("producto");
	var precio = localStorage.getItem("precio");
	var cantidad = localStorage.getItem("cantidad");
	if (verificar(prod)) {
		var x = tb.rows[fil].cells;
		var x2 = parseInt(x[2].innerHTML)+parseInt(cantidad)
		x[2].innerHTML = x2;
		x[3].innerHTML = parseInt(precio)*x2;
		resultado();
		op = false;
	}else{
		var n = tb.rows.length;
		var row = tb.insertRow(n);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = localStorage.getItem("producto");
		cell2.innerHTML = localStorage.getItem("precio");
		cell3.innerHTML = localStorage.getItem("cantidad");
		cell4.innerHTML = localStorage.getItem("precio")*cantidad;
		resultado();
		//alert("Producto agregado con exito...!")
		localStorage.removeItem("producto");
		localStorage.removeItem("precio");
		localStorage.removeItem("cantidad");
	}
}
function verificar(p){
	for(var i = 0; i<tb.rows.length; i++){
		if(tb.rows[i].cells[0].innerHTML == p){
			op = true;
			fil = i; coll = 0;
		}
	}
	return op;
}
function resultado(){
	var sum = 0;
	for(var i=1; i<tb.rows.length; i++){
		sum = sum + parseInt(tb.rows[i].cells[3].innerHTML);
	}
	document.getElementById("Subtotal").value = sum;
	document.getElementById("IVA").value = (sum * 0.18).toFixed(2);
	document.getElementById("Total").value = sum+sum*0.18;
}


/*https://www.youtube.com/watch?v=32o1wdiu2mQ  sistema de ventas

https://www.youtube.com/watch?v=k4G6vi_tcuk filtro de elementos 

https://www.youtube.com/watch?v=nwaFMifop98
https://www.youtube.com/watch?v=pm1NjWJgCsM

https://pressroom.hostalia.com/white-papers/rutas-absolutas-y-relativas/ 
para acortar las rutas 

	<div>
		<thead>
			<div>
				<p>productos</p>
				<select id="producto">
					<option value="laptop">Laptop</option>
				</select>
			</div>
		</thead>
	</div>
	<div>
		<p>precio</p>
		<input type="text" id="precio">
	</div>
	<div>
		<p>cantidad</p>
		<input type="text" id="cantidad">
	</div>
	<button type="button" name="button" id="button" onclick="agregar()">add</button>

*/