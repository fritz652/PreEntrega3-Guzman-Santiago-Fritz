function openCart() {
    const cart = document.querySelector("#cartButton");
    const content = document.createElement("div");
    content.className = "newCard";
    content.innerHTML = `
        <p>No hay solicitudes pendientes por aprobar</p>
    `;

    cart.addEventListener("click", () => {
        // Toggle para mostrar u ocultar el contenido
        if (document.body.contains(content)) {
            document.body.removeChild(content);
        } else {
            document.body.appendChild(content);
        }
    });


}

openCart();
