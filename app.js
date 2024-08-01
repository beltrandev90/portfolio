// Selecciona el botón del menú y la barra de navegación
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Añade un evento al hacer clic en el botón del menú
menuIcon.addEventListener('click', () => {
    // Alterna la clase 'active' para mostrar/ocultar el menú
    navbar.classList.toggle('active');
});