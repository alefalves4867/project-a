const alfbt = document.querySelector('#alfbt')
const phi = document.querySelector('.phi')

function load() {
  alfbt.classList.add('alfbt-animation1')
  setTimeout(() => {
    phi.classList.add('phi-normal')
  }, 1550)
}
