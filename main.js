function entrar() {
	if (
		document.form.correo.value == 'correo@gmail.com' &&
		document.form.contraseña.value == '12345'
	) {
		window.location = 'pagina 2/index.html';
	} else {
		alert('no se quien eres largo de aqui');
	}
}
