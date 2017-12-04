/* Animation de la scrollbar au changement de section */
$(function(){

    $(".navbar a, footer a, #home a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body, html').animate({scrollTop: $(hash).offset().top}, 900 , function(){window.location.hash = hash;})

    });

});

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

/* Carousel fonction Swipe */
$(".carousel").swipe({
    
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    
      },
      allowPageScroll:"vertical"
    
    });