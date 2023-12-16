import './components/app.scss'

const firstPageMessage = "Discover innovative ways to decorate"
const secondPageMessage = "We are available all across the globe"
const thirdPageMessage = "Manufactured with the best materials"

const firstPageDescription = "We provide unmatched quality, comfort, and style for property owners across the country.\nOur experts combine form and function in bringing your vision to life. Create a room in your \nown style with our collection and make your property a reflection of you and what you love."
const secondPageDescription = "With stores all over the world, it's easy for you to find furniture for your home or place of business.\nLocally, we’re in most major cities throughout the country. Find the branch nearest you using our\nstore locator. Any questions? Don't hesitate to contact us today."
const thirdPageDescription = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology\nto ensure that every product is made as perfect and as consistent as possible. With three decades of\nexperience in this industry, we understand what customers want for their home and office."

const imageElement = document.getElementsByClassName("main-image")[0];

let currentPage = 1

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
