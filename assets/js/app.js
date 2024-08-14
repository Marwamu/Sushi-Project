const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}


if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}




const navLink = document.querySelectorAll('nav__link')



const linkAction = () =>{
    const navMenu = document.getElementById(nav-menu)

    navMenu.classList.remove(show-menu)
}


navLink.forEach(n => n.addEventListener('click', linkAction))











//  CHANGE BACKGROUND HEADER

const scrollHeader = ()=>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll header class

    this.scrollY >= 50 ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}

    window.addEventListener('scroll', scrollHeader)



// SHOW SCROLL UP

const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)




// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]');

const scrollActive = ()=> {
    const scrollY = window.pageYOffset


    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


        if(scrollY > sectionTop && scrollY <= sectionTop +  sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)



// DARK LIGHT THEME 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')


// we obtain the current theme that the interface has by validating the dark-theme class

const getCurretTheme = ()=> document.body.contains(darkTheme) ? 'dark' : 'light';

const getCurretIcon = ()=> themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}


themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)


    localStorage.setItem('selected-theme', getCurretTheme)
    localStorage.setItem('selected-icon', getCurretIcon)
})

/*======================== SCROLL REVEAL ANIMATION ========================*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1700,
    delay: 400,
    reset: true,  // Animations Repeat

});

sr.reveal('.home__img , .newsletter__container, .footer__logo , .footer__description, .footer__content, .footer__info');
sr.reveal('.home__data', {origin: 'bottom'});
sr.reveal('.about__img , .recently__img', {origin: 'right'}) ;
sr.reveal('.about__data, .recently__data' , {origin: 'left'});
sr.reveal('.popular__card', {interval: 100});