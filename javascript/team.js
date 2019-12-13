// JavaScript Document


const hamburger = document.querySelector(".hamburger");
const menuOverlay = document.getElementById('menu-overlay');
const menuItems = document.getElementById('menu-items');
const main = document.getElementById('main');
const heading = document.getElementById('heading');
const menuContainer = document.querySelector('.menu-container');
let timesClicked = 0;

const onClick = () => {
    if(timesClicked < 1) {
        timesClicked++;
        hamburger.classList.toggle('is-active');
        menuContainer.style.display = 'flex';
    }else{
        timesClicked--;
        hamburger.classList.toggle('is-active');
        menuContainer.style.display = 'none';
    }

}

hamburger.addEventListener("click", onClick);