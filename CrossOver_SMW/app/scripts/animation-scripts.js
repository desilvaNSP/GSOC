  
(function($){ //create closure so we can safely use $ as alias for jQuery

	$(document).ready(function(){

				// initialise plugin
				var wz_main_menu = $('#wz-main-menu').superfish({
					
				});
				// buttons to demonstrate Superfish's public methods
				$('.destroy').on('click', function(){
					wz_main_menu.superfish('destroy');
				});

				$('.init').on('click', function(){
					wz_main_menu.superfish();
				});

				$('.open').on('click', function(){
					wz_main_menu.children('li:first').superfish('show');
				});

				$('.close').on('click', function(){
					wz_main_menu.children('li:first').superfish('hide');
				});
					
	});

})(jQuery);


jQuery(window).load(function() {
	
	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");
	
	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});