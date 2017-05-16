
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
        var filaHaltura= document.getElementById("rowCenter").offsetHeight;
        var sobrante=documentoAltura-filaHaltura;
        var puntox=(sobrante/2-10);
        document.getElementById("rowCenter").style.marginTop=puntox+"px";


        /* $('input').focus(
         function(){
         $('input[type="submit"]').removeAttr('disabled');
         });*/

    });


$(document).mouseover(function(){
    $('input[type="submit"]').removeAttr('disabled');

});

