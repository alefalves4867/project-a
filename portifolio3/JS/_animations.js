const alfbt = document.querySelector('#alfbt')
const alpha = document.querySelector('.alpha')
const lambda = document.querySelector('.lambda')
const epsilon = document.querySelector('.epsilon')
const phi = document.querySelector('.phi')
const logo_alef = document.querySelector('.logo-alef')



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
          
          setTimeout(() => {
            alpha.classList.remove('alfbt-animation1')
            alpha.classList.add('alfbt-animation2')
            
          }, 150)


        }, 100)


      }, 200)
    }, 250)
  }, 500)
}
