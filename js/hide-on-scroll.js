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
    $(".arrow_down2").css("opacity", 2 - $(window).scrollTop() / 1000);
  });


  var divs = $('.why');
  $(window).scroll(function(){
     if($(window).scrollTop()<10){
           divs.stop(true,true).fadeIn("fast");
     } else {
           divs.stop(true,true).fadeOut("fast");
     }
  });
