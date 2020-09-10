function dialogos(selector, claseOpcional, id, titulo, imagen, texto,) {
    $(selector).append('<div class = "dialogo' + ' ' + claseOpcional + ' "  id=' + id + '>' + '<h1>' + titulo + '</h1>' + '<img src=' + imagen + '>' + '<p>' + texto + '</p>' + '<div>')
};