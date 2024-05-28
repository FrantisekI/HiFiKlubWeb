const hamburger = document.getElementById('nav_hamburger');
const navBar = document.getElementById('semitransparent_background_nav');
const nadpis = document.getElementById('nazev');
const hiddenNav = document.getElementById('nav_hide');
navBar.style.display = 'none'

hamburger.onclick = () => {
  navBar.style.display = 'inline';
};


function handleViewportChange() {
  if (window.matchMedia('(min-width: 900px)').matches) {
    navBar.style.display = 'none';
  }

}

//window.addEventListener("resize", test)
// Register event listener for viewport width changes

changeMrginOfNav();
window.addEventListener('resize',() => {
  handleViewportChange();
   changeMrginOfNav();
  });


//if clicked outside pop up nav, hide it
window.onclick = function (event) {
  var hiddenNav = document.getElementById('nav_hide');

  if (event.target.contains(hiddenNav) && event.target !== hiddenNav) {
    navBar.style.display = 'none';
  }

}

function changeMrginOfNav(){
  //move nav hide lower
  var nadpisHight = nadpis.offsetHeight;
  //console.log("The height of the div is: " + nadpisHight + " pixels");
  hiddenNav.style.marginTop = String(nadpisHight) + 'px';
}

