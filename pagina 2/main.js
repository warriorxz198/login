var contador = 0;
var contador2 = 0;
var menu = document.getElementById('menu');
var menu2 = document.getElementById('menu2');
var boton1 = document.getElementById('boton_menu');
var boton2 = document.getElementById('boton_left');
var Pedro = false

$(document).ready(function mostrar_menu() {
	$('#boton_menu').on('click', function () {
		$(this).parent().next().slideToggle();
		contador++;

		if (contador === 9) {
			document
				.querySelectorAll('.escondido')
				.forEach((a) => (a.style.display = 'initial'));
			alert('desbloqueaste algo interesante en el menu mira que es!!!');
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
				document
					.querySelectorAll('.escondido')
					.forEach((a) => (a.style.display = 'initial'));
				alert('5 años han pasado y ante ti me eh presentado (desbloqueaste algo en el menu)');
			}
		}

		// esto es para que el menu2 funcione en dispotivos con un ancho mayor a 600px como una tablet //
		else {
			contador2++;
		}
		if (contador2 === 5) {
			document
				.querySelectorAll('.escondido')
				.forEach((a) => (a.style.display = 'initial'));
			alert('5 años han pasado y ante ti me eh presentado (desbloqueaste algo en el menu)');
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

function gato() {
	if (gatito === 0) {
		alert('miauuuu');
		gatito++;
		$('#michi').removeClass('icon-cancel-1');
		$('#michi').addClass('icon-check');
		Michi = true;
		Pedro = true;
	}
}

$(function () {
	$('#Michi').on('click', function () {
		if (Michi) {
			alert('miau');
		} else {
			alert('no encontrado');
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

$(function eventoPedro() {
	$('#Bpedro').on('click', function () {
		if (Pedro == true) {
			$("#fotopedro").css("display", "block");
			$("#conocidos").text("pedro");
			$("#Tconocidos").text("Pedro");
			document
				.querySelectorAll('.Tpedro')
				.forEach((a) => (a.style.display = 'none'));
			$("#Tpedrofinal").text("asi que el viejo darek te envio conmigo?");
		}
	});
});

$(document).ready(function () {
	$('#ricaurte').on('click', function () {
		if (Pedro == true) {
			$("#casa").css("display", "block");
			// alert('ya casi llegas al hogar solo sube 2 cuadras mas');

			alert($("#casa").scrollTop() + " px");
			$("#llave2").css("display", "block");
		}
	});
});
