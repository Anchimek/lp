const header = document.querySelector('header')
const main = document.querySelector('main')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close-circle')

main.addEventListener('scroll', () => {
    if (main.scrollTop > 100) {
        header.classList.add('active')
     } else {
        header.classList.remove('active')
     }
 })

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
})

close.addEventListener('click', () => {
    menu.classList.toggle('active')
})

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
})