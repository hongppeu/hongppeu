$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
		anchors: ['FirstPage', 'SecondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage', 'lastPage'],
		sectionsColor: ['#8988ff'],
		responsiveWidth: 1080,
		


	});

	var isClick = false;
	$(".btn_menu").click(function(){
		if(!isClick){
			$(".btn_menu").addClass("active");
			$(".hidden_menu").addClass("show");
			$(".hidden_menu h1").click(function(){
				$(".btn_menu").removeClass("active");
				$(".hidden_menu").removeClass("show");
				isClick = false;
			});
			isClick = true;
		} else {
			$(".btn_menu").removeClass("active");
			$(".hidden_menu").removeClass("show");
			isClick = false;
		}
	});
	
	//hidden menu
	$(".hidden_menu li").on("mouseover", function(){
		setTimeout(function(){
			$(this).addClass("active");
		});
		$(this).find(".mlnb").addClass("active");
	});
	
	$(this).on("mouseout", function(){
		setTimeout(function(){
			$(this).find(".mlnb").removeClass("active");
		});
		$(this).removeClass("active");
	});


	var swiper = new Swiper(".mySwiper", {
		effect : 'fade',
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});





});