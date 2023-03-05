/* MENU */



const menuControl = document.getElementById('MenuControl')
const menuNav = document.getElementById('menuNav')
const header = document.getElementById('header')
menuControl.addEventListener('click', () => {
    menuControl.classList.toggle('menu1On')//Adiciona a class onC no elemento MenuC
    header.classList.toggle('tamanhoFull')//Adiciona o tamanho maximo de header
    if (header.classList.contains('tamanhoFull')) {
    setTimeout(() => {menuNav.classList.toggle('hidden')}, 320)
    } else {
        menuNav.classList.toggle('hidden')
    }
    /*Se header tiver a class tamanhoC ele atrása a execução de menuNav.toggle se não ele já adiciona imediatamente a class hidden*/
})

