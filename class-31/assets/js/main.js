(function($){
	"user strict";
	jQuery(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items:1,
		autoplay:true,
		loop:true,		
		dots:true,
		nav:false,

	});
	 var s=skrollr.init({
	 	render:function(data){
	 		
	 	}
	 });
	});
	jQuery(window).load(function(){

	});

}(jQuery));