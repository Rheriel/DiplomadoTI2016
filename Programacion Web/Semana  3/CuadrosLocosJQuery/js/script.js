$(document).ready(function(){

	$("#btnMostrar").click(function() {
		$("div").slideDown();
	});

	$("#btnOcultar").click(function() {
		$("div").slideUp();
	});

	$("#btnToggle").click(function() {
		$("div").slideToggle();
	});

	$("#btnAnim").click(move);

	$("#btnAppend").click(function() {
		$(".rojo").append("<p>World!</p>");
	});

	$("#btnPrepend").click(function() {
		$(".rojo").prepend("<p>Hello!</p>");
	});

	$(".cuadro").mouseenter(function() {
		$(this).css("background-color", "white");
	});

	$(".cuadro").mouseleave(function() {
		$(this).css("background-color", "red");
	});

	$("input[type=range]").on("input", function(){
		color = decToHex($("#verde").val()) + decToHex($("#rojo").val()) + decToHex($("#azul").val());
		$(".cuadro").css("background-color", "#" + color);
	});

	function move() {
		$(".rojo").animate({"left" : "200px" }, 200);
		$(".rojo").animate({"top" : "200px" }, 200);
		$(".rojo").animate({"left" : "0px" }, 200);
		$(".rojo").animate({"top" : "0px" }, 200);
		$(".rojo").animate({"top" : "200px", "left" : "200px", "width":"200px", "height":"200px", "border-radius":"0%"}, 200);
		$(".rojo").animate({"top" : "0px", "left" : "0px", "width":"100px", "height":"100px", "border-radius":"90%"}, 200);
	}



});



function decToHex(decimal) {
	hex = parseInt(decimal).toString(16);

	if (hex.length == 1){
		return "0" + hex;
	} else {
		return hex;
	}
}