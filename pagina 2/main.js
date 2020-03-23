var contador = 0;

$(function mostrar_menu() {
	$('#contenedor_menu').on('click', function() {
		$(this)
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
