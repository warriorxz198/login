$(document).ready(function anteriorProgeso() {
    $('#michi').removeClass('icon-cancel-1');
    $('#michi').addClass('icon-check');
    alert("abres la puerta entra piojoso contigo y cierras la puerta")
    $(".audio")[2].play();
    dialogos('#Anterior_respuestas', 'texto1', "estrella", 'estrella', "../img/gato_negro2.jpg", 'al parecer no ahi nadie, ya se esta haciendo tarde podrias apagar la luz para irnos a dormir pofavor?');
    $('.links').css("display", "none");
});

$(function Boton_dia_noche() {
    $('.cambio').on('click', function () {
        $('#contenedor_boton').css("display", "none");
        $(".texto1").css("display", "none");
        $("#sala")
            .addClass("activo")
            .css("color", "black");
        $(".audio")[3].play();
        $("#imagen_gato_negro")
            .replaceWith('<img id="imagen_gato_blanco" src="../img/gato_blanco.jpg"> ');
        $("#imagen_gato_blanco")
            .prev().text('al despertar no encuentras por ningun lado al piojoso en su lugar encuentras un gato blanco mirandote fijamente con curiosidad');
        $("#imagen_gato_blanco").next().css("display", "none");
        dialogos('#sala', 'DialogoPiojoso', "piojoso", '????', "../img/gato_blanco.jpg", 'mmmmmm tu quien eres? *mueve la cola mientras te sigue mirando');
        dialogos('#sala', 'DialogoPiojoso', "principal", 'alexa', "../img/flaquita.jpg", 'soy "personsa" tu quien eres? y donde esta estrella? y sobre todo tu quien eres no te vi cuando llegue con estrella');
        dialogos('#sala', 'DialogoPiojoso', "piojoso", '????', "../img/gato_blanco.jpg", 'oye mas despacio velocista no me gusta que vayas tan rapido........');
        dialogos('#sala', 'DialogoPiojoso', "piojoso", 'piojoso', "../img/gato_blanco.jpg", 'jum al parecer eres amiga de estrella asi que esta bien mi nombre es copito pero mi dueño me dice piojoso me puedes llamar asi si quieres');
        dialogos('#sala', 'DialogoPiojoso', "piojoso", 'piojoso', "../img/gato_blanco.jpg", 'estrella cuando vivia aqui le gustaba desaparecer a estas horas y aparecia de noche supongo que volvio al viejo habito, yo la salude mientras tu dormias');
        dialogos('#sala', 'DialogoPiojoso', "principal", 'alexa', "../img/flaquita.jpg", 'porque estrella desaparece durante el dia? porque no simplemente se queda aca con ustedes?');
        dialogos('#sala', 'DialogoPiojoso', "piojoso", 'piojoso', "../img/gato_blanco.jpg", 'le gusta salir a caminar por ahi aveces en los techos o aveces se esconde en lugares muy oscuros para no ser vista');
        dialogos('#sala', 'DialogoPiojoso', "piojoso", 'piojoso', "../img/gato_blanco.jpg", 'en fin mientras vuelve estrella y  te pueda agradecer bien .... que tal si miras la casa? si necesitas algo avisame');
        dialogos('#sala', 'DialogoPiojoso', "principal", 'alexa', "../img/flaquita.jpg", 'mmmmmmm esta bien pero cuando vuelva ya me tendre que ir no quiero molestar a los que viven aqui');
        $('#sala_respuetaGato_3')
            .css("display", "block")
            .appendTo('#sala');
    });
});

let dialogoPancho = true;
let entradaCodigos = 0;
let hablaPiojoso = false

$(function OpcionesSala() {
    $('#sala_respuetaGato_3').on('click', function () {
        $(this).css("display", "none");
        $('.DialogoPiojoso').css("display", "none");
        $('#imagen_gato_blanco').css("display", "none");
        $("#imagen_gato_blanco")
            .prev().text('miras al arededor de toda la sala y logras ver un pasillo que al parecer lleva a una habitacion y un poco mas a la derecha logras visualizar una cocina ... a donde quieres ir?');
        $('.cuarto_opciones').css("display", "block");
    });

    $('#sala_respuetaGato_4').on("click", function () {
        $('#cuarto').css("display", "block");
        $('#sala').css("display", "none");
    });

    $('#sala_respuetaGato_5').on("click", function () {
        $('#cocina').css("display", "block");
        $('#sala').css("display", "none");

        if (dialogoPancho == true) {
            $(".audio")[5].play();
            dialogos('#cocina_dialogo', '', "principal", 'alexa', "../img/flaquita.jpg", 'mmmmm hola no te habia visto antes piojoso tampoco te mensiono mmm puedo saber quien eres?');
            dialogos('#cocina_dialogo', '', "pancho", 'pancho', "../img/gato_gris2.jpg", 'oh hola me llamo ... bueno me dicen de varias maneras es una larga historia pero me puedes llamar pancho como lo hace el dueño de la casa');
            dialogos('#cocina_dialogo', '', "pancho", 'pancho', "../img/gato_gris2.jpg", 'tu debes ser alexa verdad? estrella me hablo de ti hace poco que la vi');
            dialogos('#cocina_dialogo', '', "principal", 'alexa', "../img/flaquita.jpg", 'si pero... yo nunca le dije como me llamaba a ninguno de ustedes como sabes mi nombre realmente?');
            dialogos('#cocina_dialogo', '', "pancho", 'pancho', "../img/gato_gris2.jpg", 'instinto felino, mmm me podrias hacer un favor? hace rato que tengo hambre pero mi plato esta vacio me puedes dar un poco de comida que esta en el armario de arriba porvafor?');
            dialogos('#cocina_dialogo', '', "principal", 'alexa', "../img/flaquita.jpg", 'mmm esta bien pero despues quiero respuestas, te servire poco luego no quiero problemas con el dueño');
        }
    });

    $('#sala_respuetaGato_6').on("click", function () {
        $('#sala_piojoso').css("display", "block");
        $('#sala_principal').css("display", "none");
        if (entradaCodigos > 0 && hablaPiojoso == false) {

            $('#sala_piojoso_opcion1').css("display", "block");

        };
    });

    $('#sala_respuetaGato_7').on("click", function () {
        $('#Familia').css("display", "block");
        $('#sala_principal').css("display", "none");
    });

    $('#Familia_volver').on("click", function () {
        $('#Familia').css("display", "none");
        $('#sala_principal').css("display", "block");
    });

    let piojosocaja = true;

    $('#sala_piojoso_opcion1').on("click", function () {
        $('#sala_piojoso_opcion1').css("display", "none");
        $('#sala_piojoso_2').css("display", "block");
        FinEventos++;
        hablaPiojoso = true;

        if (piojosocaja == true) {
            dialogos('#sala_piojoso_2', '', "principal", 'alexa', "../img/flaquita.jpg", 'sabes algo sobre lo que esta en el cuarto? especificamente sobre lo que esta en la estanteria de libros?');
            dialogos('#sala_piojoso_2', '', "piojoso", 'piojoso', "../img/gato_blanco.jpg", 'te refieres al coso verde? no se mucho la verdad aveces el pronuncia algo antes de escribir algo ahi');
            dialogos('#sala_piojoso_2', '', "principal", 'alexa', "../img/flaquita.jpg", 'que pronuncia? es que quisiera saber para que funciona eso como dicen la curiosidad gana');
            dialogos('#sala_piojoso_2', '', "piojoso", 'piojoso', "../img/gato_blanco.jpg", 'no tengo ni idea pero la vez que le pregunte me dijo que era "para siempre" lo que decia pero en el "idioma del amor" aparte de eso no se nada mas');
            piojosocaja = false;
        };
    });

    $('#sala_piojoso_volver').on("click", function () {
        $('#sala_piojoso').css("display", "none");
        $('#sala_piojoso_2').css("display", "none");
        $('#sala_principal').css("display", "block");

        if (FinCodigos == 2 && FinEventos == 2 && FinalEstrella == false) {
            estrellaFinal();
        };
        if (FinCodigos == 3 && FinEventos == 3) {
            EventoFinal();
        };
    });

    $('.respuestas').on('click', function () {
        $(".cambio").css("display", "flex");
    });
});


$(function respuestas() {
    let respuesta1 = false;
    $('#sala_respuetaGato_1').on('click', function () {

        if (respuesta1 == false) {
            $("#sala_respuetaGato_1").css("display", "none");
            $("#sala_respuetaGato_2").css("display", "none");
            dialogos('#sala', 'texto1', "principal", 'alexa', "../img/flaquita.jpg", 'espera......no pasa nada si me quedo? quiero decir esto me gusta pero creo que seria una moletia');
            dialogos('#sala', 'texto1', "estrella", 'estrella', "../img/gato_negro.jpg", 'por supuesto que no es mas supongo que mi nuevo dueño estara contento de verte')
            dialogos('#sala', 'texto1', "principal", 'alexa', "../img/flaquita.jpg", 'esta bien espero no meterme en problemas por tu culpa ');
            dialogos('#sala', 'texto1', "estrella", 'estrella', "../img/gato_negro.jpg", 'jajaja no te preocupes , ahora bien supongo que el interructor de luz debe estar en algun lugar alto como en la antigua casa')
            respuesta1 = true;
        }
    });
    $('#sala_respuetaGato_2').on('click', function () {
        if (respuesta1 == false) {
            $("#sala_respuetaGato_1").css("display", "none");
            $("#sala_respuetaGato_2").css("display", "none");
            dialogos('#sala', 'texto1', "principal", 'alexa', "../img/flaquita.jpg", 'no creo que deba quedarme mejor me voy antes que me meta en problemas ');
            dialogos('#sala', 'texto1', "estrella", 'estrella', "../img/gato_negro.jpg", 'porfavor quedate ya es muy de noche y no me gustaria que te pasara algo y menos despues de haberme ayudado')
            respuesta1 = true;
        }
    });
})

let aniversario = false;
let FinCodigos = 0;
let FinEventos = 0;

$(function codigos() {

    let numeros = [4, 8, 12];

    $("#enviar").on("click", function () {

        let contraseña = [12102019, "F4M1L14", "pourtoujours", "persempre"]
        let codigo = $("#codigos").val()

        if (codigo == contraseña[0] & numeros[0] == 4) {

            alert("al insertal el codigo una hoja cae a tus pies");
            $("#carta_aniversario").css("display", "block");
            numeros[0]--;
            aniversario = true;
            $("#codigos").val("");
            FinCodigos++;

        } else if (codigo == contraseña[1] && numeros[1] == 8) {

            $(".audio")[4].play();
            alert("escuchas algo en la sala algo ocurrio ahi deberias revisar");
            $('#sala_respuetaGato_7').css("display", "block");
            numeros[1]--;
            $("#codigos").val("");
            FinCodigos++;


        } else if (codigo == contraseña[2] && numeros[2] == 12) {
            paraSiempre();
            numeros[2]--;
            $("#codigos").val("");
            contraseña.splice(3, 1);
            FinCodigos++;
        } else if (codigo == contraseña[3] && numeros[2] == 12) {
            paraSiempre();
            numeros[2]--;
            $("#codigos").val("");
            contraseña.splice(2, 1);
            FinCodigos++;
        }
    });
});

let cajon = false;

function paraSiempre() {
    $(".audio")[6].play();
    alert("escuchas como un cajon abriendose");
    cajon = true
}

//  esta funcion esta en proceso falta especificar que hacer con algunas opciones que puede elejir el usuarioz
$(function objetosCuarto() {


    $('#cuarto_volver').on("click", function () {
        $('#cuarto').css("display", "none");
        $('#sala').css("display", "block");

        if (FinCodigos == 2 && FinEventos == 2 && FinalEstrella == false) {
            estrellaFinal();
        };
        if (FinCodigos == 3 && FinEventos == 3) {
            EventoFinal();
        };
    });

    const principalCuarto = document.getElementById('cuarto_principal')
    // cuando se hace click en la palabra estanteria pasara esto

    $('#estanteria').on("click", function () {
        principalCuarto.style.display = 'none';
        $('#cuarto_estanteria').css("display", "block");
        $('#cuarto_estanteria_opcion1').css("display", "block");
        $('#cuarto_estanteria_opcion2').css("display", "block");
        $('.rEstanteria').css("display", "block");
        $('#cuarto_estanteria_texto').text("*tu mirada se enfoja en una estanteria hubicada en una esquina de la habitacion dando un vistasto rapido te das cuenta que la mayoria de libros hubicados hay soy bastante antiguos y incluso algunos son inservibles debido a que son libros relacionados a escuela los cuales se acutalizan constantemente");
    });

    $('#cuarto_estanteria_opcion1').on("click", function () {
        $('#cuarto_estanteria_texto').text("*mueves los libros y descrubres en la pared un extraño aparato electronico parece que funsiona con constraseñas o palabras clave");
        dialogos('#cuarto_estanteria_texto', '', "principal", 'alexa', "../img/flaquita.jpg", 'deben estar anotadas en algun lado, tal vez piojoso me pueda ayudar con esto');
        $('#cajas').css("display", "block");
        $('.rEstanteria').appendTo('#cuarto');
        $('#cuarto_estanteria_opcion1').css("display", "none");
        entradaCodigos++;

        if (aniversario == true) {
            $("#carta_aniversario").css("display", "block");

        }
    });

    $('#cuarto_estanteria_opcion2').on("click", function () {
        $('#cajas').css("display", "none");
        principalCuarto.style.display = 'block';
        $('#cuarto_estanteria').css("display", "none");
        $('.rEstanteria').css("display", "none");

        if (aniversario == true) {
            $("#carta_aniversario").css("display", "none");
        }

    });

    // cuando se hace click en la palabra portatil pasara esto
    $('#portatil').on("click", function () {
        principalCuarto.style.display = 'none';
        $('#cuarto_portatil').css("display", "block");
    });

    $('#cuarto_portatil_opcion1').on("click", function () {
        $('#cuarto_portatil_opcion1').css("display", "none");
        $('#cuarto_portatil_opcion2').appendTo("#cuarto_portatil");
        $('#cuarto_portatil_opcion3').css("display", "block");
        $('#cuarto_portatil_dialogo').css("display", "block");
        $('#cuarto_portatil_texto').text("*enciendes el portatil y accedes a todo su contenido devido a que no tiene una contraseña ");
        dialogos('#cuarto_portatil_dialogo', '', "principal", 'alexa', "../img/flaquita.jpg", 'mmmmm al parecer ahi muchos archivos aqui pero hay unos archivos que estan resaltados en rojo tal vez deberia revisar pueden ser importantes');

    });

    $('#cuarto_portatil_opcion2').on("click", function () {
        principalCuarto.style.display = 'block';
        $('#cuarto_portatil').css("display", "none");
    });

    $('#cuarto_portatil_opcion3').on("click", function () {
        window.open("https://warriorxz198.github.io/te-amo/");
    });


    $("#cajon").on("click", function () {
        principalCuarto.style.display = 'none';
        $('#cuarto_cajon').css("display", "block");
        $('#cajon_abrir').css("display", "block");
    });

    let comentario = true

    $('#cajon_abrir').on("click", function () {
        if (cajon == true) {

            $('#cuarto_cajon').css("display", "none");

            $('#cuarto_cajon2').css("display", "block");

        }

        else {

            $('#cajon_abrir').css("display", "none");
            $('#cajon_comentario').css("display", "block");

            if (comentario == true) {

                dialogos('#cajon_comentario', '', "principal", 'alexa', "../img/flaquita.jpg", 'parece que esta cerrado con llave tendre que buscar la manera de abrilo');
                comentario = false;
            }
        };

    });

    $('#cuarto_cajon_volver').on("click", function () {
        principalCuarto.style.display = 'block';
        $('#cuarto_cajon').css("display", "none");
        $('#cajon_comentario').css("display", "none");
    });

    $('#cuarto_cajon2_caja').on("click", function () {
        $('#cuarto_cajon2_caja').css("display", "none");
        $('#anillo').css("display", "block");
        $('#anillo').prev().css("display", "none");
    });

    $('#cuarto_cajon2_volver').on("click", function () {
        principalCuarto.style.display = 'block';
        $('#cuarto_cajon2').css("display", "none");
        $('#cuarto_cajon2_caja').css("display", "block");
        $('#anillo').css("display", "none");
        $('#anillo').prev().css("display", "block");
    })
});

$(function opcionesCocina() {
    $('#comida').on("click", function () {
        $('#comida').css("display", "none");
        $('#concina_1').css("display", "none");
        $('#cocina_foto').replaceWith('<img id="cocina_foto" src="../img/cocina2.jpg"> ');
        $('#cocina_2').css("display", "block");
        $('#cocina_volver').css("display", "block");
        dialogoPancho = false;
    });

    $('#pancho').on("click", function () {
        $("#cocina_2").css("display", "none");
        $("#cocina_3").css("display", "block");
        $('#cocina_volver').css("display", "none");
    });

    $('#pregunta').on("click", function () {
        $("#cocina_3").css("display", "none");
        $("#cocina_3_pregunta").css("display", "block");
        dialogos('#cocina_3_pregunta2', '', "principal", 'alexa', "../img/flaquita.jpg", 'mmm ahora que ya comiste un poco dime realmente como es que sabes mi nombre?');
        dialogos('#cocina_3_pregunta2', '', "pancho", 'pancho', "../img/gato_gris2.jpg", 'no es casualidad que estes ahora aqui y con tanta libertad, todos aqui sabemos quien eres cada rato nuestro dueño habla de ti sin parar eres como un pesnamiento constante para el');
        dialogos('#cocina_3_pregunta2', '', "principal", 'alexa', "../img/flaquita.jpg", 'y puedo saber quien es tu "dueño" tampoco me han dicho quien es  debo ser muy importante para el si lo que dices es verdad');
        dialogos('#cocina_3_pregunta2', '', "pancho", 'pancho', "../img/gato_gris2.jpg", 'ya sabras cuando llegue no demorara mucho mientras  podrias ir a ver el resto de la casa todo aqui esta pensado en ti, mientras llamare a estrella tambien para que de las gracias por traerla ');
        FinEventos++;
    })

    $('#Nota').on("click", function () {
        $('#cocina_2').css("display", "none");
        $('#cocina_volver').css("display", "none");
        $('#Nota').css("display", "none");
        $('#nota').css("display", "block");
        dialogos('#notaD', '', "principal", 'alexa', "../img/flaquita.jpg", ' "F4M1L14" parece una especie de codigo me pregunto para que servira ');
    });

    $('#nota_volver').on("click", function () {
        $('#nota').css("display", "none");
        $('#cocina_2').css("display", "block");
        $('#cocina_volver').css("display", "block");
        $('#Nota').css("display", "block");
    });

    $('#cocina_3_volver').on("click", function () {
        $('#cocina_2').css("display", "block");
        $('#cocina_3').css("display", "none");
        $('#cocina_volver').css("display", "block");
    });

    $("#cocina_3_pregunta_vovler").on("click", function () {
        $('#cocina_3_pregunta').css("display", "none");
        $('#cocina_2').css("display", "block");
        $('#cocina_volver').css("display", "block");
        $('#pregunta').css("display", "none");
    });

    $('#cocina_volver').on("click", function () {
        $('#sala').css("display", "block");
        $('#cocina').css("display", "none");

        if (FinCodigos == 2 && FinEventos == 2 && FinalEstrella == false) {
            estrellaFinal();
        };
        if (FinCodigos == 3 && FinEventos == 3) {
            EventoFinal();
        };
    });
});

let FinalEstrella = false;

function estrellaFinal() {
    $('#sala_principal').css("display", "none");
    $('#sala_estrella_final').css("display", "block");
    dialogos('#sala_estrella_final2', '', "estrella", 'estrella', "../img/gato_negro_F2.jpg", 'hola, queria decirte gracias por haberme traido hace años no venia aca y al igual que tu estuve mirando la casa');
    dialogos('#sala_estrella_final2', '', "principal", 'alexa', "../img/flaquita.jpg", 'denada solo estaba ayudando pero creo que por lo que eh visto en la casa tu fuiste la que me ayudo a mi');
    dialogos('#sala_estrella_final2', '', "estrella", 'estrella', "../img/gato_negro_F2.jpg", 'mmm no se porque lo dices pero bueno aun asi muchas gracias, por cierto pancho me manda a decirte que no olvides la fecha de hoy hace 1 año mensiono algo de una cosa verde pero no le puse atencion');
    dialogos('#sala_estrella_final2', '', "principal", 'alexa', "../img/flaquita.jpg", 'creo que ya se a que se refiere ahora ire a comprobarlo gracias por la ayuda ');
    FinalEstrella = true;
    FinEventos++;

    $('#sala_estrella_volver').on("click", function () {
        $('#sala_principal').css("display", "block");
        $('#sala_estrella_final').css("display", "none");
    });

};

function EventoFinal() {
    $('#sala_principal').css("display", "none");
    $('#eventofinal').css("display", "block");
    $('#logos').text("Teamo");
    document.title = "Te amo";
    $(".audio")[2].play();
    $("#icono_pagina").attr("href", "corazon.ico")
    dialogos('#eventofinal_dialogo', '', "el_amor_de_tu_vida", 'el amor de tu vida', "../img/yo.jpg", 'por fin despues de muchos años juntitos mi amor uwu , ahora shi ño te soltare nunca mi vida ');
}