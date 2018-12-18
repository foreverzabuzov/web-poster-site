// $(window).bind('scroll', function() {
//      if ($(window).scrollTop() > 400) {
//          $('#arrow_down').hide();
//      }
//      else {
//          $('arrow_down').show();
//      }
// });

$(window).scroll(function(){
    $(".arrow_down").css("opacity", 1 - $(window).scrollTop() / 760);
  });
