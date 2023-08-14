const Persona = function (id, nombre, distrito, negocio, monto) {
    this.id = id;
    this.nombre = nombre;
    this.distrito = distrito;
    this.negocio = negocio;
    this.monto = monto;
}

let persona1 = new Persona(111, "Fritz Guzmán", "Olivos", "Zapateria", 1000);
let persona2 = new Persona(222, "Carmen Terrones", "Olivos", "Floreria", 1200);
let persona3 = new Persona(333, "Domitila Satiago", "San Isidro", "Ferreteria", 2000);
let persona4 = new Persona(444, "Luis Miguel", "San Martin", "Confiteria", 500);
let persona5 = new Persona(555, "Manuel Servantes", "Lima", "Polleria", 3000);
let persona6 = new Persona(666, "Natalia", "San Borja", "Panaderia", 2500);

let cartera = [persona1, persona2, persona3, persona4, persona5, persona6];





