$(function mostrar_menu() {
	$('#contenedor_menu').on('click', function() {
		$(this)
			.next()
			.slideToggle();
	});
});
