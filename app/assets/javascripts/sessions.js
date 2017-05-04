
    $(document).ready(function(){

        //activar el slider
        $('.slider').slider();

        $('input[type="text"]').keyup(function () {
            if ($(this).val() != '') {
                $('input[type="submit"]').removeAttr('disabled');
            }
        });

        $('input[type="submit"]').on(function(){
            alert("cambio");
        });

        /* $('input').focus(
         function(){
         $('input[type="submit"]').removeAttr('disabled');
         });*/

    });


$(document).mouseover(function(){
    $('input[type="submit"]').removeAttr('disabled');

});

