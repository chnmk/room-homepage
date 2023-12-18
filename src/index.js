import './components/app.scss'

const firstPageMessage = "Discover innovative ways to decorate"
const secondPageMessage = "We are available all across the globe"
const thirdPageMessage = "Manufactured with the best materials"

const firstPageDescription = "We provide unmatched quality, comfort, and style for property owners across the country.\nOur experts combine form and function in bringing your vision to life. Create a room in your \nown style with our collection and make your property a reflection of you and what you love."
const secondPageDescription = "With stores all over the world, it's easy for you to find furniture for your home or place of business.\nLocally, we’re in most major cities throughout the country. Find the branch nearest you using our\nstore locator. Any questions? Don't hesitate to contact us today."
const thirdPageDescription = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology\nto ensure that every product is made as perfect and as consistent as possible. With three decades of\nexperience in this industry, we understand what customers want for their home and office."

const imageElement = document.getElementsByClassName("main-image")[0]
const openHamburgerElement = document.getElementsByClassName("nav-menu__mobile-menu")[0]
const closeHamburgerElement = document.getElementsByClassName("nav-menu__mobile-menu-close")[0]
const logoElement = document.getElementsByClassName("nav-menu__logo")[0]
const navBackgroundElement = document.getElementsByClassName("nav-menu")[0]
const navElement = document.getElementsByClassName("page-nav__link-list")[0]
const linkElement1 = document.getElementsByClassName("page-nav__link-1")[0]
const linkElement2 = document.getElementsByClassName("page-nav__link-2")[0]
const linkElement3 = document.getElementsByClassName("page-nav__link-3")[0]
const linkElement4 = document.getElementsByClassName("page-nav__link-4")[0]

let currentPage = 1
let isHamburgerOpen = false

window.changeNext = function() {
    if (currentPage === 1) {
        currentPage = 2
        imageElement.classList.remove("main-image--img-1")
        imageElement.classList.remove("main-image--img-3")
        imageElement.classList.add("main-image--img-2")
        document.getElementsByClassName("desc-block__message")[0].innerHTML = secondPageMessage
        document.getElementsByClassName("desc-block__description")[0].innerHTML = secondPageDescription
    } else if (currentPage === 2) {
        currentPage = 3
        imageElement.classList.remove("main-image--img-1")
        imageElement.classList.remove("main-image--img-2")
        imageElement.classList.add("main-image--img-3")
        document.getElementsByClassName("desc-block__message")[0].innerHTML = thirdPageMessage
        document.getElementsByClassName("desc-block__description")[0].innerHTML = thirdPageDescription
    } else if (currentPage === 3) {
        currentPage = 1
        imageElement.classList.remove("main-image--img-3")
        imageElement.classList.remove("main-image--img-2")
        imageElement.classList.add("main-image--img-1")
        document.getElementsByClassName("desc-block__message")[0].innerHTML = firstPageMessage
        document.getElementsByClassName("desc-block__description")[0].innerHTML = firstPageDescription
    }
}

window.changePrevious = function() {
    if (currentPage === 3) {
        currentPage = 2
        imageElement.classList.remove("main-image--img-1")
        imageElement.classList.remove("main-image--img-3")
        imageElement.classList.add("main-image--img-2")
        document.getElementsByClassName("desc-block__message")[0].innerHTML = secondPageMessage
        document.getElementsByClassName("desc-block__description")[0].innerHTML = secondPageDescription
    } else if (currentPage === 2) {
        currentPage = 1
        imageElement.classList.remove("main-image--img-3")
        imageElement.classList.remove("main-image--img-2")
        imageElement.classList.add("main-image--img-1")
        document.getElementsByClassName("desc-block__message")[0].innerHTML = firstPageMessage
        document.getElementsByClassName("desc-block__description")[0].innerHTML = firstPageDescription
    } else if (currentPage === 1) {
        currentPage = 3
        imageElement.classList.remove("main-image--img-1")
        imageElement.classList.remove("main-image--img-2")
        imageElement.classList.add("main-image--img-3")
        document.getElementsByClassName("desc-block__message")[0].innerHTML = thirdPageMessage
        document.getElementsByClassName("desc-block__description")[0].innerHTML = thirdPageDescription
    }
}

window.openHamburger = function() {
    openHamburgerElement.classList.add("nav-menu__mobile-menu--disabled")
    closeHamburgerElement.classList.remove("nav-menu__mobile-menu-close--disabled")
    logoElement.classList.add("nav-menu__logo--disabled")
    navElement.classList.add("page-nav__link-list--mobile-enabled")
    linkElement1.classList.add("page-nav__link-1--mobile-enabled")
    linkElement2.classList.add("page-nav__link-2--mobile-enabled")
    linkElement3.classList.add("page-nav__link-3--mobile-enabled")
    linkElement4.classList.add("page-nav__link-4--mobile-enabled")
    navBackgroundElement.classList.add("nav-menu-mobile-enabled")
    isHamburgerOpen = true
}

window.closeHamburger = function() {
    openHamburgerElement.classList.remove("nav-menu__mobile-menu--disabled")
    closeHamburgerElement.classList.add("nav-menu__mobile-menu-close--disabled")
    logoElement.classList.remove("nav-menu__logo--disabled")
    navElement.classList.remove("page-nav__link-list--mobile-enabled")
    linkElement1.classList.remove("page-nav__link-1--mobile-enabled")
    linkElement2.classList.remove("page-nav__link-2--mobile-enabled")
    linkElement3.classList.remove("page-nav__link-3--mobile-enabled")
    linkElement4.classList.remove("page-nav__link-4--mobile-enabled")
    navBackgroundElement.classList.remove("nav-menu-mobile-enabled")
    isHamburgerOpen = false
}

window.addEventListener("resize", function() {
    if (isHamburgerOpen === true) {
        if (document.body.clientWidth >= 768) {
            window.closeHamburger()
        }
    }
})