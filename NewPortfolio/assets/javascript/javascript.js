$(document).ready(function() {
  
  $("#nav_bar").hide();

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > 746) {
        $('#nav_bar').addClass('navbar-fixed');
        $("#nav_bar").show();
      }
      if ($(window).scrollTop() < 747) {
        $('#nav_bar').removeClass('navbar-fixed');
        $("#nav_bar").hide();
      }
    });
  });


  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });
  
  var instance = M.Parallax.getInstance(elem);

  // window.scroll({
  //   top: 2500, 
  //   left: 0, 
  //   behavior: 'smooth' <pre rel="HTML"><code markup="tt" class="language-markup">
  // });
  
  // Scroll certain amounts from current position 
  // window.scrollBy({ 
  //   top: 100, // could be negative value
  //   left: 0, 
  //   behavior: 'smooth' 
  // });
  
  // // Scroll to a certain element
  // document.querySelector('.smoothScroll').scrollIntoView({ 
  //   behavior: 'smooth' 
  // });