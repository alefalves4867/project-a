const alfbt = document.querySelector('#alfbt')
const alpha = document.querySelector('.alpha')
const lambda = document.querySelector('.lambda')
const epsilon = document.querySelector('.epsilon')
const phi = document.querySelector('.phi')
const logo_alef = document.querySelector('.logo-alef')
const phrase = document.querySelector('.phrase')


function load() {
  alpha.classList.add('alfbt-animation1')
  setTimeout(() => {
    phi.classList.add('opacity-normal')
    setTimeout(() => {
      epsilon.classList.add('opacity-normal')
      setTimeout(() => {
        lambda.classList.add('opacity-normal')
        
        setTimeout(() => {
          logo_alef.classList.add('logo_alef_animation')
          
          setTimeout(()=>{
            phrase.classList.add('phrase2')


          },2000)


          
        }, 4150)
        setTimeout(() => {
          alpha.classList.remove('alfbt-animation1')
          alpha.classList.add('alfbt-animation2')


          
          setTimeout(() => { //Animation upacity == 0% 
            lambda.classList.add('opacity-upper')
            setTimeout(() => {
              epsilon.classList.add('opacity-upper')
              setTimeout(() => {
                phi.classList.add('opacity-upper')
                }, 350)
              }, 49.5)
          }, 46.2)


          setTimeout(()=>{
            alpha.classList.remove('alfbt-animation2')
            alpha.classList.add('alpha-to-center')
          }, 2800)
          
          

          
        }, 1000)
            /*setTimeout(() => {
              lambda.setAttribute('hidden', 'hidden')
              epsilon.setAttribute('hidden', 'hidden')
              phi.setAttribute('hidden', 'hidden')
            }, 1500);*/ //colocar os objetos em hidden

          

         /* setTimeout(() => {
            alpha.classList.remove('alfbt-animation1')
            alpha.classList.add('alfbt-animation2')
            
          }, 1050)*/


        


      }, 200)
    }, 250)
  }, 500)
}


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

