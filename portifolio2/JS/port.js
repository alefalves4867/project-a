const menuC = document.getElementById('MenuC')
const menuNav = document.getElementById('menuNav')
const header = document.getElementById('header')
menuC.addEventListener('click', () => {
    menuC.classList.toggle('onC')//Adiciona a class onC no elemento MenuC
    header.classList.toggle('tamanhoC')
    if (header.classList.contains('tamanhoC')) {
    setTimeout(() => {menuNav.classList.toggle('hidden')}, 500)
    } else {
        menuNav.classList.toggle('hidden')
    }
    
})