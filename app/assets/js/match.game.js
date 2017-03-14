
function loadGameMatchWord(set,data){
    var click=0;
    var progress=0;
    var indexA;
    var top=0;
    var indexs=randomIndexList(data.length);
    var indexsO=new Array();
    for(var o=0;o<data.length;o++){
        indexsO.push(o);
    }
    $('#'+set.idContainer).append('<div id="'+set.idContainer+'1'+'" class="col s6" style="margin:0px;"></div>');
    $('#'+set.idContainer).append('<div id="'+set.idContainer+'2'+'" class="col s6" style="margin:0px;"></div>');
    for(var i=0;i<data.length;i++){
        $('#'+set.idContainer+'1').append('<div class="row" style="margin:4px;width:'+set.width+'px;"><h6 id="'+set.idContainer+'word'+i+'" class="hand" style="padding:.25em;margin:0px;font-size:'+set.textSize+'em;position:relative;">'+data[i].word+'</h6></div>');
        $('#'+set.idContainer+'2').append('<div class="row" style="margin:4px;width:'+set.width+'px;"><h6 id="'+set.idContainer+'answer'+indexs[i]+'" class="hand" style="padding:.25em;margin:0px;font-size:'+set.textSize+'em;position:relative;">'+data[indexs[i]].answer+'</h6></div>');
    }
    for(var i=0;i<data.length;i++){
        $('#'+set.idContainer+'word'+i).css('border',set.borderSize+'px solid transparent');
        $('#'+set.idContainer+'answer'+i).css('border',set.borderSize+'px solid transparent');
        $('#'+set.idContainer+'word'+i).mouseover(function(){
            if(click==0&progress!=2){
                $(this).css('border',set.borderSize+'px solid '+set.borderColor);
                $(this).css('border-radius','50%');
            }
        });
        $('#'+set.idContainer+'word'+i).mouseleave(function(){
            if(progress==0){
                $(this).css('border',set.borderSize+'px solid transparent');
            }
        });
        $('#'+set.idContainer+'word'+i).click(function(){
            if(click==0){
                click=1;
                progress=1;
                indexA=$(this).attr('id').split('word')[1];
            }
        });
        $('#'+set.idContainer+'answer'+i).mouseover(function(){
            if(click==1){
                $(this).css('border',set.borderSize+'px solid '+set.borderColor);
                $(this).css('border-radius','50%');
            }
        });
        $('#'+set.idContainer+'answer'+i).mouseleave(function(){
            if(progress==1){
                $(this).css('border',set.borderSize+'px solid transparent');
            }
        });
        $('#'+set.idContainer+'answer'+i).click(function(){
            var index=$(this).attr('id').split('answer')[1];
            if(click==1){
                if(index==indexA){
                    if(indexs[top]!=index){
                        swapTop(set.idContainer+'answer'+index,set.idContainer+'answer'+indexs[top],1000);
                        for(var a=0;a<data.length;a++){
                          if(indexs[a]==index){
                            swapList(indexs,a,top);
                        }
                    }
                }
                if(index!=top){
                    swapTop(set.idContainer+'word'+indexsO[top],set.idContainer+'word'+index,1000);
                    for(var a=0;a<data.length;a++){
                      if(indexsO[a]==index){
                        swapList(indexsO,a,top);
                    }
                }
            }
            top=top+1;
            $('#'+set.idContainer+'word'+index).css('border',set.borderSize+'px solid '+set.solvedColor);
            $('#'+set.idContainer+'answer'+index).css('border',set.borderSize+'px solid '+set.solvedColor);
            $('#'+set.idContainer+'word'+index).unbind('mouseover');
            $('#'+set.idContainer+'answer'+index).unbind('mouseover');
            $('#'+set.idContainer+'word'+index).unbind('mouseleave');
            $('#'+set.idContainer+'answer'+index).unbind('mouseleave');
            $('#'+set.idContainer+'word'+index).unbind('click');
            $('#'+set.idContainer+'answer'+index).unbind('click');
            $('#'+set.idContainer+'word'+index).removeClass('hand');
            $('#'+set.idContainer+'answer'+index).removeClass('hand');
        }else{
            $('#'+set.idContainer+'word'+indexA).css('border',set.borderSize+'px solid transparent');
            $('#'+set.idContainer+'answer'+index).css('border',set.borderSize+'px solid transparent');
        }
        click=0;
        progress=0;
    }
});
    }
}
/*EXAMPLE*/
/*
var set={
        textSize:1.2,
        textColor:'#009688',
        idContainer : 'container',
        width:120,  
        borderColor:'#2196F3',
        solvedColor:'#4CAF50',
        borderSize:3,
    };
    var data = [{
        word: "1",
        answer: "one",
    },
    {
        word: "2",
        answer: "two",
    },
    {
        word: "3",
        answer: "three",
    },
    {
        word: "4",
        answer: "four",
    },
    {
        word: "5",
        answer: "five",
    },
    {
        word: "6",
        answer: "six",
    },
    {
        word: "7",
        answer: "seven",
    },
    {
        word: "8",
        answer: "eight",
    },
    {
        word: "9",
        answer: "nine",
    },{
        word: "10",
        answer: "ten",
    },{
        word: "11",
        answer: "eleven",
    },{
        word: "12",
        answer: "twelve",
    },{
        word: "13",
        answer: "thirteen",
    },{
        word: "14",
        answer: "fourteen",
    },{
        word: "15",
        answer: "fifteen",
    },{
        word: "16",
        answer: "sixteen",
    }
    ];
    loadGameMatchWord(set,data);

*/