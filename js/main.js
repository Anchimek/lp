const header = document.querySelector('header')
const main = document.querySelector('main')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const closeCrc = document.querySelector('.close-circle')
const navAhref = document.querySelectorAll('.nav-item')

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

closeCrc.addEventListener('click', () => {
    menu.classList.toggle('active')
})

navAhref.forEach((a) => a.addEventListener('click', () => {
    menu.classList.toggle('active')
}))
