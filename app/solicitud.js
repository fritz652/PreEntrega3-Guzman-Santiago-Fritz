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
