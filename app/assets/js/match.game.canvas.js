var isMobile = (navigator.userAgent.match(/iPad|iPhone|android/i) != null);
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	var rectanglesA=new Array();
	var rectanglesB=new Array();
	var count=0;
    var clicks = 0;
	var wordwidth=0;
	var answerwidth=0;
	var click={x:-1,y:-1}
    var lastClick = [0, 0];
    var colores=['#F44336','#3F51B5','#009688','#FFEB3B','#E91E63','#2196F3','#4CAF50','#FFC107','#9C27B0','#03A9F4','#8BC34A','#FF9800','#673AB7','#00BCD4','#CDDC39','#FF5722'];
    var canvas= document.getElementById(set.id);
    var container= document.getElementById(set.containerid);
    canvas.width=parseInt(container.style.width);
    canvas.height=parseInt(container.style.height);
    var w=canvas.width-area;
    var h=canvas.height;
    var ya,yb;
    var indexA=-1;
    var indexB=-1;
    var indexColor=0;
    var indexTop=0;
    var down=false;
    var up=false;
    if(isMobile){
    	container.ontouchstart=onTouchDown;
    	container.ontouchend=onTouchUp;
    	container.ontouchmove=onTouchMove;
	}else{
        container.addEventListener('mousedown', mouseDown, false);
        container.addEventListener('mouseup', mouseUp, false);
        container.addEventListener('mousemove', mouseMove, false);
	}
    context = canvas.getContext('2d');
    // context.strokeStyle = set.normal;
    context.lineWidth=2;
    var area=(h/data.length)/2;
    var expand=(h/data.length)/15;
    fontSize=area;
    context.font=fontSize+"px Arial";
    var cant=data.length;

    function mouseDown(e){
        down=true;
		up=false;
        if (e.pageX != undefined && e.pageY != undefined) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.pageX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.pageY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        click.x=x-10;
        click.y=y-10;
        }
function mouseMove(e){
    	var x,y;
  if(down==true){
    	if (e.pageX != undefined && e.pageY != undefined) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.pageX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.pageY + document.body.scrollTop + document.documentElement.scrollTop;
        }
    }
        click.x=x-10;
        click.y=y-10;
        for(var i=0;i<cant;i++){
            if(clicks==0){
                if(click.x > rectanglesA[i].xw-expand && click.x < rectanglesA[i].xw+rectanglesA[i].width+expand && click.y < rectanglesA[i].yw && click.y > rectanglesA[i].yw-area && rectanglesA[i].solved==false){
                    container.style.cursor='pointer';
                }else{
                    container.style.cursor='default';
                }
            }else if(clicks==1){
                if(click.x > rectanglesB[i].xw && click.x < rectanglesB[i].xw+rectanglesB[i].width+expand && click.y < rectanglesB[i].yw && click.y > rectanglesB[i].yw-area && rectanglesB[i].solved==false){
                    container.style.cursor='pointer';
                    }else{
                        container.style.cursor='default';
                    }
                }
            }
        }
    function mouseUp(e){
        up=true;
		down=false;
        if (e.pageX != undefined && e.pageY != undefined) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.pageX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.pageY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        click.x=x-10;
        click.y=y-10;
        }
    function load(){
    	for(var i=0;i<cant;i++){
            if(context.measureText(data[i].word).width>wordwidth){
            	wordwidth=context.measureText(data[i].word).width;
            }
            if(context.measureText(data[i].aswer).width>answerwidth){
            	answerwidth=context.measureText(data[i].aswer).width;
              }
    	}
        for(var i=0;i<cant;i++){
        rectanglesA.push({x : wordwidth+area,y : i*(h/cant),xw : 0+expand,yw : (i*(h/cant))+(area),word : data[i].word,item : i,width: getWidth(data[i].word),focus : false,solved : false});
        rectanglesB.push({x : canvas.width-answerwidth-area,y : i*(h/cant),xw : canvas.width-(3*(answerwidth/2))-expand,yw : i*(h/cant)+(area),word : data[i].answer,item : i,width: getWidth(data[i].answer),focus : false,solved : false}); 
        } 
        for(var i=0;i<cant;i++){
            var ram=random(0,cant-1);
            var aux=rectanglesB[i].word;
            rectanglesB[i].word=rectanglesB[ram].word;
            rectanglesB[i].width=getWidth(rectanglesB[i].word);
            rectanglesB[ram].word=aux;
            rectanglesB[ram].width=getWidth(aux);
          }
        for(var i=0;i<cant;i++){
            var ram=random(0,cant-1);
            var aux=rectanglesA[i].word;
            rectanglesA[i].word=rectanglesA[ram].word;
            rectanglesA[i].width=getWidth(rectanglesA[i].word);
            rectanglesA[ram].word=aux;
            rectanglesA[ram].width=getWidth(aux);
          }
      }
    
    function drawLine(a,b,c,d){
    	context.beginPath();
        context.moveTo(a, b);
        context.lineTo(c, d, 6);
      // context.strokeStyle = colores[random(0,11)];
        context.stroke();
    }
    
    function clear(){
    	context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    function drawRect(a,b,c,d){
    	context.beginPath();
    	context.rect(a,b,c,d); 
    	context.strokeStyle = '#808080';
    	context.stroke();
    }
    function drawRect(a,b,c,d,color){
    	context.strokeStyle = color;
    	context.beginPath();
    	context.rect(a,b,c,d); 
    	context.strokeStyle = color;
    	context.stroke();
    }
    
    
    function drawText(txt,x,y){
    	context.fillStyle='#808080';
    	context.fillText(txt,x,y-2);
    }

    function drawText(txt,x,y,color){
    	context.fillStyle=color;
    	context.fillText(txt,x,y-2);
    }
    
    function removeFromList(L,index){
        L.splice(index,1);
        }
    function onTouchDown(e){
    	var x=e.changedTouches[0].pageX;
    	var y=e.changedTouches[0].pageY-15;
    	click.x=x;
        click.y=y;
    	return false;   
    }
    function onTouchMove(e){
    	var x=e.changedTouches[0].pageX-30;
    	var y=e.changedTouches[0].pageY-15;
    	click.x=x;
        click.y=y;
    	return false;  
    }
    function onTouchUp(e){
    	var x=e.changedTouches[0].pageX-30;
    	var y=e.changedTouches[0].pageY-15;
    	click.x=x;
        click.y=y;
    	return false;  
    }
    function getWidth(txt){
    	return context.measureText(txt).width;
        }

    function drawPanel(){
        for(var i=0;i<rectanglesB.length;i++){
            if(rectanglesA[i].solved==false){
        	drawText(rectanglesA[i].word,rectanglesA[i].xw,rectanglesA[i].yw,'#808080');
        	if(rectanglesA[i].focus==true){
        		if(i>0){
        		drawRect(rectanglesA[i].xw-expand,rectanglesA[i].y-expand,rectanglesA[i].width+(2*expand),area+(2*expand),'#808080');
        		}else{
        			drawRect(rectanglesA[i].xw-expand,rectanglesA[i].y,rectanglesA[i].width+(2*expand),area+(expand),'#808080');
            		}
                }
            }
            if(rectanglesA[i].solved==true){
            	drawText(rectanglesA[i].word,rectanglesA[i].xw,rectanglesA[i].yw,colores[i]);
            	if(i>0){
            		drawRect(rectanglesA[i].xw-expand,rectanglesA[i].y-expand,rectanglesA[i].width+(2*expand),area+(2*expand),colores[i]);
            		}else{
            			drawRect(rectanglesA[i].xw-expand,rectanglesA[i].y,rectanglesA[i].width+(2*expand),area+(expand),colores[i]);
                		}
            }
            if(rectanglesB[i].solved==false){
        	drawText(rectanglesB[i].word,rectanglesB[i].xw,rectanglesB[i].yw,'#808080');
        	if(rectanglesB[i].focus==true && rectanglesB[i].solved==false){
            	if(i>0){
        		drawRect(rectanglesB[i].xw-expand,rectanglesB[i].yw-area-expand,rectanglesB[i].width+(expand),area+(2*expand),'#808080');
            	}else{
            		drawRect(rectanglesB[i].xw-expand,rectanglesB[i].yw-area,rectanglesB[i].width+(expand),area+(expand),'#808080');
                	}
            	}
              }
            if(rectanglesB[i].solved==true){
            	drawText(rectanglesB[i].word,rectanglesB[i].xw,rectanglesB[i].yw,colores[i]);
                	if(i>0){
            		drawRect(rectanglesB[i].xw-expand,rectanglesB[i].yw-area-expand,rectanglesB[i].width+(expand),area+(2*expand),colores[i]);
                	}else{
                		drawRect(rectanglesB[i].xw-expand,rectanglesB[i].yw-area,rectanglesB[i].width+(expand),area+(expand),colores[i]);
                    	}
                }
            }
     }
    
function onDraw(){
	clear();
	drawPanel();
	if(click.x!=-1){
		for(var i=0;i<cant;i++){
        	if(clicks==0){
            	if(click.x > rectanglesA[i].xw-expand && click.x < rectanglesA[i].xw+rectanglesA[i].width+expand && click.y < rectanglesA[i].yw && click.y > rectanglesA[i].yw-area && rectanglesA[i].solved==false){
                    clicks=1;
                    lastClick = [rectanglesA[i].xw+rectanglesA[i].width, rectanglesA[i].y+(area/2)];
                    rectanglesA[i].focus=true;
                    indexA=i;
                    break;
                }
            }else if(clicks==1){
            	if(click.x > rectanglesB[i].xw && click.x < rectanglesB[i].xw+rectanglesB[i].width+expand && click.y < rectanglesB[i].yw && click.y > rectanglesB[i].yw-area && rectanglesB[i].solved==false){
            		// drawLine(lastClick[0],
					// lastClick[1],rectanglesB[i].xw,rectanglesB[i].yw-(area/2));
                    clicks=0;
                    rectanglesB[i].focus=true;
                    indexB=i;
                    break;
                    }
                }
            }	
      click.x=-1;
      click.y=-1;
	}
	if(count/25==1){
		for(var j=0;j<cant;j++){
            if(data[j].word==rectanglesA[indexA].word && data[j].answer==rectanglesB[indexB].word){
            	// rectanglesA[indexA].solved=true;
            	// rectanglesB[indexB].solved=true;
            	var auxA={word:rectanglesA[indexTop].word,solved:rectanglesA[indexTop].solved};
            	var auxB={word:rectanglesB[indexTop].word,solved:rectanglesB[indexTop].solved};
            	rectanglesA[indexTop].solved=true;
            	rectanglesA[indexTop].word=rectanglesA[indexA].word;
            	rectanglesB[indexTop].solved=true;
            	rectanglesB[indexTop].word=rectanglesB[indexB].word;
            	if(indexA!=indexTop){
            	rectanglesA[indexA].solved=auxA.solved;
            	}
            	if(indexB!=indexTop){
            	rectanglesB[indexB].solved=auxB.solved;
            	}
            	rectanglesA[indexA].word=auxA.word;
            	rectanglesB[indexB].word=auxB.word;
            	
            	rectanglesA[indexA].width=getWidth(rectanglesA[indexA].word);
            	rectanglesB[indexB].width=getWidth(rectanglesB[indexB].word);
            	rectanglesA[indexTop].width=getWidth(rectanglesA[indexTop].word);
            	rectanglesB[indexTop].width=getWidth(rectanglesB[indexTop].word);
            	indexTop++;
                }else{
                	rectanglesA[indexA].focus=false;
                	rectanglesB[indexB].focus=false;
                    }
          }
        indexB=-1;
        indexA=-1;
        count=0;
		}
	if(indexB!=-1){
	count+=1;
	}
	// drawText(count.toString(),50,50);
	requestAnimationFrame(onDraw);
}
load();
onDraw();