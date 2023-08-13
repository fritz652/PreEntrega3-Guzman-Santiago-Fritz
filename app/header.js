//:::::::::::::BUSCADOR:::::::::::::::::::

//............Evento del buscador........

const nav = document.querySelector(".nav"),
searchIconID = document.querySelector("#searchIconID");

searchIconID.addEventListener("click", mostrarAlerta); // asignacion  del evento

function mostrarAlerta(){  // funcion dentro del evento
    nav.classList.toggle("openSearch");
}

/* evento con funcion  flecha, lo dejo ahi como una nota para poder entender:

searchIconID.addEventListener("click", ()=>{
    nav.classList.toggle("openSearch");

}); */