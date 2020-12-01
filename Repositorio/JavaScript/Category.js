//script boton flotante
setTimeout(function(){ $(".BotoomF").css("display","none")}, 15000);
 $('.BotoomF').hover(function() {
    $('.SaidaC').toggleClass("in");
  }//, function() {    $('.princ img').toggle();  }
);

//Scroll Infinito 
$(".prateleira[id*=ResultItems]").QD_infinityScroll({
	// Última prateleira/vitrine na página
	lastShelf: ">div:last",
	// Elemento com mensagem de carregando ao iniciar a requisição da página seguinte
	elemLoading: '<!-- Infinity Scroll - Loading message --><div id="scrollLoading" class="qd-is-loading">Cargando ... </div>',
	// Opção p/ definir a URL manualmente, ficando automático apenas a paginação. A url deve terminar com "...&PageNumber="
	searchUrl: null,
	// Objeto jQuery com o botão de voltar ao topo
	returnToTop: $('<div id="returnToTop" class="qd-is-return-top"><a href="#"><span class="text">Volver al</span><span class="text2">TOP</span><span class="arrowToTop"></span></a></div>'),
	// Define em qual seletor a ação de observar a rolagem será aplicado (ex.: $(window).scroll(...))
	scrollBy: document,
	// Callback quando uma requisição ajax da prateleira é completada
	callback: function () {},
	// Cálculo do tamanho do footer para que uma nova página seja chamada antes do usuário chegar ao "final" do site
	getShelfHeight: function ($this) {
		return ($this.scrollTop() + $this.height());
	},
	// Opção para fazer a paginação manualmente, uma nova página só é chamada quando executado o comando dentro desta função. Útil para ter um botão "Mostrar mais produtos"
	// Ela recebe como parâmetro: 1 função que chama a próxima página (caso ela exista)
	paginate: null,
	// Esta função é quem controla onde o conteúdo será inserido. Ela recebe como parâmetro: O ùltimo bloco inserido e os dados da nova requisição AJAX
	insertContent: function (currentItems, ajaxData) {
		currentItems.after(ajaxData);
	},
	// Função para permitir ou não que a rolagem infinita execute na página esta deve retornar "true" ou "false"
	authorizeScroll: function () {
		return true;
	}
});
//navigator filtros
$(".search-multiple-navigator input[type='checkbox']").vtexSmartResearch({
      loadContent:".prateleira[id^=ResultItems]",
      shelfClass:".prateleira",
      ajaxCallback : function(){
				
				
		},
      filterScrollTop:function(shelfOffset){
			return (shelfOffset.top-20);
			
	   },
      shelfCallback:function(){
        		

        		
      },
      emptySearchCallback:function(e){
      	e.preventDefault();
      	alert("No existen resultados en tu busqueda");
      }


  });

$('.search-multiple-navigator fieldset > h5').click(function(e){

	e.preventDefault()
    $(this).next().toggleClass('openFil')

})

// script dto precios

function precioDto () {
$('.price').each(function(){ 
  if($(this).find('.old-price').length > 0){
    if($(this).find('.dtoF').length == 0){
    var pruebaF = $(this).find('.dtoF').length;console.log(pruebaF);
    var precioO = $(this).find('.old-price').text().replace('.','').replace('$','').replace('.','');
    var precioF = $(this).find('.best-price').text().replace('.','').replace('$','').replace('.','');
    var resultP = precioO - precioF; 
      var resultA = (resultP *100) / precioO;
    var resultF = parseInt(resultA);
    $(this).append('<span class="dtoF">'+resultF+'% </span>');
    
  	var newC = $(this).find(".dtoF").text();
  	var newV = "-19% ";
  	if (newV === newC){$(this).find(".dtoF").html("-20%");};
  	/*$(this).append('<span class="dtoB">-50% Pagando <img width="29px" src="/arquivos/bancolombia-bandera.png"/></span>');*/
    }}	
  
});

}
/*
function precioDtoB () {
$('.price').each(function(){ 
  if($(this).find('.old-price').length == 0){
    if($(this).find('.dtoB').length == 0){
    var pruebaF = $(this).find('.dtoF').length;console.log(pruebaF);
    var precioO = $(this).find('.old-price').text().replace('.','').replace('$','').replace('.','');
    var precioF = $(this).find('.best-price').text().replace('.','').replace('$','').replace('.','');
    var resultP = ((precioF / precioO)-1)*100; 
    var resultF = parseInt(resultP);
      $(this).append('<span class="dtoF">'+resultF+'% Bancolombia</span>');
      $(this).append('<span class="dtoB">-30% Pagando <img width="29px" src="/arquivos/bancolombia-bandera.png"/></span>');}}
  
});
}
*/


$( document ).ready(function() {
  precioDto ();
 /* precioDtoB ();  */
});

window.addEventListener('scroll', function(e) {precioDto()})

// Script color precios

function precioC () {
$('.price').each(function(){ 
	if($(this).find('.old-price').length > 0){ 
		$(this).find('.best-price').css('color','red');
      	$(this).find('.best-price').addClass('widthC') 
	}else{}
});
}
$( document ).ready(function() {
  precioC ();
  });


window.addEventListener('scroll', function(e) {precioC()})

//controla el scroll scripts
$(window).scroll(function() {    
   var scroll = $(window).scrollTop();

    //>=, not <=
   if (scroll >= 800) {
       //clearHeader, not clearheader - caps H
     GeneralesTeknopolis.init();

     productOut();
     precioC ();
     precioDto ();
     precioDtoB ();
     quitarA ();
     quitarC ();
     
   }
});
function productOut (){ $('.out-of-stock').html('Producto Agotado') };
$('.out-of-stock').html('Producto Agotado');

//$('.titulo-sessao').html('Resultado de busqueda');
//ordenar por
$( ".ordenarpor" ).click(function() {$('.lvl-B').slideToggle();});
$( ".ordenarporC" ).click(function() {$('.lvl-C').slideToggle();});

// filtro busca.
function creation () {
if($('.refino').length <= 0){
$('.menu-departamento').append('<fieldset class="refino Filtros filtro_gender"><h5 class="  Filtros">Gender</h5><div class=""><ul><li><a href="/Hombre">Hombre</a></li><li><a href="/Mujer">Mujer</a></li><li><a href="/Niños">Niños</a></li></ul></div></fieldset>');
}else{};}
function filtroUrl () {
$('.filtro_gender div li').each(function(){ 
	var urlN = $(this).find('a').text();
	var nombreN = location.pathname;
	var filtro = urlN + nombreN;
	$(this).find('a').attr('href',filtro);
	console.log(filtro)
});
}


// Borrar agotados 
function quitarA () {
$('.box-item.text-center').each(function(){ 
	if($(this).find('.out-of-stock').length > 0){$(this).css('display','none')}
});
};

$( document ).ready(function() {
	creation ();
	$( ".filtro_gender" ).click(function() {$('.filtro_gender ul').slideToggle();});
  	filtroUrl ();
  	quitarA ();
  });


