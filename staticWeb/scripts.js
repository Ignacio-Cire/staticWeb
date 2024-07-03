
/*EFECTO CARRUSEL DE FOTOS*/

let indiceActual = 0;  // Índice inicial
const slides = document.querySelectorAll('.carousel-item'); // Obtiene todos los elementos del carrusel
const totalSlides = slides.length;
const intervaloCambio = 3000; // Tiempo en milisegundos entre cada cambio automático

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const botonAnterior = document.querySelector('.carousel-control.prev');
    const botonSiguiente = document.querySelector('.carousel-control.next');
    let indiceActual = 0;

    // Función para mostrar el slide en la posición especificada
    function mostrarSlide(indice) {
        if (indice >= totalSlides) {  // Si el índice es mayor o igual al total de slides, vuelve al primero
            indice = 0;
        } else if (indice < 0) {  // Si el índice es menor que cero, muestra el último slide
            indice = totalSlides - 1;
        }
        indiceActual = indice;
        carousel.style.transform = `translateX(-${indiceActual * 100}%)`;  // Mueve el carrusel horizontalmente
    }

    // Función para mostrar el siguiente slide
    function siguienteSlide() {
        mostrarSlide(indiceActual + 1);
    }

    // Función para mostrar el slide anterior
    function anteriorSlide() {
        mostrarSlide(indiceActual - 1);
    }

    // Eventos para los botones de control
    botonSiguiente.addEventListener('click', siguienteSlide);
    botonAnterior.addEventListener('click', anteriorSlide);

    // Cambio automático cada intervaloCambio milisegundos
    setInterval(siguienteSlide, intervaloCambio);

    // Muestra inicialmente el primer slide
    mostrarSlide(indiceActual);
});





// //REGISTRO DE USUARIO 

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("form-registro");

//     form.addEventListener("submit", function(event) {
//         // Evitar el envío del formulario hasta que se validen los datos
//         event.preventDefault();

//         // Obtener los valores de los campos del formulario
//         const nombre = document.getElementById("nombre").value;
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         // Validar que los campos no estén vacíos (opcional)
//         if (!nombre || !email || !password) {
//             alert("Por favor, completa todos los campos.");
//             return;
//         }

//         // Crear un objeto con los datos del usuario
//         const usuario = {
//             nombre: nombre,
//             email: email,
//             password: password
//         };

//         // Obtener el array de usuarios desde localStorage o inicializar uno vacío
//         let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//         // Agregar el nuevo usuario al array
//         usuarios.push(usuario);

//         // Guardar el array actualizado en localStorage
//         localStorage.setItem("usuarios", JSON.stringify(usuarios));

//         // Mostrar mensaje de registro exitoso (opcional)
//         alert("Registrado exitosamente");

//         // Redirigir al usuario a la página de inicio de sesión
//         window.location.href = "inicioSesion.html";
//     });
// });

// //VALIDACION DE INCIO DE SESION 

// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // Simulación de verificación de credenciales
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
    
//     // Aquí deberías verificar las credenciales con tu backend o almacenamiento seguro
//     // En este ejemplo, simplemente comparamos con valores fijos
//     if (username === 'usuario' && password === 'contraseña') {
//         // Almacenar la información de sesión en localStorage
//         localStorage.setItem('usuario', username);
        
//         // Redirigir al usuario a la página principal o cualquier otra página de contenido
//         window.location.href = 'index.html'; // Cambia 'index.html' por la página a la que quieres redirigir
//     } else {
//         alert('Usuario o contraseña incorrectos');
//     }
// });






//BUSQUEDA DEL NAV

//esta funcion se utiliza para ejecutar código una vez que el DOM (Document Object Model) se ha cargado y está listo para ser manipulado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el campo de búsqueda por su id dentro del documento HTML
    const campoBusqueda = document.getElementById('busqueda');
    // Selecciona el botón de búsqueda por su id
    const botonBusqueda = document.getElementById('search-button');
    // Selecciona todos los elementos con la clase 'establecimiento'
    const establecimientos = document.querySelectorAll('.establecimiento');

    // Función para buscar establecimientos por nombre
    const buscarEstablecimientos = () => {
        // Obtiene el término de búsqueda, lo limpia y convierte a minúsculas
        const terminoBusqueda = campoBusqueda.value.trim().toLowerCase();
        let encontrado = false; // Variable para indicar si se encontró algún establecimiento

        // Recorre todos los establecimientos
        establecimientos.forEach(establecimiento => {
            // Obtiene el nombre del establecimiento desde el atributo 'data-nombre' y lo convierte a minúsculas
            const nombre = establecimiento.dataset.nombre.toLowerCase();

            // Verifica si el nombre del establecimiento incluye el término de búsqueda
            if (nombre.includes(terminoBusqueda)) {
                establecimiento.style.display = 'block'; // Muestra el establecimiento si coincide
                establecimiento.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Desplaza la vista al establecimiento encontrado
                encontrado = true; // Marca que se encontró al menos un establecimiento
            } else {
                establecimiento.style.display = 'none'; // Oculta el establecimiento si no coincide
            }
        });

        // Si no se encontró ningún establecimiento, muestra una alerta
        if (!encontrado) {
            alert('Ningún establecimiento encontrado con ese nombre');
        }
    };

    // Agrega un evento de clic al botón de búsqueda
    botonBusqueda.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del botón
        buscarEstablecimientos(); // Llama a la función para buscar establecimientos
    });

    // Agrega un evento cuando se presiona una tecla en el campo de búsqueda
    campoBusqueda.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') { // Verifica si la tecla presionada es 'Enter'
            event.preventDefault(); // Evita el comportamiento predeterminado de 'Enter'
            buscarEstablecimientos(); // Llama a la función para buscar establecimientos
        }
    });
});





//FILTRO DE BUSQUEDA
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const formularioId = document.getElementById('formulario-filtros'); // Selecciona el formulario de filtros
    const tipoSelect = document.getElementById('tipo'); // Selecciona el campo de selección de tipo
    const ubicacionInput = document.getElementById('ubicacion'); // Selecciona el campo de entrada de ubicación
    const ratingSelect = document.getElementById('rating'); // Selecciona el campo de selección de calificación
    const establecimientos = document.querySelectorAll('.establecimiento'); // Selecciona todos los establecimientos

    // Agrega un evento de envío al formulario
    formularioId.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        const tipo = tipoSelect.value; // Obtiene el valor seleccionado en el campo de tipo
        const ubicacion = ubicacionInput.value.toLowerCase(); // Obtiene el valor ingresado en el campo de ubicación y lo convierte a minúsculas
        const rating = ratingSelect.value === 'todos' ? 0 : parseInt(ratingSelect.value); // Obtiene el valor seleccionado en el campo de calificación. parseInt convierte una cadena (string) en un número entero (int).

        // Itera sobre cada establecimiento para aplicar los filtros
        establecimientos.forEach(establecimiento => {
            const estTipo = establecimiento.dataset.tipo; // Obtiene el tipo de establecimiento desde el atributo data-tipo
            const estUbicacion = establecimiento.dataset.ubicacion.toLowerCase(); // Obtiene la ubicación de establecimiento desde el atributo data-ubicacion y lo convierte a minúsculas
            const estRating = parseInt(establecimiento.dataset.rating); // Obtiene la calificación de establecimiento desde el atributo data-rating , convierte a int para poder compararlos

            // Aplica los filtros según los valores del formulario
            const tipoCoincide = (tipo === 'todos' || estTipo === tipo); // Verifica si el tipo coincide o si se seleccionó "todos"
            const ubicacionCoincide = (ubicacion === '' || estUbicacion.includes(ubicacion)); // Verifica si la ubicación coincide o si no se ingresó nada
            const ratingCoincide = (rating === 0 || estRating >= rating); // Verifica si la calificación coincide o si se seleccionó "todos"

            // Muestra u oculta el establecimiento según si coincide con todos los filtros
            if (tipoCoincide && ubicacionCoincide && ratingCoincide) {
                establecimiento.style.display = ''; // Muestra el establecimiento
            } else {
                establecimiento.style.display = 'none'; // Oculta el establecimiento
            }
        });
    });
});





//CALIFICACION ESTRELLAS
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const contenedoresCalificacion = document.querySelectorAll('.rating'); // Selecciona todos los contenedores de calificación

    contenedoresCalificacion.forEach(contenedor => { // Itera sobre cada contenedor de calificación
        const estrellas = contenedor.querySelectorAll('.star'); // Selecciona todas las estrellas dentro del contenedor actual, en una variable estrellas

        estrellas.forEach((estrella, indice) => { // Itera sobre cada estrella en el contenedor actual
            estrella.addEventListener('click', () => { // Agrega un evento de clic a cada estrella
                for (let i = 0; i <= indice; i++) { // Itera desde el inicio hasta la estrella clickeada
                    estrellas[i].classList.add('checked'); // Añade la clase 'checked' a cada estrella en este rango
                }
                for (let i = indice + 1; i < estrellas.length; i++) { // Itera desde la estrella siguiente a la clickeada hasta el final
                    estrellas[i].classList.remove('checked'); // Remueve la clase 'checked' de cada estrella en este rango
                }

                // Guarda la calificación clickeada en localStorage
                const calificacion = indice + 1; // La calificación es el índice + 1 (porque el índice es 0-based)
                const nombreEstablecimiento = contenedor.closest('.establecimiento').dataset.nombre; // Obtiene el nombre del establecimiento
                guardarCalificacion(nombreEstablecimiento, calificacion); // Llama a la función para guardar la calificación
            });
        });

        // Función para guardar la calificación en localStorage
        function guardarCalificacion(nombreEstablecimiento, calificacion) {
            let calificaciones = JSON.parse(localStorage.getItem('calificaciones')) || {}; // Obtiene las calificaciones guardadas de localStorage o inicializa como objeto vacío

            // Agrega o actualiza la calificación para el establecimiento dado
            calificaciones[nombreEstablecimiento] = calificacion;

            // Guarda las calificaciones actualizadas en localStorage
            localStorage.setItem('calificaciones', JSON.stringify(calificaciones));
        }

        // Configuración inicial: muestra la calificación guardada si existe
        const nombreEstablecimiento = contenedor.closest('.establecimiento').dataset.nombre;
        const calificacionGuardada = JSON.parse(localStorage.getItem('calificaciones'))[nombreEstablecimiento];
        if (calificacionGuardada) {
            actualizarCalificacion(estrellas, calificacionGuardada - 1); // Actualiza visualmente las estrellas según la calificación guardada
        }
    });

    // Función para actualizar visualmente las estrellas marcadas hasta el índice dado
    function actualizarCalificacion(estrellas, indiceClickeado) {
        estrellas.forEach((estrella, indice) => {
            estrella.classList.toggle('checked', indice <= indiceClickeado);
        });
    }
});




//FORMULARIO 

// Función de validación
function validar(evento) {
    evento.preventDefault(); // Evita que el formulario se envíe automáticamente al hacer clic en "Enviar"

    var nombre = document.getElementById("nombre").value.trim(); // Obtiene y limpia el valor del campo de nombre
    var apellido = document.getElementById("apellido").value.trim(); // Obtiene y limpia el valor del campo de apellido
    var email = document.getElementById("email").value.trim(); // Obtiene y limpia el valor del campo de email
    var esValido = true; // Inicializa una bandera para indicar si el formulario es válido

    function mostrarError(elemento) {
        elemento.classList.add("error"); // Agrega la clase "error" para mostrar visualmente un error en el elemento dado
    }

    function limpiarError(elemento) {
        elemento.classList.remove("error"); // Remueve la clase "error" para limpiar cualquier error visual en el elemento dado
    }

    // Limpiar errores visuales anteriores
    limpiarError(document.getElementById("nombre"));
    limpiarError(document.getElementById("apellido"));
    limpiarError(document.getElementById("email"));

    // Validar campos obligatorios
    if (!nombre) {
        mostrarError(document.getElementById("nombre")); // Si el campo de nombre está vacío, muestra un error visual
        esValido = false; // Marca el formulario como inválido
    }
    if (!apellido) {
        mostrarError(document.getElementById("apellido")); // Si el campo de apellido está vacío, muestra un error visual
        esValido = false; // Marca el formulario como inválido
    }
    if (!email) {
        mostrarError(document.getElementById("email")); // Si el campo de email está vacío, muestra un error visual
        esValido = false; // Marca el formulario como inválido
    }

    return esValido; // Retorna true si todos los campos requeridos tienen valor, de lo contrario, retorna false
}

// Agrega un evento para escuchar el submit del formulario y llama a la función validar
document.getElementById("miFormulario").addEventListener("submit", validar);





/*LOCALSTORAGE DEL CONTACTO*/

// Agrega un evento al formulario que se dispara cuando se envía
// Agrega un evento de escucha al submit del formulario con id 'miFormulario'
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Captura los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;  // Obtiene el valor del campo de entrada con id 'nombre'
    var apellido = document.getElementById('apellido').value;  // Obtiene el valor del campo de entrada con id 'apellido'
    var email = document.getElementById('email').value;  // Obtiene el valor del campo de entrada con id 'email'
    var sugerencias = document.getElementById('sugerencias').value;  // Obtiene el valor del campo de entrada con id 'sugerencias'

    // Crea un objeto con los datos capturados del formulario
    var nuevoContacto = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        sugerencias: sugerencias
    };

    // Obtiene los Contacto existentes del localStorage y los convierte de JSON a un arreglo
    // Si no hay Contacto en localStorage, devuelve un arreglo vacío
    var arrayContacto = JSON.parse(localStorage.getItem('arrayContacto')) || [];

    // Añade el nuevo contacto al arreglo de arrayContacto existentes
    arrayContacto.push(nuevoContacto);

    // Convierte el arreglo actualizado de arrayContacto a una cadena JSON y lo guarda en localStorage
    localStorage.setItem('arrayContacto', JSON.stringify(arrayContacto));

    // Limpia los campos del formulario después de enviar
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('sugerencias').value = '';

    // Muestra una alerta de confirmación
    alert('Sugerencias enviadas');
});



// Carga todos los arrayContacto desde localStorage al cargar la página
window.onload = function() {
    // Obtiene los arrayContacto del localStorage y los convierte de JSON a un arreglo
    // Si no hay arrayContacto en localStorage, devuelve un arreglo vacío
    var arrayContacto = JSON.parse(localStorage.getItem('arrayContacto')) || [];

    // Recorre cada contacto y muestra sus detalles en la consola
    arrayContacto.forEach(function(contacto, index) {
        console.log('Contacto ' + (index + 1) + ':');  // Muestra el número de contacto en la consola
        console.log('Nombre: ' + contacto.nombre);     // Muestra el nombre del contacto en la consola
        console.log('Apellido: ' + contacto.apellido); // Muestra el apellido del contacto en la consola
        console.log('Email: ' + contacto.email);       // Muestra el email del contacto en la consola
        console.log('Sugerencias: ' + contacto.sugerencias); // Muestra las sugerencias del contacto en la consola
        console.log('---'); // Muestra una línea separadora en la consola para distinguir entre arrayContacto
    });

    // Muestra los arrayContacto en la página web si existe un elemento con el id arrayContactoList
    var arrayContactoList = document.getElementById('arrayContactoList');
    if (arrayContactoList) { // Verifica si el elemento existe
        arrayContacto.forEach(function(contacto) {
            // Crea un nuevo elemento li para cada contacto
            var li = document.createElement('li');
            // Establece el contenido del elemento li con los detalles del contacto
            li.textContent = `Nombre: ${contacto.nombre}, Apellido: ${contacto.apellido}, Email: ${contacto.email}, Sugerencias: ${contacto.sugerencias}`;
            // Añade el elemento li al elemento ul con el id arrayContactoList
            arrayContactoList.appendChild(li);
        });
    }
};










