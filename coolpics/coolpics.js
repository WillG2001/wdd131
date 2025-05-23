const menuButton = document.querySelector(".menu-button")
function toggleMenu () {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide")
    }
    else {
        menu.classList.add("hide")
    }
}

const gallery = document.querySelector('.gallery');
const modal = document.createElement('dialog');

document.body.appendChild(modal);

function displayModal (event) {
    var image = event.target.closest('img');
    const newImgSrc = image.src.split('-')[0] + '-full.jpeg';
    modal.innerHTML = `<div class="modal-content"><img src="${newImgSrc}"><button class="close-viewer">X</button></div>`;
    modal.showModal();
    const closeButton = modal.querySelector('.close-viewer');
    closeButton.addEventListener("click", closeModal)
    closeButton.onClick = closeModal;
}

function closeModal () {
    modal.close();
}

handleResize();
window.addEventListener("resize", handleResize)
menuButton.addEventListener("click", toggleMenu)
gallery.addEventListener("click", displayModal)
