function splashsize () {
	var n = $("nav").height();
	var h = $(window).height() - $(".splash").height();
	console.log("height", h);
	$(".splash").css("paddingTop", (h / 2 + n) + "px");
	$(".splash").css("paddingBottom", (h / 2) + "px");
}

$(document).ready(function(){
	
	splashsize();
	$(window).resize(splashsize);
	
	$(".make-it-appear-left").waypoint(function(){
		$(this).addClass("animated fadeInLeft");
	}, {offset: "80%"});

	$(".make-it-appear-right").waypoint(function(){
		$(this).addClass("animated fadeInRight");
	}, {offset: "80%"});
	
});