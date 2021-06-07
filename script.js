$('.carousel').carousel({
    interval: 3000
  })
  $(document).ready(function (){
    $(".navbar-nav").on("click" , ".nav-link" , function(e) {
  
      let txt = $(e.target).text();
       $("#" + txt).addClass("highlight")
  
       if ($("#" + txt).change()) {
         setTimeout(removeHightlight , 5000)
       }
       
       function removeHightlight() {
           $("#" + txt).removeClass("highlight");
         
       }
  
      var winHeight = $(window).height(),
      topOffset = $("#" + txt).offset().top,
      elementHeight = $("#" + txt).height();
      var top = topOffset - winHeight + elementHeight;
  
       $('html, body').animate({scrollTop: top}, 3000);
  
    });
  
  
  
  
  $("#up-arrow").click(function() {
  
  $("html, body").animate({ scrollTop: 0 }, 3000);
  
  
  });
  
  
  $(window).scroll(function() {
  
  
  if ($(this).scrollTop() > 40) {
  
  $("#up-arrow").fadeIn();
  
  }
  
  else {
  $("#up-arrow").fadeOut();
  
  
  }
  
  });
  
  
  
  });
    
    
    