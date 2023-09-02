const registroForm = document.getElementById('registroForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repitePassword = document.getElementById('repitePassword');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

registroForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validar correo electrónico
    if (!emailRegex.test(email.value)) {
        warningEmail();
        return;
    }

    if (password.value !== repitePassword.value) {
        warningPassword();
        return;
    }

    window.location.href = '../index.html';
    registroForm.reset(); 
});

let warningEmail = function(){
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Por favor ingresa un email valido',
        showConfirmButton: false,
        timer: 1800
    })
}

let warningPassword = function(){
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Las contraseñas no coinciden',
        showConfirmButton: false,
        timer: 1800
    })
}
