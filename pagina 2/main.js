var contador = 0;
var menu = document.getElementById('menu');
var menu2 = document.getElementById('menu2');
var boton1 = document.getElementById('boton_menu');
var boton2 = document.getElementById('boton_left');

$(document).ready(function mostrar_menu() {
	$('#boton_menu').on('click', function() {
		$(this)
			.parent()
			.next()
			.slideToggle();
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
	$('.links').on('click', function() {
		$(this)
			.parent()
			.slideToggle();
		contador++;
		if (contador === 9) {
			document
				.querySelectorAll('.escondido')
				.forEach((a) => (a.style.display = 'initial'));
			alert('desbloqueaste algo interesante en el menu mira que es!!!');
		}
	});
});

function menu_2() {
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
}

var gatito = 0;

function gato() {
	if (gatito === 0) {
		alert('miauuuu');
		gatito++;
	}
}
