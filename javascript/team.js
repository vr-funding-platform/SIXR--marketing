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
        heading.style.paddingLeft = '50.25rem';
        menuOverlay.style.left = "0";
        menuOverlay.style.width = '20%';
        menuOverlay.style.opacity = '0.9';
        menuItems.style.display = 'flex';
        menuOverlay.style.display = 'inherit';
        menuOverlay.style.background = 'black';
    }else{
        timesClicked--;
        hamburger.classList.toggle('is-active');
        hamburger.style.position = 'inherit';
        heading.style.paddingLeft = '0';
        menuOverlay.style.border = 'none';
        menuOverlay.style.left = "80%";
        menuOverlay.style.width = '0%';
        menuOverlay.style.display = 'none';
        menuItems.style.display = 'none';
    }

}

hamburger.addEventListener("click", onClick);