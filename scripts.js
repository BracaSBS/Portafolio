function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}
// Obtén el modal y la imagen dentro del modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

// Función para abrir el modal y mostrar la imagen
function openModal(src) {
    modal.style.display = "flex"; // Muestra el modal
    modalImg.src = src; // Establece la fuente de la imagen en el modal
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none"; // Oculta el modal
}

// Agrega el evento de clic a cada imagen de proyecto o certificado
document.querySelectorAll('.project-gallery img, .certificate-gallery img').forEach(img => {
    img.addEventListener('click', () => openModal(img.src));
});

// Si el usuario hace clic en cualquier parte del modal (excepto la imagen), cierra el modal
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


// Función para abrir el modal de la galería
function openGallery() {
    document.getElementById('gallery-modal').style.display = "block";
}

// Función para cerrar el modal
function closeGallery() {
    document.getElementById('gallery-modal').style.display = "none";
}

// Cerrar el modal cuando el usuario hace clic fuera de la ventana
window.onclick = function(event) {
    if (event.target == document.getElementById('gallery-modal')) {
        closeGallery();
    }
}
// Control de velocidad de la animación de la galería
function setGallerySpeed(speed) {
    document.querySelector('.gallery-images').style.animationDuration = speed + 's';
}

// Ejemplo de uso: cambiar la velocidad de la galería a 10 segundos
setGallerySpeed(10);


// Modal para imágenes (similar al de los certificados)
function openModal(imgSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Función para abrir y cerrar la galería de proyectos
function openProjectGallery() {
    const gallery = document.querySelector('.project-gallery');
    gallery.style.display = gallery.style.display === 'block' ? 'none' : 'block';
}


function openModal(imgSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "flex"; // Mostrar modal centrado en flex
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});






