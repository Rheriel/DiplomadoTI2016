$(document).ready(function(){

	var noComentarios = 1;

	function removeAllBlinks(){
		$(".champ-icon img").removeClass("selected-champ");
		$(".champ-icon img").css('opacity', '1.0');
	}

	$(".champ-icon").click(function(){
		removeAllBlinks();
		$(this).children("img").addClass("selected-champ");
		replaceMainChampInformation($(this).attr("id"));
		blink();
	});

	function replaceMainChampInformation(champ){
		var champIndex = "" + champ.replace('chi', '');
		$("#chn").text($("#chn" + champIndex).text());
		$("#cha").text($("#cha" + champIndex).text());
		$("#chl").text($("#chl" + champIndex).text());
		$("#chd").text($("#chd" + champIndex).text());

		replaceMainChampImages(champIndex);
	}

	function replaceMainChampImages(champIndex){
		replaceMainImageWith($("#li" + champIndex));
		$("#li").attr("src", $("#li" + champIndex).attr("src"));
		$("#ci").attr("src", $("#ci" + champIndex).attr("src"));
		$("#ri").attr("src", $("#ri" + champIndex).attr("src"));
	}

	function blink(){
	    $(".selected-champ")
	    .fadeToggle('fast', 'linear', blink);
	}

	$(".tiny-images img").click(function (event){
		replaceMainImageWith($(event.target));
	});

	function replaceMainImageWith(newImage){
		$("#mi").slideUp("fast", function(){
			$("#mi").attr("src", $(newImage).attr("src"));
			$("#mi").slideDown("fast");
		});
	}

	$("#btnComment").click(function (){
		if (noComentarios % 2 == 0){
			$("#comentarios ul").append("<li id='comment" + noComentarios + "' class='oddComment'>" + $("#Comment").val() + "</li>");
		} else {
			$("#comentarios ul").append("<li id='comment" + noComentarios + "' class='evenComment'>" + $("#Comment").val() + "</li>");
		}
		noComentarios++;
	});

});

