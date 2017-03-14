function loadGameMultipleSelection(set,data){
        for(var i=0;i<data.length;i++){
            switch (set.colums) {
                case 1:
                $('#'+set.idContainer).append('<div id="'+set.idContainer+i+'" class="col s12" style="padding-bottom:2em;margin:0px;"></div>');
                break;
                case 2:
                $('#'+set.idContainer).append('<div id="'+set.idContainer+i+'" class="col s6" style="padding-bottom:2em;margin:0px;"></div>');
                break;
                case 3:
                $('#'+set.idContainer).append('<div id="'+set.idContainer+i+'" class="col s4" style="padding-bottom:2em;margin:0px;"></div>');
                break;
                case 4:
                $('#'+set.idContainer).append('<div id="'+set.idContainer+i+'" class="col s3" style="padding-bottom:2em;margin:0px;"></div>');
                break;
            }
            $('#'+set.idContainer+i).append('<div id="'+set.idContainer+'item'+i+'" class="row" style="margin:0px;"></div>');
            $('#'+set.idContainer+'item'+i).append('<h6 class="col right-align" style="font-size:'+set.textSize+'em;color:'+set.indexColor+'">'+(i+1)+'.'+'</h6>');
            $('#'+set.idContainer+'item'+i).append('<h6 class="col left-align" id="'+set.idContainer+'question'+i+'" style="padding-right:0em;font-size:'+set.textSize+'em;color:'+set.textColor+'">'+data[i].question+'</h6>');
            $('#'+set.idContainer+'item'+i).append('<h6 class="col left-align hide" id="'+set.idContainer+'answer'+i+'" style="padding-left:0.5em;font-size:'+set.textSize+'em;color:#4CAF50;">'+data[i].answers.split(';')[data[i].correctIndex]+'</h6>');
            $('#'+set.idContainer+'item'+i).append('<h6 class="col left-align" id="'+set.idContainer+'answerp'+i+'" style="padding-left:0.5em;font-size:'+set.textSize+'em;color:'+set.textColor+';">'+set.complement+'</h6>');
            var answerCount=data[i].answers.split(';').length;
            $('#'+set.idContainer+'item'+i).append('<div class="col s11 right" id="'+set.idContainer+'item'+'form'+i+'"></div>');
            $('#'+set.idContainer+'item'+'form'+i).append('<div class="col s12" id="'+set.idContainer+'item'+'form'+'p'+i+'"></div>');
            for(var j=0;j<answerCount;j++){
                $('#'+set.idContainer+'item'+'form'+'p'+i).append('<input value="'+j+'" class="with-gap col s1 right-align" id="'+'group'+i+'_'+j+'" type="radio" name="group'+i+'" style="font-size:'+set.textSize+'em;color:'+set.indexColor+'"/>');
                $('#'+'group'+i+'_'+j).click(function(){
                    var groupNumber=$(this).attr('id').split('group')[1].split('_')[0];
                    //alert(groupNumber);
                     if($(this).val()==data[groupNumber].correctIndex){
                    // alert($(this).val());
                    $('#'+set.idContainer+'answer'+groupNumber).removeClass('hide');
                        $('#'+set.idContainer+'answer'+groupNumber).removeClass('hide');
                        $('#'+set.idContainer+'answerp'+groupNumber).addClass('hide');
                        //$('#'+set.idContainer+'question'+groupNumber).val(data[groupNumber].question.split(' ')[data[groupNumber].question.split(' ').length-1])
                     }else{
                        $('#'+set.idContainer+'answer'+groupNumber).addClass('hide');
                        $('#'+set.idContainer+'answerp'+groupNumber).removeClass('hide');
                     }
                });
                $('#'+set.idContainer+'item'+'form'+'p'+i).append('<label class="col s11 left-align" for="'+'group'+i+'_'+j+'" style="font-size:'+(set.textSize)+'em;color:'+set.textColor+'">'+data[i].answers.split(";")[j]+'</label>');
            }
        }
    }
/*<script type="text/javascript">
    var set={
        textColor: '#167594',
        indexColor: '#ED5568',
        textSize: 1.5,
        idContainer:'container',
        colums:2,
        complement:'_______'
    }
    var data=[
    {
        question:"He's from Brazil. He's",
        answers: "Brazilish;Brazilian;Brazilese",
        correctIndex:1
    },
    {
        question:"He's from Brazil. He's",
        answers: "Brazilish;Brazilian;Brazilese",
        correctIndex:0
    },
    {
        question:"He's from Brazil. He's",
        answers: "Brazilish;Brazilian;Brazilese",
        correctIndex:2
    },
    {
        question:"He's from Brazil. He's",
        answers: "Brazilish;Brazilian;Brazilese",
        correctIndex:2
    },
    ];
    var currentValue = 0;
    function handleClick(myRadio) {
        alert('Old value: ' + currentValue+'\n'+'New value: ' + myRadio.value);
        currentValue = myRadio.value;
    }
    loadGameMultipleSelection(set,data);
</script>
    */