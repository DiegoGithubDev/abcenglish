function loadGameFillInTheBlanks(set,data){
    $('#'+set.idContainer).append('<h6 class="row transparent center-align" id="'+set.idContainer+'header'+'" style="font-size:'+set.titleSize+'em;color:'+set.textColor+';">'+set.title+'</h6>'); 
    for(var i=0;i<data.length;i++){
      $('#'+set.idContainer).append('<h6 class="col s6 transparent center-align" style="margin-top:1em;font-size:'+set.itemTextSize+'em;color:'+set.textColor+';">'+data[i].word+'</h6>');  
      $('#'+set.idContainer).append('<div class="input-field col s6"><input maxlength="'+data[i].answer.length+'" placeholder="  " id="'+set.idContainer+'item'+i+'" type="text" style="font-size:'+set.itemTextSize+'em;color:'+set.textColor+';" class="validate"><label class="left-align hide" id="'+set.idContainer+'itemlabel'+i+'" for="'+set.idContainer+'item'+i+'">Vac&iacute;o</label></div>'); 
      $('#'+set.idContainer+'itemlabel'+i).css('font-size',(3*(set.itemTextSize/4))+'em');
      $('#'+set.idContainer+'item'+i).keyup(function(e) {
        var id = $(this).attr("id");
        var n=parseInt(id.split('item')[1]);
        if($('#'+id).val().toLowerCase()==data[n].answer.toLowerCase()){
            $('#'+set.idContainer+'item'+n).css('color','#4CAF50');
            $('#'+set.idContainer+'itemlabel'+n).css('color','#4CAF50');
            $('#'+set.idContainer+'item'+n).val(data[n].answer.toUpperCase());
            $('#'+set.idContainer+'itemlabel'+n).text('Correcto');
        }else{
            $('#'+set.idContainer+'item'+n).css('color','#F44336');
            $('#'+set.idContainer+'itemlabel'+n).css('color','#F44336');
            $('#'+set.idContainer+'itemlabel'+n).text('Incorrecto');
        }
        if($('#'+id).val()==""){
            $('#'+set.idContainer+'itemlabel'+n).text('Vacio');
        }
    });
  }
}
/*<script type="text/javascript">
    var set={
        title: "DAYS",
        textColor: '#00A0B0',
        firstColor: '#764D9F',
        minColumn:3,
        titleSize: 2,
        itemTextSize: 1.5,
        idContainer:'container'
    }
    var data=[
    {
        word:"Aomdyn",
        answer: "monday",
    },
    {
        word:"Tudyasra",
        answer: "thursday",
    },
    {
        word:"Wndeeadsy",
        answer: "wednesday",
    },
    {
        word:"Tsuydea",
        answer: "tuesday",
    },
    ];
    loadGameFillInTheBlanks(set,data);
</script>
*/
/*this demo from page book 1-103*/
function loadGameFillInTheBlanks2(set,data){
    for(var i=0;i<data.length;i++){
        $('#'+set.idContainer).append('<div id="'+set.idContainer+'main'+i+'" class="row input-field"></div>');
        $('#'+set.idContainer+'main'+i).append('<h6 class="col s1 transparent center-align" style="margin-top:0.5em;font-size:'+set.itemTextSize+'em;color:'+set.firstColor+';">'+(i+1)+'.'+'</h6>'); 
        
        switch(set.minColumn){
            case 2:
            $('#'+set.idContainer+'main'+i).append('<input maxlength="'+data[i].answer.length+'" id="'+set.idContainer+'input'+i+'" type="text" class="col s3 left-align" style="margin-bottom:0.5em;font-size:'+set.itemTextSize+'em;color:'+set.firstColor+';">'); 
            $('#'+set.idContainer+'main'+i).append('<h6 class="col s8 transparent left-align" style="margin-top:0.5em;font-size:'+set.itemTextSize+'em;color:'+set.textColor+';">'+data[i].word+'</h6>');

            break;
            case 3:
            $('#'+set.idContainer+'main'+i).append('<input maxlength="'+data[i].answer.length+'" id="'+set.idContainer+'input'+i+'" type="text" class="col s4 left-align" style="margin-bottom:0.5em;font-size:'+set.itemTextSize+'em;color:'+set.firstColor+';">'); 
            $('#'+set.idContainer+'main'+i).append('<h6 class="col s7 transparent left-align" style="margin-top:0.5em;font-size:'+set.itemTextSize+'em;color:'+set.textColor+';">'+data[i].word+'</h6>');

            break;
            case 4:
            $('#'+set.idContainer+'main'+i).append('<input maxlength="'+data[i].answer.length+'" id="'+set.idContainer+'input'+i+'" type="text" class="col s5 left-align" style="margin-bottom:0.5em;font-size:'+set.itemTextSize+'em;color:'+set.firstColor+';">'); 
            $('#'+set.idContainer+'main'+i).append('<h6 class="col s6 transparent left-align" style="margin-top:0.5em;font-size:'+set.itemTextSize+'em;color:'+set.textColor+';">'+data[i].word+'</h6>');

            break;
        }
        $('#'+set.idContainer+'input'+i).keyup(function(e) {
            var id = $(this).attr("id");
            var n=parseInt(id.split('input')[1]);
            if($('#'+id).val().toLowerCase()==data[n].answer.toLowerCase()){
                $('#'+set.idContainer+'input'+n).css('color','#4CAF50');
                $('#'+set.idContainer+'input'+n).val(data[n].answer.toUpperCase());
            }else{
                $('#'+set.idContainer+'input'+n).css('color','#F44336');
            }
        });

         /*   $('#'+set.idContainer).append('<div class="input-field col s6"><input placeholder="  " id="'+set.idContainer+'item'+i+'" type="text" style="font-size:'+set.itemTextSize+'em;color:'+set.textColor+';" class="validate"><label class="left-align hide" id="'+set.idContainer+'itemlabel'+i+'" for="'+set.idContainer+'item'+i+'">Vac&iacute;o</label></div>'); 
            $('#'+set.idContainer+'itemlabel'+i).css('font-size',(3*(set.itemTextSize/4))+'em');
            $('#'+set.idContainer+'item'+i).keyup(function(e) {
                var id = $(this).attr("id");
                var n=parseInt(id.split('item')[1]);
                if($('#'+id).val().toLowerCase()==data[n].answer.toLowerCase()){
                    $('#'+set.idContainer+'item'+n).css('color','#4CAF50');
                    $('#'+set.idContainer+'itemlabel'+n).css('color','#4CAF50');
                    $('#'+set.idContainer+'item'+n).val(data[n].answer.toUpperCase());
                    $('#'+set.idContainer+'itemlabel'+n).text('Correcto');
                }else{
                    $('#'+set.idContainer+'item'+n).css('color','#F44336');
                    $('#'+set.idContainer+'itemlabel'+n).css('color','#F44336');
                    $('#'+set.idContainer+'itemlabel'+n).text('Incorrecto');
                }
                if($('#'+id).val()==""){
                    $('#'+set.idContainer+'itemlabel'+n).text('Vacio');
                }
            }
        });*/
    }
}
