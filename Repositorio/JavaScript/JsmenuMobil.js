// JavaScript Document
	$(document).ready(function(){
	$('#menuMobile').click(function(){
		$(this).toggle();
		$('#closeMenu').toggle();
		$('.lvl-1').removeClass('lvl-1').addClass('lvl-1-fix');
	});
	// end open menu mobile

	//close menu mobile
	$('#closeMenu').click(function(){
		$('#menuMobile').toggle();
		$(this).toggle();
		$('.lvl-1').removeClass('lvl-1-fix').addClass('lvl-1');
		$('.lvl-1-fix').removeClass('lvl-1-fix').addClass('lvl-1');
		$('#hombre2').removeClass('lvl-2-fix').addClass('lvl-2');
		$('#mujer2').removeClass('lvl-2-fix').addClass('lvl-2');
		$('#nino2').removeClass('lvl-2-fix').addClass('lvl-2');
		$('#living2').removeClass('lvl-2-fix').addClass('lvl-2');
	});
	// end close menu mobile


	//back lvl-1
	$('.izquierda').click(function(){
		$('.lvl-1').removeClass('lvl-1').addClass('lvl-1-fix');
		$(this).parent().parent().parent().removeClass('lvl-2-fix').addClass('lvl-2');
	});
	//end back lvl-1

	//back lvl-2
	$('.izquierda-2').click(function(){
		$(this).parent().parent().parent().removeClass('lvl-3-fix').addClass('lvl-3');
		$(this).parent().parent().parent().parent().parent().parent().removeClass('lvl-2').addClass('lvl-2-fix');
	});
	//end back lvl-2

	//lvl-1 to lvl-2
	$('#hombre').click(function(){
		$('.lvl-1-fix').removeClass('lvl-1-fix').addClass('lvl-1');
		$('#hombre2').removeClass('lvl-2').addClass('lvl-2-fix');
	});

	$('#mujer').click(function(){
		$('.lvl-1-fix').removeClass('lvl-1-fix').addClass('lvl-1');
		$('#mujer2').removeClass('lvl-2').addClass('lvl-2-fix');
	});

	$('#nino').click(function(){
		$('.lvl-1-fix').removeClass('lvl-1-fix').addClass('lvl-1');
		$('#nino2').removeClass('lvl-2').addClass('lvl-2-fix');
	});

	$('#living').click(function(){
		$('.lvl-1-fix').removeClass('lvl-1-fix').addClass('lvl-1');
		$('#living2').removeClass('lvl-2').addClass('lvl-2-fix');
	});
	// end lvl-1 to lvl-2

	//lvl-2 to lvl-3
	$('.tree').click(function(){
		$(this).next('div').removeClass('lvl-3').addClass('lvl-3-fix');
	});
	  $( "#closeMenu" ).click(function() {
        $( ".velo" ).toggle("drop");
        });
		    $( "#menuMobile" ).click(function() {
        $( ".velo" ).toggle("drop");
        });
	});