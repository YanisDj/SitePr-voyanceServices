const headerEl = document.querySelector(".navbar");

window.addEventListener('scroll', () =>{
  if(window.scrollY>50){
    headerEl.classList.add('navbar-scrolled');

  }else if(window.scrollY<=50){
    headerEl.classList.remove('navbar-scrolled');
  }

});

const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
});