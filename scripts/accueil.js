const headerEl = document.querySelector(".navbar");

window.addEventListener('scroll', () =>{
  if(window.scrollY>100){
    headerEl.classList.add('navbar-scrolled');

  }else if(window.scrollY<=100){
    headerEl.classList.remove('navbar-scrolled');
  }

});

const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
});


document.addEventListener('DOMContentLoaded', function() {
  var offre = document.querySelector('.offre');

  function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      if (isElementInViewport(offre)) {
          offre.classList.add('show');
          window.removeEventListener('scroll', handleScroll);
      }
  }

  window.addEventListener('scroll', handleScroll);
});


/*TEST*/
