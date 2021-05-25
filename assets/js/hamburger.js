// GET ACCESS TO THE NAV-ITEM CONTAINER FROM THE HTML
const navItemContainer = document.getElementById("nav-item-wrapper");


// FUNCTION THAT OPENS AND CLOSE THE NAVBAR 
function toggleNavbar(){
    navItemContainer.classList.toggle("open-nav-items")
}