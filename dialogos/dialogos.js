// --------esta funcion genera un cuadro de dialogo como el ultimo elemento hijo de un selector ya sea un div etc , 
// el selector es para saber donde va ir ese dialogo generalmente iran en un div la claseOpcional es para si se necesita despues eliminarlo
// el id es para darle un color de fondo con el dialogos.css el titulo es el nombre que recibe h1 dentro de este la imagen como su nombre lo dice
// es la imagen que ira en el cuadro de dialogo y el texto lo que dira este dialogo -----------------------


function dialogos(selector, claseOpcional, id, titulo, imagen, texto,) {
    $(selector).append('<div class = "dialogo' + ' ' + claseOpcional + ' "  id=' + id + '>' + '<h1>' + titulo + '</h1>' + '<img src=' + imagen + '>' + '<p>' + texto + '</p>' + '<div>')
};