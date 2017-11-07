/* Animation de la scrollbar au changement de section */
$(function(){

    $(".navbar a, footer a, #home a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body, html').animate({scrollTop: $(hash).offset().top}, 900 , function(){window.location.hash = hash;})

    });

});

// /* Desactiver le clic droit */
// function clickIE4(){ if (event.button==2){ return false; } } function clickNS4(e){ if (document.layers||document.getElementById&&!document.all){
//      if (e.which==2||e.which==3){ return false; } } } 
//      if (document.layers){ document.captureEvents(Event.MOUSEDOWN); document.onmousedown=clickNS4; } 
//      else if (document.all&&!document.getElementById){ document.onmousedown=clickIE4; } document.oncontextmenu=new 
//      Function("return false")


/* Animer les elements à l'affichage */
var $win = $(window);
var $stat = $('.animate');

$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $stat.each(function () {
        var $self = $(this);
        var prev=$self.offset();
      	console.log(scrollTop);
        console.log(prev.top);
        if ( (scrollTop - prev.top) > -550) {
          $self.css('opacity', '1');
          $self.css('left', '0');
          $self.css('top', '0');
        } else {
          console.log('n');
        }
   
    });

}).scroll();