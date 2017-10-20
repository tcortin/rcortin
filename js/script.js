/* Animation de la scrollbar au changement de section */
$(function(){

    $(".navbar a, footer a, #home a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body, html').animate({scrollTop: $(hash).offset().top}, 900 , function(){window.location.hash = hash;})

    });

});

/* Desactiver le clic droit */
function clickIE4(){ if (event.button==2){ return false; } } function clickNS4(e){ if (document.layers||document.getElementById&&!document.all){
     if (e.which==2||e.which==3){ return false; } } } 
     if (document.layers){ document.captureEvents(Event.MOUSEDOWN); document.onmousedown=clickNS4; } 
     else if (document.all&&!document.getElementById){ document.onmousedown=clickIE4; } document.oncontextmenu=new 
     Function("return false")


/* Animer les elements à l'affichage */
$(window).scroll(function () { 

    if ($(this).scrollTop() > 200 && !$(this).data('revealed')) {
        $('.paragraphe').delay(500).animate({ left: 0, opacity: 1 }, 400);
    }
    if ($(this).scrollTop() > 1000 && !$(this).data('revealed')) {
        $('.btn-wall').delay(500).animate({ opacity: 1 }, 400);
    }
    if ($(this).scrollTop() > 1800 && !$(this).data('revealed')) {
        $('.exemple-photo').delay(500).animate({ top: 0, opacity: 1 }, 400);
    }
});

