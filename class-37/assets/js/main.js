(function($){
	"user strict";
	jQuery(document).ready(function($){
	// $(".homepage-slides").owlCarousel({
	// 	items:1,
	// 	autoplay:true,
	// 	loop:true,		
	// 	dots:true,
	// 	nav:false,

	// });
	 var s=skrollr.init({
	 	render:function(data){
	 		//debug
	 	}
	 });
	 $(window).scroll(function(){
	 		if ($(this).scrollTop() > 100) {
	 			$('.scrollToTop').fadeIn();
	 		} else {
	 			$('.scrollToTop').fadeOut();
	 		}
	 	});
	 	
	 	//Click event to scroll to top
	 	$('.scrollToTop').click(function(){
	 		$('html, body').animate({scrollTop : 0},800);
	 		return false;
	 	});
	});
	jQuery(window).load(function(){

	});

}(jQuery));