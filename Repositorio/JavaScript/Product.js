

$('ul.thumbs li a').each(function(){
	var imgZoom = $(this).attr('zoom')
	$(this).attr('href',imgZoom)

})
function precioProdu () {

  if($(".productPrice").find('.skuListPrice').length == 0){
      //$(this).append('<span class="dtoF">'+resultF+'% Bancolombia</span>')}}
      $(".skuBestPrice").append('<span class="tresx">aplica 3x2</span>');skuBestPrice
  }
}
console.log("prueba")
$('ul.thumbs li a').click(function(e){
e.preventDefault();
  
$('ul.thumbs li').toggleClass('hideImgs')  
$(this).parent().toggleClass('hideImgs').toggleClass('activeImg')
if($(this).parent().is( ".activeImg" )){
 	console.log("active")
	var imglink = $(this).find('img').attr('src')
    
    var newIgm = imglink.replace('-422-564','-1000-1000')
    
    $(this).find('img').attr('src',newIgm)
}else{
	console.log("is disactive")
	var imglink = $(this).find('img').attr('src')
    
    var newIgm = imglink.replace('-1000-1000','-422-564')
    
    $(this).find('img').attr('src',newIgm)
}
  

})
$( ".glis-popup-link.glis-thickbox.tb-added qvBinded" ).click(function() {
 $('.glis-existing-title').html('Si ya tienes una lista creada seleccionala aquí.');
$('.glis-submit.glis-submit-new').html('Crear y adicionar');
$('.glis-selected').html('Crea tu Lista de favoritos y adiciona los productos que quieras');
});


$( document ).ready(function() {
 $(".vitrina.inferior").each(function(){
   var variable = $(this).find(".prateleira h2").text();
   if(variable.length == 0 ){$(this).prev().css('display','none'); }
  });
  precioProdu ();
});

$(document).ready(function(){
  var VentanaA = $(window).width();
	if(VentanaA < 500 ){$('.thumbs').owlCarousel({
    items:2,
    loop:true,
    margin:10,})}else{};
});  