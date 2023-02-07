const menuburger = document.getElementById('menuburger')
const navs = [...document.querySelectorAll('.navs')]
menuburger.addEventListener('click', ()=>{
    const ols = document.querySelector('#ols')
    /* If hidden == true and show == false*/
    if (ols.classList.contains('hidden') && (ols.classList.contains('show') == false)) {
        // Remove the Attribute class: hidden
        ols.removeAttribute('class', 'hidden')
        // Remove the Set Attribute class: show
        ols.setAttribute('class', 'show')
        // Delay code execution
        setTimeout(()=>{
            navs.map((e)=>{
                e.style.display='block'
            })
        }, 250)
        setTimeout(()=>{
            navs.map((e)=>{
                e.style.color='white'
        })
        }, 580)
        
        // Sets a color dor menuburger
        menuburger.style.backgroundColor = 'var(--medinat0)'
        
    } else {
        // Delay code execution
        setTimeout(()=>{
            navs.map((e)=>{
                e.style.color='transparent'
            })
        }, 55)
        setTimeout(()=>{
            navs.map((e)=>{
                e.style.display='none'
            })
        }, 580)
        // Remove Attribute class: show
        ols.removeAttribute('class', 'show')
        // Set Attribute class: hidden
        ols.setAttribute('class', 'hidden')
        // Set Attribute backgroundColor for menuburger
        menuburger.style.backgroundColor = 'transparent'
    }
    
})