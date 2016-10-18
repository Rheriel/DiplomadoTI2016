function hello(name){

	btn = document.getElementById("btnInput");
	btn.style.width = "250px";
	btn.style.backgroundColor = "#fff";
	contenedor = document.getElementById("contenedor");
	btn1 = document.createElement("button");
	btn1.innerHTML = "Boton en tiempo real";
	btn1.style.width = "300px";
	btn1.onclick = ayy;

	contenedor.appendChild(btn1);
}

function ayy(){
	alert("ayy lmao");
}