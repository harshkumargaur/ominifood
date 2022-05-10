'use strict';

const navMobBtn = document.querySelector('.menu');
const navListMob = document.querySelector('.nav-list-mob');

navMobBtn.addEventListener("click",function(){
    navListMob.classList.toggle('visible');
})