let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)

}

function enviarFormulario() {

    let nombres_apellidos = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let genero = document.getElementById("genero").value
    let direccion = document.getElementById("direccion").value
    let telefono = document.getElementById("telefono").value
    let correo = document.getElementById("correo").value


    if (nombres_apellidos == "") {
        alert("Este campo es obligatorio")
    }

    console.log("Formulario enviado")

}

function toggleModo() {
    let body = document.body;
    let boton = document.getElementById('btnModo');

    body.classList.toggle('modo-oscuro');

    if (body.classList.contains('modo-oscuro')) {
        boton.textContent = 'Modo Claro';
    } else {
        boton.textContent = 'Modo Oscuro';
    }
}
