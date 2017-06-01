
    $(document).ready(function(){

        //activar el slider
        $('.slider').slider();

        $('input[type="text"]').keyup(function () {
            if ($(this).val() != '') {
                $('input[type="submit"]').removeAttr('disabled');
            }
        });

        /*centrando la fila*/
        var documentoAltura=$(document).height();
        var filaHaltura= $('#rowCenter').height();
        var sobrante=documentoAltura-filaHaltura;
        var puntox=(sobrante/2);
        $("#rowCenter").css('marginTop',puntox+'px')

        /*igualando heigth formulario al slider*/

         var heigthSlider=$("#slider").height()+2;
        $("#form-login").css("height",heigthSlider+"px");

        /* $('input').focus(
         function(){
         $('input[type="submit"]').removeAttr('disabled');
         });*/

    });


$(document).mouseover(function(){
    $('input[type="submit"]').removeAttr('disabled');

});

