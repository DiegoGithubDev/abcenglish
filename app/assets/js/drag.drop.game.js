
/*Load from other .js or .html Example
<script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
<script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script type="text/javascript">
    var set={
        headers: "Bosses orders=Orden de un jefe,To tell your kids what to do=Decir a tus hijos que acer,Teacher orders=Ordenes de un profesor",
        rows: 5,
        index: -1,
        backgroundHeader:'#A5DAD4',
        textColorHeader: '#00A0B0',
        textColorDrop: '#00A0B0',
        backgroundDrop:'#BEE2EA',
        backgroundDrag:'#E8E9E7',
        backgroundSolved:'#BEE2EA',
        margin:5,   
        idContainer:'container'
    }
    var data=[
    {
        word:"Do your homework!=Haz tu tarea!",
        index: 1
    },
    {
        word:"Be quiet!=Silencio!",
        index: 2
    },
    {
        word:"Finish the report!=Termina el reporte!",
        index: 0
    },
    {
        word:"Don't copy!=No copies!",
        index: 2
    },
    {
        word:"Clean your room!=Limpia tu habitaci&oacute;n!",
        index: 1
    },
    {
        word:"Get to work!=Trabajen!",
        index: 0
    },
    {
        word:"Don't write on the wall!=No escriban en la pared!",
        index: 2
    },
    {
        word:"Wash the dishes!=Lave los platos!",
        index: 1
    },
    {
        word:"Let's go to the meeting!=Vayamos a la reunion!",
        index: 0
    },
    {
        word:"Don't use Facebook!=No uses Facebook!!",
        index: 0
    },
    {
        word:"Make your bed!=Tienda su cama!",
        index: 1
    },
    {
        word:"Don't eat in class!=No coma en clases!",
        index: 2
    },
    {
        word:"Don't use your cellphone in class=No uses tu celular en clases",
        index: 2
    },
    {
        word:"Don't look through the window! =No mire por la ventana!",
        index: 1
    }
    ];
    loadGameDragAndDrop(set,data);
</script>
<script src="js/drag.drop.game.js"></script>
*/
function loadGameDragAndDrop(set,data){
    var drag,drop;
    var containerWidth=$('#'+set.idContainer).width();
    var colCount=set.headers.split(",").length;
    var width=(containerWidth/colCount)-(colCount*(set.margin));
    for(var i=0;i<colCount;i++){
        $('#'+set.idContainer).append('<div class="col l4 card transparent" id="container'+i+'" style="height:'+set.height+'px;color:'+set.textColorHeader+';"></div>'); 
        $('#container'+i).append('<div class="col" id="drop'+i+'" style="color:'+set.textColorHeader+';width:'+width+'px;background:'+set.backgroundHeader+';"></div>');
        $('#drop'+i).append('<h6 style="display:block;width:'+width+'px;font-size:1.4em;">'+set.headers.split(",")[i].split("=")[0]+'</h6>');
        $('#drop'+i).append('<h6 style="display:block;width:'+width+'px;">'+set.headers.split(",")[i].split("=")[1]+'</h6>');
  //   $('#container'+i).append('<div class="col card" style="text-align:center;borer:1px solid black;height:200px;color:'+set.textColorHeader+';width:'+width+'px;background:transparent;">drop here!</div>');
}
$('#'+set.idContainer).append('<div class="row" id="subcontainer" style="margin:'+set.margin+'px;padding:'+2*set.margin+';"></div>');
for(var i=0;i<data.length;i++){
    $('#subcontainer').append('<div class="col l3 card" id="drag'+i+'" style="margin:'+set.margin+'px;background:'+set.backgroundDrag+';"></div>');
    $('#drag'+i).append('<h6 style="text-align:center;width:auto;color:'+set.textColorDrop+'">'+data[i].word.split("=")[0]+'</h6>');
    $('#drag'+i).append('<h6 style="text-align:center;width:auto;color:'+set.textColorDrop+'">'+data[i].word.split("=")[1]+'</h6>');
    drag=$('#drag'+i);
    drag.draggable({
        revert:  function(dropped) {
           var $draggable = $(this),
           hasBeenDroppedBefore = $draggable.data('hasBeenDropped'),
           wasJustDropped = dropped && dropped[0].id == "droppable";
           if(wasJustDropped) {
                 // don't revert, it's in the droppable
                 return false;
             } else {
               if (hasBeenDroppedBefore) {
                     // don't rely on the built in revert, do it yourself
                     $draggable.animate({ top: 0, left: 0 }, 'slow');
                     return false;
                 } else {
                     // just let the built in revert work, although really, you could animate to 0,0 here as well
                     return true;
                 }
             }
         }
     });
}
for(var i=0;i<colCount;i++){
 //   $('#container'+i).mouseover(function() {
 //       $(this).removeClass('transparent').addClass('yellow');
 //   });
 //   $('#container'+i).mouseleave(function() {
 //      $(this).removeClass('yellow').addClass('transparent');
 //   });
    $('#container'+i).droppable({
        activeClass: 'ui-state-hover',
        hoverClass: 'ui-state-active',
        drop: function( event, ui ) {
            var draggableId = ui.draggable.attr("id");
            var droppableId=event.target.id;
            var draggableTag=$('#'+draggableId).prop("tagName");
            var item=data[parseInt(draggableId.split("g")[1])];
            if(droppableId.split("r")[1]==item.index){
                $(this).append('<div class="card col" id="solved'+draggableId.split("g")[1]+'" style="color:'+set.textColorDrop+';width:'+width+'px;background:'+set.backgroundSolved+';"></div>');
                $('#solved'+draggableId.split("g")[1]).append('<h6 style="text-align:center;display:block;width:'+width+'px;">'+item.word.split("=")[0]+'</h6>');
                $('#solved'+draggableId.split("g")[1]).append('<h6 style="text-align:center;display:block;width:'+width+'px;">'+item.word.split("=")[1]+'</h6>');
                $('#'+draggableId).css('display','none');
            }
        }
    });
}
}