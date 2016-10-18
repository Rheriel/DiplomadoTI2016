var counter = 1;

function agregarDiv(){
	cuadro = document.createElement("DIV");
	cuadro.className = "cuadroLoco";
	cuadro.style.backgroundColor = document.getElementById("fondoColorPicker").value;
	cuadro.style.borderColor = document.getElementById("bordeColorPicker").value;
	cuadro.addEventListener("click", seleccionar);
	document.getElementById("contenedor").appendChild(cuadro);

}

function seleccionar(sender) {
	divSeleccionado = sender.target;
	resetearValores(divSeleccionado);
	divSeleccionado.style.borderStyle = "dotted";
}

function resetearValores(sender) {
	document.getElementById("ancho").value = sender.style.width.substring(0,sender.style.width.indexOf("p"));
	document.getElementById("alto").value = sender.style.height.substring(0,sender.style.height.indexOf("p"));
	document.getElementById("anchoBorde").value = sender.style.borderWidth.substring(0,divSeleccionado.style.borderWidth.indexOf("p"));
	document.getElementById("fondoColorPicker").value = rgbToHex(sender.style.backgroundColor);
	document.getElementById("bordeColorPicker").value = rgbToHex(sender.style.borderColor);
}

function rgbToHex(rgbValue){
	var rgbMinusRGB = rgbValue.substring(rgbValue.indexOf("(") + 1, rgbValue.length - 1);
	var rgb = rgbMinusRGB.split(",");
	var hex = "#";
	var red = rgb[0];
	var green = rgb[1];
	var blue = rgb[2];

	hex += decToHex(red) + decToHex(green) + decToHex(blue);
	return hex;
}

function decToHex(decimal) {
	hex = parseInt(decimal).toString(16);

	if (hex.length == 1){
		return "0" + hex;
	} else {
		return hex;
	}
}

