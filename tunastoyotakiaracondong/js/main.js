// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
	  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		if($("#isMobile").is(":visible")){
			$(".nav-text,.navbar-toggler-icon").each(function(i){
				$(this).css("fontSize","75%");
			});
			$("#toyota-navbar-brand-logo")[0].height = "30";
			$("#brand-text-linebreak").html(`<span class="text-muted">&nbsp;|</span>`);
		}
		
		$("#main-navbar").addClass("fixed-top shadow-lg");
	  } else {
		if($("#isMobile").is(":visible")){  
		$(".nav-text,.navbar-toggler-icon").each(function(i){
			$(this).css("fontSize","100%")
		});
		$("#toyota-navbar-brand-logo")[0].height = "60";
		$("#brand-text-linebreak").html(`<br/>`);
		}
		
		$("#main-navbar").removeClass("fixed-top shadow-lg");
	  }
}

function adaptiveSize(){
	if(!$("#isMobile").is(":visible")){
		$(".nav-text,.navbar-toggler-icon").each(function(i){
			$(this).css("fontSize","75%");
		});
		$("#toyota-navbar-brand-logo")[0].height = "30";
		$("#brand-text-linebreak").html(`<span class="text-muted">&nbsp;|</span>`);
		$("#text-brand-name").addClass('text-center');
	}else{
		$(".nav-text,.navbar-toggler-icon").each(function(i){
			$(this).css("fontSize","100%");
		});
		$("#toyota-navbar-brand-logo")[0].height = "60";
		$("#brand-text-linebreak").html(`<br/>`);
		$("#text-brand-name").removeClass('text-center');
	}
}

(function($) { 
	$(function() {
		adaptiveSize();
		$( window ).on( "resize", function() {
			adaptiveSize();
		});
		
		$('.main-slider').slick({
			dots: true,
			infinite: true,
			centerMode: true,
			arrows: false,
			variableWidth: true,
			slidesToShow: 1,
			responsive: [
			{
			breakpoint: 768,
				settings: {
					centerMode: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
					settings: {
					centerMode: false,
					slidesToShow: 1,
					variableWidth: false,
					fade: true,
					cssEase: 'linear'
			  }
			}
		  ]
		});
		
		$('.recommend-slider').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
				breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
						settings: {
						slidesToShow: 2
				  }
				}
			]
		});
	});
})(jQuery);