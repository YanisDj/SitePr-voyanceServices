const headerEl = document.querySelector(".navbar");

window.addEventListener('scroll', () =>{
  if(window.scrollY>50){
    headerEl.classList.add('navbar-scrolled');

  }else if(window.scrollY<=50){
    headerEl.classList.remove('navbar-scrolled');
  }

});