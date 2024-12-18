let index = 0; // Índice actual de la imagen mostrada
const images = document.querySelectorAll('.carousel-image'); // Seleccionar todas las imágenes
const totalImages = images.length; // Total de imágenes

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Función para actualizar la imagen visible
function updateViewer() {
  images.forEach((img, idx) => {
    if (idx === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

// Funcionalidad para el botón "Anterior"
prevButton.addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages; // Retroceder con bucle circular
  updateViewer();
});

// Funcionalidad para el botón "Siguiente"
nextButton.addEventListener('click', () => {
  index = (index + 1) % totalImages; // Avanzar con bucle circular
  updateViewer();
});

// Mostrar la primera imagen al iniciar
updateViewer();
