// Obtener los elementos del DOM
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Cuando se hace clic en el botón de "Sign Up", añade la clase 'active' para mostrar el formulario de registro
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Cuando se hace clic en el botón de "Sign In", remueve la clase 'active' para mostrar el formulario de inicio de sesión
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
    