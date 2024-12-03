let navbarTop=document.querySelector(".navbar-top")
let logo=document.querySelector(".logo")
let navbarBottom=document.querySelector(".navbar-bottom")

window.addEventListener("scroll", ()=>{
    let scroll=window.scrollY
    if (scroll>150) {
        navbarTop.style.display="none"
        navbarBottom.style.padding="15px"
        logo.style.fontSize="30px"

    } else {
            navbarTop.style.display="flex"
            logo.style.fontSize="40px"
            navbarBottom.style.padding="30px 0px"
    }
  })



  let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        }

        let slides=document.querySelectorAll(".mySlides")
        setInterval(() => {
            plusSlides(1);
        }, 4000);