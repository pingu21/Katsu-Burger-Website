const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar-menu");

hamburger.addEventListener("click" , () => {
  navbarMenu.classList.toggle("show");
  hamburger.classList.toggle("show");
});




function scrollToMenu(){
  var element = document.getElementById("menu-anchor");
  element.scrollIntoView({behavior: "smooth"});
}

function scrollToTop(){
  window.scrollTo({top: 0, behavior: "smooth"});

}