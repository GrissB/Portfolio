$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
      if(this.scrollY > 500){
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});

  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Inspirational", "Passionate", "Empoweringr", "Motivating", "Leader"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed(".typing-2", {
    strings: ["Inspirational", "Passionate", "Empowering", "Motivating", "Leader"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

 //owl carouse script
 $('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
     }
  });
    function ajaxpost(){
      // a. get form data
      var data = new FormData();
      data.append("name", document.getElementById("user-name").value);
      data.append("email", document.getElementById("user-email").value);
      data.append("name", document.getElementById("user-subject").value);
      data.append("email", document.getElementById("user-project").value);
     // (B) AJAX REQUEST
  // NOTE - AJAX WILL NOT WORK WITH file://
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "1c-server.html");
      xhr.onload = function () {
        console.log(this.response);
        console.log(this.status);
    
        // (B1) SERVER NOT RESPONDING OR SOMETHING
        // HTTP response 200 is OK
        // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status for more
        if (xhr.status != 200) { alert("SERVER ERROR"); }
    
        // (B2) WHEN SERVER IS DONE
        else {
          if (xhr.response == "OK") { alert("SUCCESSFUL!"); }
          else { alert("FAILURE!"); }
        }
  };
            xhr.send(data);
          
            // (C) PREVENT FORM SUBMIT
            return false;
    }


});
