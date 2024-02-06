let styles = document.createElement('style');
style.innerHTML = `
  @keyframes aparecer {
    0%   {opacity: 0;}
    100% {opacity: 1;}
  }

  .seccion2 {
    opacity: 0;
  }

  .seccion2.visible {
    animation: aparecer 3s forwards;
  }
`;
document.head.appendChild(styles);

// Usa la API de Intersección para agregar la clase 'visible' cuando el seccion2 se visualiza
let observere = new IntersectionObserver((entries, observere) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observere.unobserve(entry.target);
    }
  });
}, {threshold: 0.4});

let seccion2 = document.querySelector('.seccion2');

elementos.forEach(seccion2 => {
  observador.observe(seccion2);
});
observere.observe(seccion2);