const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;
 
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
});
 
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formulario enviado correctamente (simulado).');
  form.reset();
});
 