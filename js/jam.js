$(document).ready(function(){
	
	$(window).on("scroll", function(e){
		var top = $(document).scrollTop();
		if (top > 20) {
			$("nav").addClass("navbar-scrolled");
		} else {
			$("nav").removeClass("navbar-scrolled");
		}
	});
	
	$(".make-it-appear-left").waypoint(function(){
		$(this).addClass("animated fadeInLeft");
	}, {offset: "80%"});
	$(".make-it-appear-right").waypoint(function(){
		$(this).addClass("animated fadeInRight");
	}, {offset: "80%"});
	$(".make-it-appear-up").waypoint(function(){
		$(this).addClass("animated fadeInUp");
	}, {offset: "80%"});
	$(".make-it-appear-down").waypoint(function(){
		$(this).addClass("animated fadeInDown");
	}, {offset: "80%"});
	
});