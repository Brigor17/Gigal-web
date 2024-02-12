// Selecciona los elementos que deseas animar POR CLASES CSS
let elementos = document.querySelectorAll('.ContImgVision, .logoB, .texto, .div2, .div3, .ContMV, .ImgMV, .Cont1, .Cont2, .Cont3, .ContText, .seccion2, .Dcard, .titleB, .subtitleB, .containerB, .iconB');

// Define las clases de animación AGREGAR EL ID SEGUIDO DE LA ANIMACION A UTILIZAR
let clasesAnimacion = {
  'containerB': 'fondo',
  'texto':'typing',
  'div2':'scale-up-horizontal-right',
  'div3':'scale-up-center',
  'ContImgVision': 'roll-in-right',
  'ContMv': 'roll-in-left',
  'ImgMv': 'ImgC',
  'Cont1':'zoomInLeft',
  'Cont2': 'zoomInUp',
  'Cont3': 'zoomInDown',
  'ContText':'zoomInRight',
  'seccion2':'aparecer',
  'Dcard': 'lightSpeedIn',
  'titleB': 'lightSpeedIn',
  'subtitleB': 'zoomInDown',
  'logoB': 'zoomInLeft',
  'iconBP': 'roll-in-left',
  'iconBI': 'zoomInUp',
  'iconC':'zoomInUp2',
  'iconH':'roll-in-right2',
  

  
};

// Configura las opciones del observador
let opciones = {
  root: null, // El viewport del documento
  rootMargin: '0px',
  threshold: 0.4 // El porcentaje del elemento que debe estar visible
};

// Define la función del observador
let observador = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Si el elemento está en la pantalla
    if (entry.isIntersecting) {
      // Agrega la clase de animación correspondiente
      let clase = clasesAnimacion[entry.target.id];
      entry.target.classList.add(clase);
    } else {
      // Si no está en la pantalla, remueve la clase de animació
    }
  });
}, opciones);

// Observa cada uno de los elementos
elementos.forEach(elemento => {
  observador.observe(elemento);
});
