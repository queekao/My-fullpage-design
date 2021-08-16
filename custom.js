$(document).ready(function(){
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage'],
		menu:'#js-Menu',
		autoScrolling:false,
		fitToSection:false,
		scrollingSpeed:1200
		// sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
		// you can choose the color you want here.
	});
	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
			//  rellax initialization

			var rellax = new Rellax('.rellax',{center: false})
		});
		// carousel plugin
		 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    navText:[],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1600:{
            items:4
        }
    }
})
	
});