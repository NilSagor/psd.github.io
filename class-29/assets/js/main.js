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
		$('.project-titles li').on('click',function(){
			$(".project-titles li").removeClass("active");
			$(this).addClass("active");

			var selector=$(this).attr('data-filter');
			$('.project-lists').isotope({
				filter:selector
			});
		});


	});
	jQuery(window).load(function(){
		jQuery('.project-lists').isotope();
	});

}(jQuery));