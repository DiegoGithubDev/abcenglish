
    $(document).ready(function(){

        //activar el slider
        $('.slider').slider();

        $('input[type="text"]').keyup(function () {
            if ($(this).val() != '') {
                $('input[type="submit"]').removeAttr('disabled');
            }
        });

        /*----------esto es para mostrar un alert--------------------
         $ ('input[type="submit"]').click(function(){
            var message= $('#mensaje').text();
            var tiempo=800;
            var color= 'red'
            Materialize.toast(message,tiempo,color);
        });*/

        setTimeout(function() {
            $('#mensaje').fadeOut(1500);
        },2000);
        var message= $('#mensaje').text();
        Materialize.toast(message,'2000','red','round');

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

