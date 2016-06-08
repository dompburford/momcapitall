// First Page - Fade In 

$( document ).ready(function() {

  $(window).fadeIn(function(){
      $(".logo").fadeIn(2000);
      // && $(".logo").css({
      //   "-webkit-transform" : "matrix3d(0.9659258262890683, 0, 0.25881904510252074, 0, 0, 1, 0, 0, -0.25881904510252074, 0, 0.9659258262890683, 0, 0, 0, 0, 1)",
      //   "transform" : "matrix3d(0.9659258262890683, 0, 0.25881904510252074, 0, 0, 1, 0, 0, -0.25881904510252074, 0, 0.9659258262890683, 0, 0, 0, 0, 1)",
      //   });

     // setTimeout(function() { $(".logo").css({WebkitTransition : "opacity 1s ease-in-out", MozTransition : "opacity 1s ease-in-out", transition: "opacity 1s ease-in-out"}); }, 1500);

      $(".logo-behind").fadeIn(2000);
      //  && $(".logo-behind").css({
      //   "-webkit-transform" : "matrix3d(0.9659258262890683, 0, 0.25881904510252074, 0, 0, 1, 0, 0, -0.25881904510252074, 0, 0.9659258262890683, 0, 0, 0, 0, 1)",
      //   "transform" : "matrix3d(0.9659258262890683, 0, 0.25881904510252074, 0, 0, 1, 0, 0, -0.25881904510252074, 0, 0.9659258262890683, 0, 0, 0, 0, 1)",
      //   });
  
      $(".introduction-one").delay(100).fadeIn(2500);
  
      $(".line").delay(90).fadeIn(2500);
      // && $(".line").css("transform", "matrix3d(0.9659258262890683, 0, 0.25881904510252074, 0, 0, 1, 0, 0, -0.25881904510252074, 0, 0.9659258262890683, 0, 0, 0, 0, 1)");
      
      $(".cities").delay(90).fadeIn(2500); $(".email").delay(100).fadeIn(2500); $(".buttons").delay(700).fadeIn(2200);
  });
  
  // Second Page - Scroll Fade In 
  
  $(window).scroll(function() {
      if ($(window).scrollTop() > 200) {
        $('.button').fadeOut("normal");
        $('.logo-two').delay(100).fadeIn("slow");
        $(".introduction-two-div").fadeIn(2400) && $(".wheelys").fadeIn(2400) && $(".provoke").fadeIn(2400);
      } else {}
  });
  
  // Second Page - Click Fade In 
  
  $(".button").click(function(event) {
       $('html, body').animate({ scrollTop: $(".button").offset().top + (70) }, 1200); 
       $('.button').fadeOut("normal");
       $('.logo-two').delay(500).fadeIn("slow");
       $(window).fadeIn(function(){ 
         (".introduction-two-div").delay(700).show() && $(".wheelys").delay(700).fadeIn(2400) && $(".provoke").delay(700).fadeIn(2400);
       });
  });

});



$(".logo-behind-gif").mousedown(function(){
    return false;
});







