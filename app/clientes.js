const Persona = function (personImg,id, nombre, distrito, negocio, monto) {
    this.personImg = personImg;
    this.id = id;
    this.nombre = nombre;
    this.distrito = distrito;
    this.negocio = negocio;
    this.monto = monto;
}

let persona1 = new Persona("../assets/forCarsPerson/accountPerson.svg",111, "Fritz Guzmán", "Olivos", "Zapateria", 1000);
let persona2 = new Persona("../assets/forCarsPerson/accountPerson.svg",222, "Carmen Terrones", "Olivos", "Floreria", 1200);
let persona3 = new Persona("../assets/forCarsPerson/accountPerson.svg",333, "Domitila Satiago", "San Isidro", "Ferreteria", 2000);
let persona4 = new Persona("../assets/forCarsPerson/accountPerson.svg",444, "Luis Miguel", "San Martin", "Confiteria", 500);
let persona5 = new Persona("../assets/forCarsPerson/accountPerson.svg",555, "Manuel Servantes", "Lima", "Polleria", 3000);
let persona6 = new Persona("../assets/forCarsPerson/accountPerson.svg",666, "Natalia", "San Borja", "Panaderia", 2500);

let cartera = [persona1, persona2, persona3, persona4, persona5, persona6];

// creando cards de clientes:

const contenedorClienteID = document.querySelector("#contenedorClienteID");

function cargarClientes(){

    cartera.forEach(persona =>{

        const div = document.createElement("div");
        div.classList.add("persona");
        div.innerHTML = `
            <div class="personaIten">
                <img class="clienteImagen" src=${persona.personImg} alt="">
                <p>ID: ${persona.id}</p>
            </div>
            <div class="personaIten">
                <h3>Cliente: ${persona.nombre}</h3>
                <p>Distrito: ${persona.distrito}</p>
                <p>Negocio :${persona.negocio}</p>
                <span>$:${persona.monto}</span><br/>
                <button Class="verCliente">Ver</button>
            </div>
        `;
        contenedorClienteID.append(div);

    })
}

cargarClientes();