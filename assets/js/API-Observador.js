let style = document.createElement('style');
style.innerHTML = `
  @keyframes aparecer {
    0%   {opacity: 0;}
    100% {opacity: 1;}
  }

  .seccion1 {
    opacity: 0;
  }

  .seccion1.visible {
    animation: aparecer 3s forwards;
  }
`;
document.head.appendChild(style);

// Usa la API de Intersección para agregar la clase 'visible' cuando el seccion1 se visualiza
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.4});

let seccion1 = document.querySelector('.seccion1');
observer.observe(seccion1);