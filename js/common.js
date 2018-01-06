$(document).ready(function() {

	// SECTION-CONTENT-PORTFOLIO
	$("#section_content_windows").mixItUp();

	$(".portfolio li").click(function () {
		$(".portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	// magnific-POPUP
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".portfolio_description").attr("id", "work_" + i);
	});

	$(".nav ul a").mPageScroll2id();

	// ANIMATED
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_top").animated("fadeInUp", "fadeOutDown");
	$(".animation_left").animated("fadeInLeft", "fadeOutRight");
	$(".animation_center").animated("flipInY", "fadeOutDown");
	$(".animation_right").animated("fadeInRight", "fadeOutLeft");
	$(".right .resume_item").animated("fadeInLeft", "fadeOutRight");
	$(".left .resume_item").animated("fadeInRight", "fadeOutLeft");


	// HEADER-HEIGHT
	function heightDetect() {
		$(".header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	// PRELOADER
	$(window).load(function() { 
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
	});
	// BUTTON-MENU
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".nav ul li a span").click(function() {
		$(".nav").fadeOut(600);
		$(".sandwich").toggleClass("active");

	});

	// BUTTON-MENU_NAV
	$(".nav ul a").click(function() {
		$(".nav").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".nav").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".nav").fadeOut(600);
			$(".nav li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".nav").fadeIn(600);
			$(".nav li a").addClass("fadeInUp animated");
		};
	});

	// FORM
	$("input, select, textarea").jqBootstrapValidation();
	
});