$(document).ready(function anteriorProgeso() {
    $('#michi').removeClass('icon-cancel-1');
    $('#michi').addClass('icon-check');
    // alert("abres la puerta entra piojoso contigo y cierras la puerta")
    $(".audio")[2].play();
});

function dialogos(id, texto, titulo, imagen) {
    $(id).append('<div class = "dialogo">' + '<h1>' + titulo + '</h1>' + '<img src=' + imagen + '/>' + '<p>' + texto + '</p>' + '<div>')
};

$(function Boton_dia_noche() {
    $('.cambio').on('click', function () {
        $(".cambio").toggleClass("activo");
        $("#sala").addClass("activo");
        // $(".audio")[3].play();
        $("#imagen_gato_negro").replaceWith('<img id="imagen_gato_blanco" src="../img/gato_blanco.jpg"> ');
        $("#imagen_gato_blanco")
            .prev().text('al despertar no encuentras por ningun lado al piojoso en su lugar encuentras un gato blanco mirandote fijamente con curiosidad');
        $("#imagen_gato_blanco")
            .next().text('esto es una puebra prro')
            .next().text('esto es la puerba dos antes de la pregunta')
            .next().css("display", "none")
        $("#imagen_gato_blanco").append(dialogos('#sala', 'esto es una puebra', 'puebra titulo', '../img/gato_blanco.jpg'))



    });
    $('.respuestas').on('click', function () {
        $(".cambio").css("display", "flex");
    });
});


$(function () {
    let respuesta1 = false;
    $('#sala_respuetaGato_1').on('click', function () {
        if (respuesta1 == false) {
            $("#sala_respuetaGato_2").css("display", "none")
            $("#sala").append("<p>-por supuesto que no es mas supongo que mi nuevo dueño estara contento de verte</p>")
            respuesta1 = true;
        }
    });
    $('#sala_respuetaGato_2').on('click', function () {
        if (respuesta1 == false) {
            $("#sala_respuetaGato_1").css("display", "none")
            $("#sala").append("<p>quedate no quiero que quedarme solito</p>")
            respuesta1 = true;
        }
    });
})

