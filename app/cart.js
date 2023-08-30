export function openCart() {
    const cart = document.querySelector("#cartButton");
    const content = document.createElement("div");
    content.className = "newCard";
    content.innerHTML = `
        <p>Hello world</p>
    `;

    cart.addEventListener("click", () => {
        // Toggle para mostrar u ocultar el contenido
        if (document.body.contains(content)) {
            document.body.removeChild(content);
        } else {
            document.body.appendChild(content);
        }

        console.log("oe tamare");
    });
}

openCart();
