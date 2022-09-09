btnClose.onclick = function () {
    menu.classList.remove('active')
}

btnOpen.onclick = function () {
    menu.classList.add('active')
}

menu.addEventListener('click', function (event) {
    if (event.target.matches('.navbar__link')) {
        menu.classList.remove('active')
    }
})

const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})