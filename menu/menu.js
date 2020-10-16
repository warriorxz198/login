
$(document).ready(function mostrar_menu() {
    $('#boton_menu').on('click', function () {
        $(this).parent().next().slideToggle();
    });
});

$(function despeglar() {
    $('.links').on('click', function () {
        if (screen.width <= 599) {
            $(this)
                .parent()
                .slideToggle();
        }
        // esto es para que el menu2 funcione en dispotivos con un ancho mayor a 600px como una tablet //
    });
});

//este es la funcion para la visualizacion de "logros" en el menu//

function menu_2() {

    let menu = document.getElementById('menu');
    let menu2 = document.getElementById('menu2');
    let boton1 = document.getElementById('boton_menu');
    let boton2 = document.getElementById('boton_left');

    if (screen.width <= 599) {
        if (menu2.style.display == 'block') {
            menu.style.display = 'block';
            menu2.style.display = 'none';
            boton1.style.display = 'block';
            boton2.style.display = 'none';

        } else {
            menu.style.display = 'none';
            menu2.style.display = 'block';
            boton1.style.display = 'none';
            boton2.style.display = 'block';
        }
        // esto es para el correcto fucionamiento en una patantalla mayor o igual a 600px solo cambia el diplay del menu2 //
    } else if (menu2.style.display == 'block') {
        menu2.style.display = 'none';
    } else {
        menu2.style.display = 'block';
    }
}
function logros(logro_mensaje) {

    $(".audio")[0].play();

    alert("logro desbloqueado: " + logro_mensaje)
};

$(function logro_gato() {
    $('#Michi').on('click', function () {
        alert('la aventura con piojoso a empezado felicidades!');
    });
});

$(function () {
    $('#michi').removeClass('icon-cancel-1');
    $('#michi').addClass('icon-check');
})
