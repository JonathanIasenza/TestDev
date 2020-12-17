$(function () {
    $('.imagen').click(function () {
        var imagen1 = $(this).attr('src');
        var titleimagen = $(this).attr('title');
        if (imagen1 == "") {
            $('#mimodal').modal();
        } else {
            $('.recibir-imagen').attr('src', imagen1);
            $('#mimodal').modal();
            $('.texto-imagen').text(titleimagen);
        }
    });
});
