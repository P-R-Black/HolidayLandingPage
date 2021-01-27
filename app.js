/* =============== Show Menu =============== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    //Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* =============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =============== Scroll Sections Active Link =============== */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menue [href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll', scrollActive)


/* =============== Change Background Header =============== */
function scrollHeader() {
    const nav = document.getElementById('header')
        // When the scroll is great than 200 viewport height, add the scroll-header class
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* =============== Show Scroll Top =============== */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    //When the scroll is higher than 560 viewport height, add the show-scroll class
    if (this.scrollY >= 500) nav.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* =============== Dark Light Theme =============== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('select-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? ' dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic

if (selectedTheme) {
    /// If the validation is fullfilled, we ask what the issue was to know if we activateed or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('seclted-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* =============== Scroll Reveal Animation =============== */
const sr = ScrollReveal({
    dispance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.home_data, .home_img, .decoration_data,
.accessory_content, .footer_content`, {
    origin: 'top',
    interval: 200
})

sr.reveal(`.share_img, .send_content`, {
    origin: 'left'
})

sr.reveal(`.share_data, .send_img`, {
    origin: 'right '
})