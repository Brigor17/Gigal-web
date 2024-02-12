document.addEventListener('DOMContentLoaded', function () {
    var carrusel = document.querySelector('.carrusel');
    var carruselImagenes = document.querySelector('.carrusel-imagenes');
    var imagenes = Array.from(carruselImagenes.children);
    var btnAdelante = document.querySelector('.carrusel-btn-adelante');
    var btnAtras = document.querySelector('.carrusel-btn-atras');
  
    var imagenActiva = 0;
  
    function cambiarImagen() {
      imagenes.forEach(function (img, index) {
        if (index === imagenActiva) {
          img.classList.add('imagen-activa');
        } else {
          img.classList.remove('imagen-activa');
        }
      });
    }
  
    btnAdelante.addEventListener('click', function () {
      imagenActiva = (imagenActiva + 1) % imagenes.length;
      cambiarImagen();
    });
  
    btnAtras.addEventListener('click', function () {
      imagenActiva = (imagenActiva - 1 + imagenes.length) % imagenes.length;
      cambiarImagen();
    });
  });
  