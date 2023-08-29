/* ::::::::::::::CERRAR SESION:::::::::::::::: */
export function cerrarSesion(){
    const profileIdButton = document.querySelector("#profileIdButton");

    // asignacion  del evento                              
    profileIdButton.addEventListener("click", mostrarSesion); 
    // funcion dentro del evento   
    var x = document.querySelector(".openProfile");
    
    function mostrarSesion(){                              
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }
    
    const mainClouseSesion = document.querySelector('main');
    
    mainClouseSesion.addEventListener('click', ()=>{
        if (x.style.display === "block")
        x.style.display = "none";
    });

    const clouseProfile = document.querySelector('.clouseProfile');

    clouseProfile.addEventListener('click', ()=>{
        if (x.style.display === "block")
        x.style.display = "none";
    });
};

cerrarSesion();
