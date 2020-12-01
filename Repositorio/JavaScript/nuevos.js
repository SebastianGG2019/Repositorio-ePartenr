$("div#diesel_word__link, #close__worldcont").click(function(e){
  e.preventDefault()
  $('#diesel_worldcont, #diesel_word__link .footer-link-text').toggleClass('activex')

});
$( "div.footer-navigation" ).first().click(function(e){
  e.preventDefault()
  $('.footer-link-content').first().toggleClass('activex'); $('.footer-link-text').first().toggleClass('activex')});


$( "div.footer-navigation.second" ).click(function(e){
  e.preventDefault()
  $('.footer-link-content.second').first().toggleClass('activex');$('.footer-navigation.second .footer-link-text').first().toggleClass('activex')});
// Buscar en el menú
$( ".search-btn" ).click(function() {
  $( ".buscar " ).toggle();
});

// Remplazar palabra search

function remplazar (){
	var variable = window.location.search;
	var newB = variable.replace(/.+?[=}]/g,"");
	$('.textoB').html(newB);  
}
$( document ).ready(function() {
  remplazar();
});

// click product
$( document ).ready(function() {
             $( ".expand-block" ).click(function() {
            $(this).find( ".expand-block-head" ).toggleClass( "active" );
            });
             $( ".expand-block" ).click(function() {
            $(this).find(".expand-block-body").toggle();
            });
});
// scroll down
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".arreglar").addClass("fixed");
    } else {
        $(".arreglar").removeClass("fixed");
    }
});



//carrito en 0

$(window).load(function() {
var settime= setTimeout(function(){var cantidad = $('.badge.bg-danger.mini-cart-qty-admake').text(); if (cantidad == 0) { $('.badge.bg-danger.mini-cart-qty-admake').hide()};}, 500);
});


// adicionar
$('.search-multiple-navigator').prepend('<div class="titleFiltros">Filtrar por</div>');
$('.search-multiple-navigator').prepend('<div class="titleF">filtrar por    +</div>');
$(".search-multiple-navigator").prepend('<div class="ordenarC"><ul><h3>Clasificar por</h3><li><a href="?O=OrderByPriceASC">Menor Precio</a></li><li><a href="?O=OrderByPriceDESC">Mayor Precio</a></li><li><a href="?O=OrderByTopSaleDESC">Más vendidos</a></li><li><a href="?O=OrderByNameASC">A - Z</a></li><li><a href="?O=OrderByNameDESC">Z - A</a></li><li><a href="?O=OrderByReleaseDateDESC">Fecha de lanzamiento</a></li><li><a href="?O=OrderByBestDiscountDESC">Mejor Descuento</a></li></ul></div>');

$('.navigation-tabs').append('<div class="botonmovil">Filter-Sort By</div>');

function rize (){
  $(window).resize(function(){
	consoleT = $( window ).width();
	if (consoleT <= 900) {
        // Cambiar tmano
      $('.menu-departamento').hide();
		
    } else {
		$('.menu-departamento').show()
        // este código se ejecutará si foo y bar son falsos (false)
    };});
	};

$( document ).ready(function() {
if (screen.width > 800) 
{$('.menu-departamento').show()};
//rize();});
  });
if (screen.width <= 800) 
{$('.menu-departamento').hide()};
//resize


$('.menu-departamento').prepend('<div class="closeF">x</div>');
$( ".botonmovil" ).click(function() {$('.menu-departamento').css('display','block')});
$( ".closeF" ).click(function() {$('.menu-departamento').css('display','none')});
$('.bread-crumb li.last').prepend('<a>vuelve a todos </a>');
$( ".cerrarB" ).click(function() { $('.buscar').toggle('slow');});

//custom menu
//$("#men, #women, #kids").hover(function(){
$(".men, .women, .kids").hover(function(){
  $('.men, .women, .kids').removeClass("active");$(this).addClass("active");
  });
$(".header .ajuste a strong").hover(function(){
  $('.header .ajuste a strong').removeClass("active");$(this).addClass("active");
  });
$(".header .ajuste div a").hover(function(){
  $('.header .ajuste div a').removeClass("active");$(this).addClass("active");
  });

$(".level-1, level-1 li, .ajuste ul li").hover(function(){ if ($(".ajuste ul li").hasClass("active")){$('.active, .ajuste ul li').removeClass("active")}
  });

//Close carrito si no tiene productos
$(window).load(function() {
var settime= setTimeout(function(){if ($(".mini-cart-item .imagem").length == 0){$('.mini-cart-footer').hide();}}, 500);
});

// product adicion

if(($('.value-field.Material').text()).length > 0){$( ".productDescription" ).append("<br/>-"+($('.value-field.Material').text()));}
$( ".productDescription" ).append("<br/>-"+($('.value-field.Coleccion').text()));
$( ".productDescription" ).append("<br/>-"+($('.value-field.Temporada').text()));
$( ".modelo .expand-block-body span" ).append(($('.value-field.Talla-del-modelo').text()));
$('.giftlist-header-desired').html("Cant Productos");

//carrito

$( ".cartM" ).hover(
  function() {
    $( '#mini-cart-admake' ).css('display','block');
  }, function() {
    $( '#mini-cart-admake' ).css('display','none');
  })

//favoritos

if($('.giftlist-body-name').html()) {
    console.log('Yes content');
  } else {    
    $(".giftlist-action-create, .contenedorG").toggle();
  };
$('.giftlisturl label').html('Url de la lista');
$('input#giftlisturl').attr("placeholder", "Url de la lista");
$('#giftlistaccept').click();
$('.no-product.message').html('No existen productos en tu lista por favor navega el sitio y agregalos en el botón de favoritos');
$('.admin-only.action-view a').html('Visualiza tu lista');

//Vitrinas producto
$( document ).ready(function() {
 $(".vitrina.inferior").each(function(){
   var variable = $(this).find(".prateleira h2").text();
   if(variable.length == 0 ){$(this).prev().css('display','none'); }
  });
});



//Remplazar video
   var ventana_ancho = $(window).width();
   if(ventana_ancho < 500){
   $(".new .BannerIn.princ img").attr("src","/arquivos/mobiledieselB.jpg");
   $(".redO .video video").attr("src","https://digitalepartner.com/Diesel/redordinance%20mobil.mp4");
   $(".content-slot.three.mobilChopped").html('<div class="container"><div class="image"><img src="/arquivos/ultimo-banner.jpg"></div><div class="image textoI"><div class="titleI">MATERIALES</div><p>La colección combina una pantalla digital con una caja de diseño asimétrico y una correa de silicona tridimensional con el logo de Diesel. El tamaño de la caja es de 32,5 x 38 mm.</p><div class="bottonI"><a href="/chopped/relojes">Comprar ahora</a></div></div></div>');
   $(".content-slot.three.mobilRedO").html('<div class="container"><div class="image"><img src="/arquivos/two-one.png"></div><div class="image"><img src="/arquivos/two-two.png"></div><div class="image textoI"><div class="titleI">NUEVOS ESTILOS</div><p>Las nuevas e icónicas plataformas, son fuertes y llamativas. Extraen la estética de los diseños más atrevidos y nunca temerosos de Diesel, y reflejan la naturaleza asertiva y la voz única de la marca. </p><div class="bottonI"><a href="/red-ordinance/relojes">Comprar ahora</a></div></div></div>');
    $(".content-slot.three.mobilFadelite").html('<div class="container"><div class="image"><img src="/arquivos/segundobannerfade.png"></div><div class="image textoI"><div class="titleI">EL DISEÑO LLEVADO AL LÍMITE EN UN SMARTWATCH</div><p>Inspirados en el nombre del reloj, los pulsos parecen difuminarse en cuatro llamativas combinaciones: de&nbsp;rojo&nbsp;a&nbsp;negro, de negro a&nbsp;transparente, de&nbsp;azul&nbsp;a transparente&nbsp;y totalmente transparente&nbsp;con una caja iridiscente. El reloj viene equipado con una caja de 43 mm en aluminio extra liviano y una nueva e innovadora esfera “Globe”, la cual cuenta con un globo terráqueo giratorio que podrás manipular con tan solo un toque y ver dos zonas horarias adicionales. </p><div class="bottonI"><a href="/fadelite/relojes">Comprar ahora</a></div></div></div>')
   }



//rotador
   if(ventana_ancho > 500){
 var typed2 = new Typed('.adicional', {
   strings: ['<p><span class="two">(4) 265 31 11 ext: 4297 - 4300</span></p>'],
    typeSpeed: 60,
    backSpeed: 15000,
    fadeOut: true,
    loop: true
  });   };

/*
<a class="whatsappT" href="https://wa.me/573143885906"><span class="one">(314) 388 5906</span></a>
   strings: ['<p><a class="whatsappT" href="https://wa.me/573135204832"><span class="one">(313) 520 4832</span></a><span class="two">(305) 734 1467</span></p>'],
*/

//Departmen filters
var settime= setTimeout(function(){
$(".Filtros div label").click(function(){
 $(this).parent().parent().find(".openFil").removeClass("openFil");
});$(".filtro_1-cintura h5").html("Cintura");
$( ".refino div label input" ).click(function() {
		  $(".filtroAc").css("display","flex")	
           setTimeout(function(){ 
          $(".filtrosCa").html(" ");
          $(".refino.Filtros div label").each(function( index ) {
          if($(this).hasClass("sr_selected")){
          var newVariable = $(this).attr("title");
          var variableS = "'"+newVariable+"'";  
           $(".filtrosCa").append("<div class='filtoC' id="+ newVariable +">"+ newVariable +" X</div>");
          }
          });
             setTimeout(function(){ 
          $(".filtoC").click(function(){
            var variable = $(this).text().replace(" X", "");
            var idA = $(this).attr("id");
            var title = "label[title='"+variable+"']";
            console.log(title);
            $(title).click();
            var IdC = "#"+idA;
            $(IdC).remove();
          });}, 1000);
           }, 1000);

           });

  $(".navigation-tabs").append("<div style='display:none' class='filtroAc'><h3>Filtros activos</h3><div class='filtrosCa'></div></div>");

}, 1000);

/*var settime= setTimeout(function(){
$(".Generales div label").click(function(){
 $(this).parent().parent().find(".openFil").removeClass("openFil");
});$(".filtro_1-cintura h5").html("Cintura");
$( ".refino div label input" ).click(function() {
		  $(".filtroAc").css("display","flex")	
           setTimeout(function(){ 
          $(".filtrosCa").html(" ");
          $(".refino.Generales div label").each(function( index ) {
          if($(this).hasClass("sr_selected")){
          var newVariable = $(this).attr("title");
          var variableS = "'"+newVariable+"'";  
           $(".filtrosCa").append("<div class='filtoC' id="+ newVariable +">"+ newVariable +" X</div>");
          }
          });
             setTimeout(function(){ 
          $(".filtoC").click(function(){
            var variable = $(this).text().replace(" X", "");
            var idA = $(this).attr("id");
            var title = "label[title='"+variable+"']";
            console.log(title);
            var IdC = "#"+idA;
            $(IdC).remove();
          });}, 1000);
           }, 1000);

           });

}, 1000);*/

//Scroll mini video evento

        $(function () { 
            
            $(window).scroll(function () { 
                var scroll = $(window).scrollTop(); 
  
                if (scroll >= 150) { 
                    $("iframe#ls_embed_1600892912").css("display", "block");
                } else { 
                   $("iframe#ls_embed_1600892912").css("display", "none");
                } 
            }); 
        }); 

