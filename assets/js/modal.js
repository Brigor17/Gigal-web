// Obtenemos el modal
var modal = document.getElementById('myModal');

// Obtenemos el botón de cierre
var closeBtn = modal.querySelector('.close');

// Obtenemos los botones de navegación
var prevBtn = modal.querySelector('.prev');
var nextBtn = modal.querySelector('.next');

// Obtenemos la imagen
var img = modal.querySelector('.modal-image');

// Definimos las imágenes del carrusel
var images = ['assets/img/modal/modal1.png', 'assets/img/modal/modal2.png', 'assets/img/modal/modal3.png','assets/img/modal/Modal.png'];
var currentImage = 0;

// Cuando el usuario hace click en el botón de cierre, cierra el modal
closeBtn.onclick = function() {
  modal.close();
}

// Cuando el usuario hace click en el botón de anterior, muestra la imagen anterior
prevBtn.onclick = function() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  img.src = images[currentImage];
}

// Cuando el usuario hace click en el botón de siguiente, muestra la imagen siguiente
nextBtn.onclick = function() {
  currentImage = (currentImage + 1) % images.length;
  img.src = images[currentImage];
}

// Mostramos el modal
window.onload = function() {
  modal.showModal();
}
