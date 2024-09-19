let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonBorrar = document.getElementById('borrar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+';
const caracteres = cadenaCaracteres + numeros + simbolos;

function generar() {

    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];  //genera un caracter aleatorio
        console.log(caracterAleatorio);

        password += caracterAleatorio;

    }

    contrasena.value = password;

}

botonBorrar.addEventListener('click', function () {
    cantidad.value = ''; // Limpia el campo de cantidad
    contrasena.value = ''; // Limpia el campo de contraseña
});