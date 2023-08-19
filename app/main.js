//:::::::::::::::CALCULADORA:::::::::::::::::::::::::
const calcular = document.querySelector("#calcular"),
    refrescar =document.querySelector("#refrescar");

calcular.addEventListener("click",calcularCuotas);

function calcularCuotas() {
    const monto = parseFloat(document.getElementById('monto').value);
    const meses = parseInt(document.getElementById('meses').value);
    const tasa = parseFloat(document.getElementById('tasa').value);

    localStorage.setItem (`monto`,monto);
    localStorage.setItem (`meses`,meses);
    localStorage.setItem (`tasa`,tasa);

    if (isNaN(monto) || isNaN(meses) || isNaN(tasa)) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    const tasaMensual = tasa / 12 / 100;
    const cuotaMensual = monto * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -meses)));


    const resultadoElement = document.getElementById(`resultado`);
    resultadoElement.innerHTML = `<h2>La cuota mensual a pagar <br> 
                                    es de :$${cuotaMensual.toFixed(2)} <br> 
                                    durante ${meses} meses.</h2>`;

    resultadoElement.style.textAlign = `center`;
    const Titleh2Element = document.getElementById(`titleH2`);
    
    Titleh2Element.style.display = `none`;

    const btnSolicitarElement = document.getElementById (`btnSolicitar`);
    btnSolicitarElement.innerHTML = `<a href="../pages/solicitud.html">solicitar</a>`;
   /*  btnSolicitarElement.style.width=`200px`; */
    btnSolicitarElement.classList.add("btn");
}



refrescar.addEventListener("click",refrescarPagina);

function refrescarPagina() {
    location.reload();
}



