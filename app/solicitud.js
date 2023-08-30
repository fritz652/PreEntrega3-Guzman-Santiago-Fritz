/* ::::::::::::::RECUPERANDO DATOS DEL LOCAL STORAGE:::::::::::::::::::: */
const montoIDs = document.querySelector("#montoIDs");

// obteniendo el monto del localStorage y parsearlo como JSON
let recuperandoMonto = JSON.parse(localStorage.getItem("monto")); //..............item-5

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
let recuperarMeses = JSON.parse(localStorage.getItem("meses"));//..............item-6

// Si hay meses almacenados en el localStorage, autocompletar el campo
if (recuperarMeses !== null) {
    mesesIDs.value = recuperarMeses;
}

// Escuchar el evento de cambio en el campo de entrada
mesesIDs.addEventListener("change", function () {
    // Almacenar los meses en el localStorage cuando el usuario cambie el valor
    localStorage.setItem("meses", JSON.stringify(mesesIDs.value));
});

/* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

const tasaIDs = document.querySelector("#tasaIDs");

// Intentar obtener la tasa del localStorage y parsearla como JSON
let recumerarTasa = JSON.parse(localStorage.getItem("tasa")); //..............item-7

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


// new variables
const formID = document.querySelector('#formID');

let documentoIDs = document.querySelector('#documentoIDs');
let nameIDs = document.querySelector('#nameIDs');
let distritoIDs = document.querySelector('#distritoIDs');
let addresID = document.querySelector('#addresID')

//Escuchando eventos  de entrada:
// IDs
documentoIDs.addEventListener("change", function () {
    // Almacenar el ID en el localStorage cuando el usuario cambie el valor
    localStorage.setItem("documento", JSON.stringify(documentoIDs.value));
});
// names
nameIDs.addEventListener("change", function () {
    // Almacenar el ID en el localStorage cuando el usuario cambie el valor
    localStorage.setItem("nombre", JSON.stringify(nameIDs.value));
});
// Distrito
distritoIDs.addEventListener("change", function () {
    // Almacenar el ID en el localStorage cuando el usuario cambie el valor
    localStorage.setItem("distrito", JSON.stringify(distritoIDs.value));
});
// Adrres
addresID.addEventListener("change", function () {
    // Almacenar el ID en el localStorage cuando el usuario cambie el valor
    localStorage.setItem("direccion", JSON.stringify(addresID.value));
});

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
        const formData = {
            id: Date.now(),
            documento: documentoIDs.value,
            nombre: nameIDs.value,
            distrito: distritoIDs.value,
            direccion: addresID.value,
            monto: montoIDs.value,
            meses: mesesIDs.value,
            tasa: tasaIDs.value
        };
        
        // Convertir el objeto formData a formato JSON y almacenarlo en el localStorage
        localStorage.setItem(formData.id, JSON.stringify(formData));
        return success();
    }
})





