const menuC = document.getElementById('MenuC')
const menuNav = document.getElementById('menuNav')
const header = document.getElementById('header')
menuC.addEventListener('click', () => {
    menuC.classList.toggle('onC')//Adiciona a class onC no elemento MenuC
    header.classList.toggle('tamanhoC')//Adiciona o tamanho maximo de header
    if (header.classList.contains('tamanhoC')) {
    setTimeout(() => {menuNav.classList.toggle('hidden')}, 500)
    } else {
        menuNav.classList.toggle('hidden')
    }
    /*Se header tiver a class tamanhoC ele atrása a execução de menuNav.toggle se não ele já adiciona imediatamente a class hidden*/
})