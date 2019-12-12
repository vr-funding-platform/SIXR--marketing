// JavaScript Document


const hamburger = document.querySelector(".hamburger");
const menuOverlay = document.getElementById('menu-overlay');
const menuItems = document.getElementById('menu-items');
const main = document.getElementById('main');
const heading = document.getElementById('heading');
let timesClicked = 0;

const onClick = () => {
    if(timesClicked < 1) {
        timesClicked++;
        hamburger.classList.toggle('is-active');
        hamburger.style.position = 'fixed';
        menuOverlay.style.left = "0";
        menuOverlay.style.width = '100%';
        menuOverlay.style.opacity = '1';
        menuItems.style.display = 'flex';
        menuOverlay.style.display = 'inherit';
        menuOverlay.style.background = 'black';
    }else{
        timesClicked--;
        hamburger.classList.toggle('is-active');
        hamburger.style.position = 'inherit';
        menuOverlay.style.border = 'none';
        menuOverlay.style.left = "80%";
        menuOverlay.style.width = '0%';
        menuOverlay.style.display = 'none';
        menuItems.style.display = 'none';
    }

}

hamburger.addEventListener("click", onClick);