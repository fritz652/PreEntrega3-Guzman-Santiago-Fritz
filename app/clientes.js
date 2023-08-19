const Persona = function (personImg,id, nombre, distrito, negocio,TEA, monto,meses) {
    this.personImg = personImg;
    this.id = id;
    this.nombre = nombre;
    this.distrito = distrito;
    this.negocio = negocio;
    this.TEA =TEA;
    this.monto = monto;
    this.meses = meses;
}

let persona1 = new Persona("../assets/forCarsPerson/accountPerson.svg",1111111, "Fritz Guzman", "Olivos", "Zapateria","10%", 1000, 6);
let persona2 = new Persona("../assets/forCarsPerson/accountPerson.svg",22222222, "Carmen Terrones Arias", "Olivos", "Floreria","15%", 1200, 12);
let persona3 = new Persona("../assets/forCarsPerson/accountPerson.svg",33333333, "Domitila Santiago", "San Isidro", "Ferreteria","20%", 2000, 10);
let persona4 = new Persona("../assets/forCarsPerson/accountPerson.svg",44444444, "Luis Miguel", "San Martin", "Confiteria","20%", 500, 3);
let persona5 = new Persona("../assets/forCarsPerson/accountPerson.svg",55555555, "Manuel Servantes", "Lima", "Polleria","10%", 3000, 5);
let persona6 = new Persona("../assets/forCarsPerson/accountPerson.svg",66666666, "Natalia", "San Borja", "Panaderia","15%", 2500, 8);

let cartera = [persona1, persona2, persona3, persona4, persona5, persona6];

// creando cards de clientes:

const contenedorClienteID = document.querySelector("#contenedorClienteID");

function cargarClientes(){

    cartera.forEach(persona =>{

        const div = document.createElement("div");
        div.classList.add("persona");
        div.innerHTML = `
            <div class="personaIten picPerson">
                <img class="clienteImagen" src=${persona.personImg} alt="">
                <p>ID: ${persona.id}</p>
            </div>
            <div class="personaIten">
                <h3>Cliente: ${persona.nombre}</h3>
                <p>Distrito: ${persona.distrito}</p>
                <p>Negocio :${persona.negocio}</p>
                <p>TEA :${persona.TEA}</p>
                <span>Monto: ${persona.monto}</span><br/>
                <p>meses: ${persona.meses}</p>
                <button Class="verCliente">Ver</button>
            </div>
        `;
        contenedorClienteID.append(div);

    })
}

cargarClientes();

