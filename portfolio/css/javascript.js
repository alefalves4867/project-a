const menuburger = document.getElementById('menuburger')
const navs = [...document.querySelectorAll('.navs')]
menuburger.addEventListener('click', ()=>{
    const ols = document.querySelector('#ols')
    
    if (ols.classList.contains('hidden') && (ols.classList.contains('show') == false)) {
        
        ols.removeAttribute('class', 'hidden')
        
        ols.setAttribute('class', 'show')
        // if(ols.hasAttribute('class', 'show')){
        //     // ols.setAttribute('class', 'show')
        //     window.alert('Shalom')
        // }
        setTimeout(()=>{
            navs.map((e)=>{
                e.style.display='block'
            })
        }, 400)
        
        menuburger.style.backgroundColor = 'var(--medinat0)'
        
    } else {
        ols.removeAttribute('class', 'show')
        ols.setAttribute('class', 'hidden')
        navs.map((e)=>{
            e.style.display = 'none'
        })
        menuburger.style.backgroundColor = 'transparent'
    }
    
})