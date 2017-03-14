// Initialize collapse button
var isMobile = (navigator.userAgent.match(/iPad|iPhone|android/i) != null);
$(".button-collapse").sideNav();
$(document).ready(function(){
	$('.slider').slider();
});
function showNav() {
	$('.button-collapse').sideNav('show');
}

// Hide sideNav
function hideNav() {
	$('.button-collapse').sideNav('hide');
}
$(document).ready(function() {
	var outer = $('.outer'), oh = outer.height();
	var inner = $('.inner');
	if(isMobile){
		inner.css({
			'margin-top' : (17*oh/20) + 'px'
		});
	}else{
		inner.css({
			'margin-top' : (18*oh/20) + 'px'
		});
	}
	var w = $(window).width();
	if (w <= 992) {
		/*$('#navButton').click(function() {
			$("#navButton").click();
		});*/
	} else {
		$('#navButton').mouseover(function() {
			$("#navButton").click();
		});
		$('#dashboard').addClass('no-scroll');
		$('#slide-out').mouseout(function() {
			hideNav();
		});
	}

});
function getVocal(n){
	return String.fromCharCode(97 + n);
}
function random(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}
function swapTop(idA,idB,time){
	var topA=$('#'+idA).position().top;
	var topB=$('#'+idB).position().top;
	var dif=Math.abs(topA-topB);
	if(topA<topB){
		$('#'+idA).animate({ 
			top: "+="+dif+"px",
		}, time );
		$('#'+idB).animate({ 
			top: "-="+dif+"px",
		}, time );
	}else{
		$('#'+idA).animate({ 
			top: "-="+dif+"px",
		}, time );
		$('#'+idB).animate({ 
			top: "+="+dif+"px",
		}, time );
	}
}
function swapLeft(idA,idB,time){
	var leftA=$('#'+idA).position().left;
	var leftB=$('#'+idB).position().left;
	var dif=Math.abs(topA-topB);
	if(topA<topB){
		$('#'+idA).animate({ 
			top: "+="+dif+"px",
		}, time );
		$('#'+idB).animate({ 
			top: "-="+dif+"px",
		}, time );
	}else{
		$('#'+idA).animate({ 
			top: "-="+dif+"px",
		}, time );
		$('#'+idB).animate({ 
			top: "+="+dif+"px",
		}, time );
	}
}
function swapComponent(idA,idB){
	div1 = $('#'+idA);
	div2 = $('#'+idB);
	tdiv1 = div1.clone();
	tdiv2 = div2.clone();
	div1.replaceWith(tdiv2);
	div2.replaceWith(tdiv1);
}
function removeFromList(L,index){
	L.splice(index,1);
}
function swapList(arr, indexA, indexB) {
	var temp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
}
function randomIndexList(size){
	var L=new Array();
	var i;
	for(i=0;i<size;i++){
		L.push(i);
	}
	for(i=0;i<size;i++){
		var r=random(0,size-1);
		swapList(L,i,r); 
	}
	return L;
}
function redirect(url){
	window.location.href = url ;
}
function clearElement(id){
	jQuery('#'+id).html('');
}
function getIp(){
	var ip='';
	var str=$(location).attr('href');
	for(var i=0;i<3;i++){
		ip=ip+str.split('/')[i]+'/';
	}
	return ip;
}
function loadPage(path,idContainer){
	var ip=getIp();
	jQuery.get(ip+path, function(data) {
		clearElement(idContainer);
		$('#'+idContainer).append(data);
	});
}
function check(){
	document.write(' 1 ');
$('#main1').load('test.html');  // here 'test.html' is a page and 'target' id a id of 'test.html'
document.write(' 2 ');
}

function loadPageNumber(number,max){
	//var ip=getIp();
	
	/*document.write(' number: '+number);
	if(number <= max && number > 0){
		if((number%2) == 0){

           // $("#btn").click(function(){
                $("#main1").load('pages/'+number+'.html'); 
            //});
			//jQuery.get(ip+'pages/'+number+'.html', function(data) {
				clearElement('main2');
				$('#wraper1').hide();
				$('#main2').append(data);
				$('#wraper2').show();
				$('#page2').text(number.toString());
				var outer = $('#wraper2');
				var oh = outer.height();
				var inner = $('#inner2');
				inner.css('margin-top' , '100%');
			//});
		}else{
			//$("#btn").click(function(){
                $("#main1").load('pages/'+number+'.html'); 
			//jQuery.get(ip+'pages/'+number+'.html', function(data) {
				clearElement('main1');
				$('#wraper2').hide();
				$('#main1').append(data);
				$('#wraper1').show();
				$('#page1').text(number.toString());
				var outer = $('#wraper1');
				var oh = outer.height();
				var inner = $('#inner1');
				inner.css('margin-top' , '100%');
			//});
		}
		return true;
	}else{
		Materialize.toast('El n&uacute;mero de p&aacute;gina deber&iacute;a estar entre 1 y '+max, 4000);
		return false;
	}
	*/
}

function nextPage(current,max){
	if(current+1 <= max && current+1 > 0){
		loadPageNumber(current+1,max);
		return true;
	}else{
		Materialize.toast('Fin de Libro.', 4000);
		return false;
	}
}
function beforePage(current,max){
	if(current-1 <= max && current-1 > 0){
		loadPageNumber(current-1,max);
		return true;
	}else{
		Materialize.toast('No hay p&aacute;ginas.', 4000);
		return false;
	}
	
}
function show(cad){
	Materialize.toast(cad, 4000);
}