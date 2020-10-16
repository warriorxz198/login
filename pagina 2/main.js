var contador = 0;
var contador2 = 0;
const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const boton1 = document.getElementById('boton_menu');
const boton2 = document.getElementById('boton_left');
var Pedro = false

function monstrarEscondido() {
	document
		.querySelectorAll('.escondido')
		.forEach((a) => (a.style.display = 'block'));
	alert('desbloqueaste algo interesante en el menu mira que es!!!');
	dialogos('#dialogo_derek', '', 'derek', 'Derek', '../img/Derek2.jpg', 'hola..... espero no asustarte con esta visita inesperada');
	dialogos('#dialogo_derek', '', 'derek', 'Derek', '../img/Derek2.jpg', 'queria hablar contigo antes pero se me hacia imposible hasta ahora...');
	dialogos('#dialogo_derek', '', 'derek', 'Derek', '../img/Derek2.jpg', 'necesito tu ayuda.....');
	dialogos('#dialogo_derek', '', 'derek', 'Derek', '../img/Derek2.jpg', 'tengo que hacer un viaje ... un viaje al cual no podre llegar a lo que mas quiero y es mi gato');
};

$(document).ready(function mostrar_menu() {
	$('#boton_menu').on('click', function () {
		$(this).parent().next().slideToggle();
		contador++;

		if (contador === 9) {
			monstrarEscondido();
		}
	});
});

$(function despeglar() {
	$('.links').on('click', function () {
		if (screen.width <= 599) {
			$(this)
				.parent()
				.slideToggle();
			contador++;

			if (contador === 9) {
				monstrarEscondido();
			}
		}

		// esto es para que el menu2 funcione en dispotivos con un ancho mayor a 600px como una tablet //
		else {
			contador2++;
		}
		if (contador2 === 5) {
			monstrarEscondido();
		}
	});
});

//este es la funcion para la visualizacion de "logros" en el menu//

function menu_2() {
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

var gatito = 0;
var Michi = false;


function logros(logro_mensaje) {

	$(".audio")[0].play();

	alert("logro desbloqueado: " + logro_mensaje)
};

$(function gato() {
	$("#Gato_negro").on("click", function () {
		if (gatito == 0) {
			gatito++;
			$('#michi').removeClass('icon-cancel-1');
			$('#michi').addClass('icon-check');
			Michi = true;
			Pedro = true;
			logros("gato");
			$(".audio")[1].play();
			$("#Tescondido").css("display", "block");
		}
	});
});

$(function logro_gato() {
	$('#Michi').on('click', function () {
		if (Michi == true) {
			alert('la aventura con piojoso a empezado felicidades!');
		} else {
			alert('habla con el gato');
		}
	});
});

$(function llave() {
	$('#llave2').on('click', function () {
		$(this).toggle();
		$("#llave").toggle();
		alert("has econtrado la llave!!!")
	});
});

$(function llave2() {
	$("#llave").on("click", function () {
		$(this).toggle();
		$(location).attr('href', '../pagina 3/index.html')

	})
})
$(function eventoPedro() {
	$('#Bpedro').on('click', function () {
		if (Pedro == true) {
			$("#fotopedro").css("display", "block");
			$("#conocidos").text("pedro");
			$("#Tconocidos").text("Pedro");
			document
				.querySelectorAll('.Tpedro')
				.forEach((a) => (a.style.display = 'none'));
			$("#Tpedrofinal").css("display", "none");
			dialogos('#Sconocidos_dialogo', '', 'Pedro', 'Pedro', '../img/pedro.jpg', 'asi que el viejo darek te envio conmigo?.... bien a donde tienes que ir es subir por aqui hasta llegar al barrio ricaurte y subir 2 cuadras y encontras una casa azul ahi sera el lugar ... no te preocupes no ahi mas casas azules por ahi')
		}
	});
});

$(document).ready(function () {
	$('#ricaurte').on('click', function () {
		if (Pedro == true) {
			$("#casa").css("display", "block");
			alert("ya casi llegas a la casa solo sube 2 cuadras mas ");
			$("#llave2").css("display", "block");
			$("footer").css("display", "block");
		}
	});
});
