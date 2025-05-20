let btnOpen = document.getElementById('btn-open')
let menu = document.getElementById('menu-mobile')
let overlayMenu = document.getElementById('overlay-menu')

btnOpen.addEventListener('click', ()=> {
    menu.classList.add('open-menu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('open-menu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('open-menu')
})

overlayMenu.addEventListener('click', ()=> {
    menu.classList.remove('open-menu')
})