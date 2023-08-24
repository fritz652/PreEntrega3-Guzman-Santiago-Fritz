//:::::::::::::BUSCADOR:::::::::::::::::::

//............Evento del buscador lupa........


//export {funcionSearch};

function funcionSearch  (){
    const nav = document.querySelector(".nav"),
    searchIconID = document.querySelector("#searchIconID");

// asignacion  del evento                              //.....se puede resumir en:
    searchIconID.addEventListener("click", mostrarAlerta); //.....searchIconID.addEventListener("click", ()=>{
// funcion dentro del evento                           //.......nav.classList.toggle("openSearch");
    function mostrarAlerta(){                              //.....});
    nav.classList.toggle("openSearch");

    if(nav.classList.contains("openSearch")){
        return searchIconID.classList.replace("searchIcon", "clouseIcon");
    }
    searchIconID.classList.replace("clouseIcon", "searchIcon");
    }

};
funcionSearch(); 


//::::::::::::::::::boxSearch::::::::::::::::::::::::
/* let searchBox = document.querySelector("#searchBox");
let boxSearch = document.querySelector("#boxSearch");

if (boxSearch.addEventListener("keyup", e

)){
    boxSearch.addEventListener("div");
    div.innerHTML = ` <h2> hola hola </h2>`
} */

/* const inputSerch = document.querySelector("#inputSearch");
const boxSearch = document.querySelector("#boxSearch");

inputSerch.addEventListener("keyup", function(event) {
  const textoIngresado = event.target.value;
  boxSearch.textContent =  textoIngresado;
}); */


