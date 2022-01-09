let openWindowButtons = document.querySelectorAll('[data-modal-target]');
let closeWindowButtons = document.querySelectorAll('[data-close-button]');

openWindowButtons.forEach(button => {
    button.addEventListener('click', () => {
        let modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeWindowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.window')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
}

let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}