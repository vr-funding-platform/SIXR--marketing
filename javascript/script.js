// JavaScript Document

/*
document.ready(function () {
    document.getElementsByClassName("open--menu").onclick = function () {
        document.getElementsByClassName("overlay").classList.add("open")
    };
    document.getElementsByName("close--menu").onclick = function() {
        document.getElementsByClassName("overlay").classList.remove("open")
    };
});
*/


const hamburger = document.querySelector(".hamburger");
const menuOverlay = document.getElementById('menu-overlay');
const menuItems = document.getElementById('menu-items');
let timesClicked = 0;

const onClick = () => {
    if(timesClicked < 1) {
        timesClicked++;
        hamburger.classList.toggle('is-active');
        menuOverlay.style.border = '2px solid #08c6e7';
        menuItems.style.display = 'flex';
    }else{
        timesClicked--;
        hamburger.classList.toggle('is-active');
        menuOverlay.style.border = 'none';
        menuItems.style.display = 'none';
    }

}

hamburger.addEventListener("click", onClick);

/*
const button = document.getElementById("btn");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const home = document.getElementById("homeBtn");

const menuToggle = () => {
    header.classList.toggle("menuBackground");
    button.classList.toggle("is-active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("menu-show");
    footer.classList.toggle("hidden");
    
};

button.addEventListener("click", menuToggle);
*/