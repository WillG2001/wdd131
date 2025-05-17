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
const closeButton = document.querySelector('.close-viewer');
const modal = document.createElement('dialog');
modal.innerHTML = '<img><button class="close-viewer">X</button>';
document.body.appendChild(modal);

function displayModal (event) {
    var image = event.target.closest('img');
    modal.img.src = image.src.split('-')[0] + '-full.jpeg';
    modal.showModal();
}

function closeModal () {
    modal.close();
}

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})


handleResize();
window.addEventListener("resize", handleResize)
menuButton.addEventListener("click", toggleMenu)
gallery.addEventListener("click", displayModal)
closeButton.addEventListener("click", closeModal)
