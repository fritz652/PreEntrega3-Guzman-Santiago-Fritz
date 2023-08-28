const montoIDs = document.querySelector("#montoIDs");

// Intentar obtener el monto del localStorage y parsearlo como JSON
let recuperandoMonto = JSON.parse(localStorage.getItem("monto"));

// Si hay un monto almacenado en el localStorage, autocompletar el campo
if (recuperandoMonto !== null) {
    montoIDs.value = recuperandoMonto;
}

// Escuchar el evento de cambio en el campo de entrada
montoIDs.addEventListener("change", function () {
    // Almacenar el monto en el localStorage cuando el usuario cambie el valor
    localStorage.setItem("monto", JSON.stringify(montoIDs.value));
});

/* :::::::::::::::::::::::::::::::::::::::::::::::::::: */

const mesesIDs = document.querySelector("#mesesIDs");

// Intentar obtener los meses del localStorage y parsearlos como JSON
let recumerarMeses = JSON.parse(localStorage.getItem("meses"));

// Si hay meses almacenados en el localStorage, autocompletar el campo
if (recumerarMeses !== null) {
    mesesIDs.value = recumerarMeses;
}

// Escuchar el evento de cambio en el campo de entrada
mesesIDs.addEventListener("change", function () {
    // Almacenar los meses en el localStorage cuando el usuario cambie el valor
    localStorage.setItem("meses", JSON.stringify(mesesIDs.value));
});

/* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

const tasaIDs = document.querySelector("#tasaIDs");

// Intentar obtener la tasa del localStorage y parsearla como JSON
let recumerarTasa = JSON.parse(localStorage.getItem("tasa"));

// Si hay una tasa almacenada en el localStorage, autocompletar el campo
if (recumerarTasa !== null) {
    tasaIDs.value = recumerarTasa;
}

// Escuchar el evento de cambio en el campo de entrada
tasaIDs.addEventListener("change", function () {
    // Almacenar la tasa en el localStorage cuando el usuario cambie el valor
    localStorage.setItem("tasa", JSON.stringify(tasaIDs.value));
});


/* ::::::::::  alert: https://sweetalert2.github.io/  :::::::::::::::: */


// variables
const formID = document.querySelector('#formID');

let documentoIDs = document.querySelector('#documentoIDs');
let nameIDs = document.querySelector('#nameIDs');
let distritoIDs = document.querySelector('#distritoIDs');
let addresID = document.querySelector('#addresID')

let solicitarButtonID = document.querySelector('#solicitarButtonID');

/* ::::: libreria functions sweetalert:::::: */

let warningNumber = function(){
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Id invalido, escribir minimo 8 numeros',
            showConfirmButton: false,
            timer: 1800
        })
}

let warningName = function(){
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Escribe un nombre valido',
        showConfirmButton: false,
        timer: 1800
    })
}

let warningDistrito = function(){
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Escribe un distrito valido',
        showConfirmButton: false,
        timer: 1800
    })
}

let warningDirection = function(){
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Escribe una dirección valida',
        showConfirmButton: false,
        timer: 1800
    })
}

let success = function(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Solicitud enviada',
        showConfirmButton: false,
        timer: 1500
    })
}

/* :::::::::::::::::::::::::::::::::::: */


/* :::::::::::: validator de formulario ::::::::::::::::::::::*/

formID.addEventListener('submit', e =>{
    e.preventDefault();
    var regexLetters = /^[A-Za-z\s]+$/;  //:::::: REGEX 
    if (documentoIDs.value.length < 8  ){
        return warningNumber();
    }
    if (!regexLetters.test(nameIDs.value)) {
        return warningName ();
    }
    if (!regexLetters.test(distritoIDs.value)) {
        return warningDistrito ();
    }
    if (!regexLetters.test(addresID.value)) {
        return warningDirection();
    }else{
        return success();
    }
})



