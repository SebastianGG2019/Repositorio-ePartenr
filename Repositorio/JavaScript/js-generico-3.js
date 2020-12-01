//js document
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});
        $(document).ready(function(){
            $(".header").hover(function(){
                $(".header").css("background-color", "white");
                }, function(){
                    $(".header").css("background-color", "");
                });

            $(".level-1").hover(function(){
                $(".header").css("height","120px");
                }, function(){
                    $(".header").css("height", "56px");
                });
            $("#aDENIMm").hover(function(){
        $("#DENIMm").css({"display":"block"});
        }, function(){
        $("#DENIMm").css("display", "none");
    });

        

        $("#aAPPARELm").hover(function(){
            $("#APPARELm").css("display", "block");
            }, function(){
            $("#APPARELm").css("display", "none");
        });



        $("#aSHOESm").hover(function(){
            $("#SHOESm").css("display", "block");
            }, function(){
            $("#SHOESm").css("display", "none");
        });



        $("#aACCESORIESm").hover(function(){
            $("#ACCESORIESm").css("display", "block");
            }, function(){
            $("#ACCESORIESm").css("display", "none");
        });



        $("#aWATCHESm").hover(function(){
            $("#WATCHESm").css("display", "block");
            }, function(){
            $("#WATCHESm").css("display", "none");
        });



        $("#aDIESEL-BLACK-GOLDm").hover(function(){
            $("#DIESEL-BLACK-GOLDm").css("display", "block");
            }, function(){
            $("#DIESEL-BLACK-GOLDm").css("display", "none");
        });




        $("#aSPECIAL-COLLECTIONm").hover(function(){
            $("#SPECIAL-COLLECTIONm").css("display", "block");
            }, function(){
            $("#SPECIAL-COLLECTIONm").css("display", "none");
        });

    /* Fin Menu MEN*/

    /* Menu WOMEN*/

    $("#aDENIMw").hover(function(){
        $("#DENIMw").css("display", "block");
        }, function(){
        $("#DENIMw").css("display", "none");
    });

        

        $("#aAPPARELw").hover(function(){
            $("#APPARELw").css("display", "block");
            }, function(){
            $("#APPARELw").css("display", "none");
        });


        $("#aSHOESw").hover(function(){
            $("#SHOESw").css("display", "block");
            }, function(){
            $("#SHOESw").css("display", "none");
        });



        $("#aACCESORIESw").hover(function(){
            $("#ACCESORIESw").css("display", "block");
            }, function(){
            $("#ACCESORIESw").css("display", "none");
        });



        $("#aWATCHESw").hover(function(){
            $("#WATCHESw").css("display", "block");
            }, function(){
            $("#WATCHESw").css("display", "none");
        });



        $("#aDIESEL-BLACK-GOLDw").hover(function(){
            $("#DIESEL-BLACK-GOLDw").css("display", "block");
            }, function(){
            $("#DIESEL-BLACK-GOLDw").css("display", "none");
        });



        $("#aSPECIAL-COLLECTIONw").hover(function(){
            $("#SPECIAL-COLLECTIONw").css("display", "block");
            }, function(){
            $("#SPECIAL-COLLECTIONw").css("display", "none");
        });

    /* Fin Menu WOMEN*/

    /* Menu KID*/


        $("#aBOYS").hover(function(){
            $("#BOYS").css("display", "block");
            }, function(){
            $("#BOYS").css("display", "none");
        });



        $("#aGIRLS").hover(function(){
            $("#GIRLS").css("display", "block");
            }, function(){
            $("#GIRLS").css("display", "none");
        });
            $(".ajuste ul,#DENIMm,.aDENIMm,.ajuste li,.ajuste strong,.ajuste div").hover(function(){
            $(".header").css("height","500px");
            }, function(){
            $(".header").css("height", "500px");
            });

            $( "select#O" ).click(function() {
            $( "orderBy" ).toggleClass( "active" );
            });

            $("input[dimension=Talla]").click(function () {    
            $(".Talla .specification").html("Talla " + $('input:radio[dimension=Talla]:checked').val());
            //alert("Bien!!!, la edad seleccionada es: " + $(this).val());
             });

        $('.togglePanelHeader').click(function(){
        $( '.togglePanelDestinationBox' ).toggle(function() {
        if ( $(this).css("display") == "block" )  {
        $('.flex-content').css('max-height', '427px');
        $('.flex-items').addClass('active');
        }    else {
        $('.flex-content').css('max-height', '108px');
        $('.flex-items').removeClass('active');
           }
         });
        });
        $( ".stores" ).click(function() {
        $( ".stores" ).toggle();
        });
        $( "#language_footer" ).click(function() {
        $( ".stores" ).toggle();
        });


    });

			$(".New-a, #aGIRLS, #aBOYS, .new-a").hover(function(){
                 $(".header").css("max-height","120px");
                }, function(){
                    $(".header").css("max-height", "none");
                });
$( ".searchB" ).click(function() {$('.buscar').toggle();});

$(document).ready(function(){
  var VentanaA = $(window).width();
	if(VentanaA < 500 ){ $(".thumbs,.produto .vitrine").addClass("owl-carousel");$('.thumbs,.produto .vitrine').owlCarousel({
    items:1,
    dots:true,
    loop:true,
    margin:10,})}else{};
   $('.transparente').hover(function() {
    $('.princ img').toggle();
  }, function() {
    $('.princ img').toggle();
  })
});

//menu movil 

	/*$('#menuMobile').click(function(){
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
        });*/

function precioProdu () {

  if($(".productPrice").find('.skuListPrice').length == 0){
      //$(this).append('<span class="dtoF">'+resultF+'% Bancolombia</span>')}}
      $(".skuBestPrice").append('<span class="tresx">aplica 3x2</span>');
  }
}
$(document).ready(function(){
    $( ".owl-carousel .owl-item" ).each(function() 
	{ if(($(this).find('h2').length) > 0)
		{
			$(this).css('display','none');
		};
    
    });
	$(".produto .vitrine").addClass("owl-carousel");
  
  $('.popup .vitrine').owlCarousel({
    items:5,
    dots:false,
    loop:true,
    margin:5,
        responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            loop:true
        }
    }
  });
  
  $('.produto .vitrine').owlCarousel({
    items:5,
    dots:false,
    loop:true,
    margin:5,
  });
  
    });
$(document).ready(function(){
    $( ".owl-carousel .owl-item" ).each(function() 
	{ if(($(this).find('h2').length) > 0)
		{
			$(this).css('display','none');
		};
    
    });
    });

//slider categoria

$(document).ready(function(){
  var VentanaA = $(window).width();
	if(VentanaA < 500 ){ $(".categories-filters").addClass("owl-carousel");$('.categories-filters').owlCarousel({
    items:1,
    dots:true,
    loop:true,
    margin:10,})}else{};
});


window.alert=function(){}

$( document ).ready(function() {
        $('.buy-button-ref').click(function() {
          if($('.item-dimension-Color input').hasClass('checked')){ console.log("producto adicionado")
            ;}else{$(".item-dimension-Color").append('<p class="mensaje">Selecciona el Color</p>');}
            
        });
});
$( document ).ready(function() {
        $('.buy-button-ref').click(function() {
          if($('.item-dimension-Talla input').hasClass('checked')){
            console.log("producto adicionado")
            ;}else{$(".item-dimension-Talla").append('<p class="mensaje">Selecciona la talla</p>');}
        });
});

$( document ).ready(function() {
  		$(".item-dimension-Color input").first().click();
        $('.buy-in-page-button').click(function() {
          if($('.item-dimension-Talla input').hasClass('checked')){
            console.log("producto adicionado");
            $(".popup").fadeToggle( "slow");
            $("body").addClass( "belo");
            ;}else{$(".item-dimension-Talla").append('<p class="mensaje">Selecciona la talla</p>');}
        });
  $('.cerrarP').click(function() {
	$(".popup").fadeToggle( "slow");
    $("body").removeClass( "belo");
});

  $( ".popup .box-item" ).each(function() {
	var link = $(this).find(".add a").attr("href");
	$(this).find(".product-image").attr("href", link);
	$(this).find(".product-name a").attr("href", link);
	$(this).find(".price a").attr("href", link);
});
  
  $(".cerrarP").click(function() { location. reload();
});
});


$( document ).ready(function() {
	/*$('.produto .product-info').prepend("<div><a style='color:red;text-transform:uppercase' href='https://co.diesel.com/55dsl-interna'>Ir al streaming de 55DSL</a></div>");*/
$('.owl-carousel.one').owlCarousel({
  center:false,
  loop:true, nav:false,
  margin:0,
  items:1,
  dots:false,
  autoplay:true,
});
  });
setTimeout(function(){ $( ".BannerIn.reloj img" ).hover(
  function() {
   $(".reloj").css( "background", "url(https://dieselcolombia.vteximg.com.br/arquivos/bannermancha2-1.gif)" );
  }, function() {
    $( ".BannerIn.reloj" ).css( "background", "transparent" );
  }
);$('.BannerIn.reloj').css("background","transparent");}, 5000);
