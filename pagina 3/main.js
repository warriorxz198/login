$(document).ready(function anteriorProgeso() {
    $('#michi').removeClass('icon-cancel-1');
    $('#michi').addClass('icon-check');
    alert("abres la puerta entra piojoso contigo y cierras la puerta")
    $(".audio")[2].play();
    dialogos('#Anterior_respuestas', 'texto1', "piojoso", 'piojoso', "../img/gato_negro.jpg", 'al parecer no ahi nadieya se esta haciendo tarde podrias apagar la luz para irnos a dormir pofavor?');
});

$(function Boton_dia_noche() {
    $('.cambio').on('click', function () {
        $('.cambio').css("display", "none")
        $(".texto1").css("display", "none")
        $(".cambio").toggleClass("activo")
        $("#sala").addClass("activo")
            .css("color", "black");
        $(".audio")[3].play();
        $("#imagen_gato_negro").replaceWith('<img id="imagen_gato_blanco" src="../img/gato_blanco.jpg"> ');
        $("#imagen_gato_blanco")
            .prev().text('al despertar no encuentras por ningun lado al piojoso en su lugar encuentras un gato blanco mirandote fijamente con curiosidad');
        $("#imagen_gato_blanco").next().css("display", "none");
        dialogos('#sala', '', "vecina", '????', "../img/gato_blanco.jpg", 'mmmmmm tu quien eres? *mueve la cola mientras te sigue mirando');

    });
    $('.respuestas').on('click', function () {
        $(".cambio").css("display", "flex");
    });
});


$(function () {
    let respuesta1 = false;
    $('#sala_respuetaGato_1').on('click', function () {

        if (respuesta1 == false) {
            $("#sala_respuetaGato_1").css("display", "none");
            $("#sala_respuetaGato_2").css("display", "none");
            dialogos('#sala', 'texto1', "principal", 'persona', "../img/Avatar_mujer.png", 'espera......no pasa nada si me quedo? quiero decir esto me gusta pero creo que seria una moletia');
            dialogos('#sala', 'texto1', "piojoso", 'piojoso', "../img/gato_negro.jpg", 'por supuesto que no es mas supongo que mi nuevo dueño estara contento de verte')
            dialogos('#sala', 'texto1', "principal", 'persona', "../img/Avatar_mujer.png", 'esta bien espero no meterme en problemas por tu culpa ');
            dialogos('#sala', 'texto1', "piojoso", 'piojoso', "../img/gato_negro.jpg", 'jajaja no te preocupes , ahora bien supongo que el interructor de luz debe estar en algun lugar alto como en la antigua casa')
            respuesta1 = true;
        }
    });
    $('#sala_respuetaGato_2').on('click', function () {
        if (respuesta1 == false) {
            $("#sala_respuetaGato_1").css("display", "none");
            $("#sala_respuetaGato_2").css("display", "none");
            dialogos('#sala', 'texto1', "principal", 'persona', "../img/Avatar_mujer.png", 'no creo que deba quedarme mejor me voy antes que me meta en problemas ');
            dialogos('#sala', 'texto1', "piojoso", 'piojoso', "../img/gato_negro.jpg", 'porfavor quedate ya es muy de noche y no me gustaria que te pasara algo y menos despues de haberme ayudado')
            respuesta1 = true;
        }
    });
})


//  dialogos('#sala', 'texto1', "principal", 'persona', "../img/Avatar_mujer.png", '');

// dialogos('#sala', 'texto1', "piojoso", 'piojoso', "../img/gato_negro.jpg", '')