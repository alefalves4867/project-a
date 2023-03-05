const alfbt = document.querySelector('#alfbt')
const alpha = document.querySelector('.alpha')
const lambda = document.querySelector('.lambda')
const epsilon = document.querySelector('.epsilon')
const phi = document.querySelector('.phi')




function load() {
  alpha.classList.add('alfbt-animation1')
  setTimeout(() => {
    phi.classList.add('opacity-normal')
    setTimeout(() => {
      epsilon.classList.add('opacity-normal')
      setTimeout(() => {
        lambda.classList.add('opacity-normal')
        
      }, 200)
    }, 250)
  }, 500)
}
