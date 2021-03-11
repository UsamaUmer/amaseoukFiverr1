let mainNav = document.getElementById("js-menu");
      let navBarToggle = document.getElementById("js-navbar-toggle");

      navBarToggle.addEventListener("click", function() {
                mainNav.classList.toggle("active");
            });


//Scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.boxShadow = "box-shadow: 0px 1px 10px #999;";
  } 
//    else {
//    document.getElementById("navbar").style.top = "-50px";
//  }
}