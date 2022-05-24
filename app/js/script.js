const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".navbar-menu");


window.onload=function(){
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  
  }
  
  hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  })
}