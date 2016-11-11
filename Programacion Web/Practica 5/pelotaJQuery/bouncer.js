$(document).ready(function() {

	var movX = "+=5px", movY = "+=5px", rebote = 0, maxRebotes = 0;

	$("#idStart").click(function() {
		maxRebotes = parseInt($("#idRebotes").val());
		$("#idPB").attr("max", maxRebotes);
		$("#idPB").val("0");
		moverPelota();
	});

	function getSpeed(){
		return ((1 /parseInt($("#idVel").val())) * 100);
	}

	function actualizaProgressBar(){
		$("#idPB").val(rebote);
	}

	function moverPelota(){
		if (rebote < maxRebotes) {
			$("#idBall").animate({
					            left: movX,
					            top: movY,
					            duration: getSpeed(),
					            complete: check()
					         });
		}

	}

	function check(){
		if (($("#idBall").position().left >= $("#idCont").width()) || ($("#idBall").position().left <= 0)){
			movX = "-=5px";
			rebote++;
		} else {
			movX = "+=5px";
		}
		if (($("#idBall").position().top >= $("#idCont").height()) || ($("#idBall").position().top <= 0)){
			movY = "-=5px";
			rebote++;
		} else {
			movY = "+=5px";
		}
	}

	$("#idTam").on("input", function() {
		$("#idBall").css("width", $("#idTam").val());
		$("#idBall").css("height", $("#idTam").val());
		$("#idBall").css("border-radius", ($("#idTam").val() / 2));
	});

});