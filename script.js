const btnTheme = document.getElementById('btn-theme');
btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});

function checkSections() {
  $('.fade-section').each(function () {
    const top = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll + windowHeight - 100 > top) {
      $(this).addClass('visible');
    }
  });
}
$(window).on('scroll', checkSections);
$(document).ready(checkSections);

// Botón para cambiar colores sección habilidades
const btnColores = document.getElementById('btn-colores');
// OJO: la card debe tener class="card ... habilidades-card"
const habilidadesCard = document.querySelector('.habilidades-card');

if (btnColores && habilidadesCard) {
  btnColores.addEventListener('click', () => {
    habilidadesCard.classList.toggle('habilidades-alt');
  });
}

const form = document.getElementById('contactForm');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

function validarInput(input) {
  if (!input.value.trim()) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
  } else {
    if (input.type === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(input.value.trim())) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return;
      }
    }
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }
}

[nombre, email, mensaje].forEach(input => {
  input.addEventListener('input', () => validarInput(input));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  validarInput(nombre);
  validarInput(email);
  validarInput(mensaje);
  const invalid = form.querySelector('.is-invalid');
  if (!invalid) {
    alert('Formulario enviado correctamente.');
    form.reset();
    [nombre, email, mensaje].forEach(i => {
      i.classList.remove('is-valid');
    });
  }
});
