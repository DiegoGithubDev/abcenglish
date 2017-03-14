
/*
    var set={
        textSize:1.2,
        textColor:'#00A2C8',
        idContainer : 'container',
        width:120,  
        borderColor:'#2196F3',
        solvedColor:'#4CAF50',
        borderSize:3,
        indexInit:1,
        indexColor:'#60BECA',
        indexType:1,
    };
    var data = [{
        word: "M,N",
        correctIndex:1,
    },
    {
        word: "I,Y",
        correctIndex:0,
    },
    {
        word: "B,V",
        correctIndex:1,
    },
    {
        word: "A,I",
        correctIndex:0,
    },
    {
        word: "P,B",
        correctIndex:1,
    },
    {
        word: "O,U",
        correctIndex:0,
    },
    ];
    loadGameCorrectLetter(set,data);
    */
    function loadGameCorrectLetter(set,data){
        $('#'+set.idContainer).append('<div id="'+set.idContainer+'1'+'" class="col s1" style="margin:0px;"></div>');
        $('#'+set.idContainer).append('<div id="'+set.idContainer+'2'+'" class="col s5" style="margin:0px;"></div>');
        $('#'+set.idContainer).append('<div id="'+set.idContainer+'3'+'" class="col s5" style="margin:0px;"></div>');
        for(var i=0;i<data.length;i++){
            switch(set.indexType){
                case 1:
                 $('#'+set.idContainer+'1').append('<div class="row left-align" style="margin:4px;width:'+set.width+'px;"><h6 id="'+set.idContainer+'index'+i+'"style="padding:.25em;margin:0px;font-size:'+set.textSize+'em;position:relative;color:'+set.indexColor+'">'+(set.indexInit+i)+'. '+'</h6></div>');
                break;
                case 2:
                 $('#'+set.idContainer+'1').append('<div class="row left-align" style="margin:4px;width:'+set.width+'px;"><h6 id="'+set.idContainer+'index'+i+'"style="padding:.25em;margin:0px;font-size:'+set.textSize+'em;position:relative;color:'+set.indexColor+'">'+getVocal(set.indexInit+i-1)+') '+'</h6></div>');
                break;
            }
            $('#'+set.idContainer+'2').append('<div class="row" style="margin:4px;width:'+set.width+'px;"><h6 id="'+set.idContainer+'word'+i+'" class="hand" style="padding:.25em;margin:0px;font-size:'+set.textSize+'em;position:relative;color:'+set.textColor+'">'+data[i].word.split(',')[0]+'</h6></div>');
            $('#'+set.idContainer+'3').append('<div class="row" style="margin:4px;width:'+set.width+'px;"><h6 id="'+set.idContainer+'answer'+i+'" class="hand" style="padding:.25em;margin:0px;font-size:'+set.textSize+'em;position:relative;color:'+set.textColor+'">'+data[i].word.split(',')[1]+'</h6></div>');
        }
        for(var i=0;i<data.length;i++){
            $('#'+set.idContainer+'index'+i).css('border',set.borderSize+'px solid transparent');
            $('#'+set.idContainer+'word'+i).css('border',set.borderSize+'px solid transparent');
            $('#'+set.idContainer+'answer'+i).css('border',set.borderSize+'px solid transparent');
            $('#'+set.idContainer+'word'+i).mouseover(function(){
                $(this).css('border',set.borderSize+'px solid '+set.borderColor);
                $(this).css('border-radius','50%');
            });
            $('#'+set.idContainer+'word'+i).mouseleave(function(){
                $(this).css('border',set.borderSize+'px solid transparent');
            });
            $('#'+set.idContainer+'answer'+i).mouseover(function(){
                $(this).css('border',set.borderSize+'px solid '+set.borderColor);
                $(this).css('border-radius','50%');
            });
            $('#'+set.idContainer+'answer'+i).mouseleave(function(){
                $(this).css('border',set.borderSize+'px solid transparent');
            });
            $('#'+set.idContainer+'word'+i).click(function(){
                var n=$(this).attr('id').split('word')[1];
                if(data[n].correctIndex==0){
                    $('#'+set.idContainer+'word'+n).unbind('mouseover');
                    $('#'+set.idContainer+'answer'+n).unbind('mouseover');
                    $('#'+set.idContainer+'word'+n).unbind('mouseleave');
                    $('#'+set.idContainer+'answer'+n).unbind('mouseleave');
                    $('#'+set.idContainer+'word'+n).unbind('click');
                    $('#'+set.idContainer+'answer'+n).unbind('click');
                    $('#'+set.idContainer+'word'+n).removeClass('hand');
                    $('#'+set.idContainer+'answer'+n).removeClass('hand');
                    $('#'+set.idContainer+'word'+n).css('border',set.borderSize+'px solid '+set.solvedColor);
                    $('#'+set.idContainer+'answer'+n).css('border',set.borderSize+'px solid transparent');
                }
            });
            $('#'+set.idContainer+'answer'+i).click(function(){
                var n=$(this).attr('id').split('answer')[1];
                if(data[n].correctIndex==1){
                    $('#'+set.idContainer+'word'+n).unbind('mouseover');
                    $('#'+set.idContainer+'answer'+n).unbind('mouseover');
                    $('#'+set.idContainer+'word'+n).unbind('mouseleave');
                    $('#'+set.idContainer+'answer'+n).unbind('mouseleave');
                    $('#'+set.idContainer+'word'+n).unbind('click');
                    $('#'+set.idContainer+'answer'+n).unbind('click');
                    $('#'+set.idContainer+'word'+n).removeClass('hand');
                    $('#'+set.idContainer+'answer'+n).removeClass('hand');
                    $('#'+set.idContainer+'answer'+n).css('border',set.borderSize+'px solid '+set.solvedColor);
                    $('#'+set.idContainer+'word'+n).css('border',set.borderSize+'px solid transparent');
                }
            });
        }
    }