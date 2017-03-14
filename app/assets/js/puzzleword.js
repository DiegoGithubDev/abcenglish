document.getElementById("mdimage").style.display = 'none';
document.getElementById("tdimage").style.display = 'none';
document.getElementById("thdimage").style.display = 'none';
document.getElementById("wdimage").style.display = 'none';
document.getElementById("juimage").style.display = 'none';
document.getElementById("feimage").style.display = 'none';
document.getElementById("maimage").style.display = 'none';
document.getElementById("mayimage").style.display = 'none';
$('#monday').keyup(function() {
	if(document.getElementById('monday').value.toLowerCase()=='monday'.toLowerCase()){
		document.getElementById("mdimage").src = "../img/correct.png"
		document.getElementById('monday').style.color='#AC5C90';
	}else{
		document.getElementById("mdimage").src = "../img/incorrect.png"
	}
	if($('#monday').val().length<1){
		document.getElementById("mdimage").style.display = 'none';
	}else{
		document.getElementById("mdimage").style.display = 'block';
	}
});
$('#thursday').keyup(function() {
	if(document.getElementById('thursday').value.toLowerCase()=='thursday'.toLowerCase()){
		document.getElementById("thdimage").src = "../img/correct.png"
		document.getElementById('thursday').style.color='#AC5C90';
	}else{
		document.getElementById("thdimage").src = "../img/incorrect.png"
	}
	if($('#thursday').val().length<1){
		document.getElementById("thdimage").style.display = 'none';
	}else{
		document.getElementById("thdimage").style.display = 'block';
	}
});



$('#wednesday').keyup(function() {
	if(document.getElementById('wednesday').value.toLowerCase()=='wednesday'.toLowerCase()){
		document.getElementById("wdimage").src = "../img/correct.png";
		document.getElementById('wednesday').style.color='#AC5C90';
	}else{
		document.getElementById("wdimage").src = "../img/incorrect.png";
	}
	if($('#wednesday').val().length<1){
		document.getElementById("wdimage").style.display = 'none';
	}else{
		document.getElementById("wdimage").style.display = 'block';
	}
});
$('#tuesday').keyup(function() {
	if(document.getElementById('tuesday').value.toLowerCase()=='tuesday'.toLowerCase()){
		document.getElementById("tdimage").src = "../img/correct.png"
		document.getElementById('tuesday').style.color='#AC5C90';
	}else{
		document.getElementById("tdimage").src = "../img/incorrect.png"
	}
	if($('#tuesday').val().length<1){
		document.getElementById("tdimage").style.display = 'none';
	}else{
		document.getElementById("tdimage").style.display = 'block';
	}
});

$('#february').keyup(function() {
	if(document.getElementById('february').value.toLowerCase()=='february'.toLowerCase()){
		document.getElementById("feimage").src = "../img/correct.png"
		document.getElementById('february').style.color='#AC5C90';
	}else{
		document.getElementById("feimage").src = "../img/incorrect.png"
	}
	if($('#february').val().length<1){
		document.getElementById("feimage").style.display = 'none';
	}else{
		document.getElementById("feimage").style.display = 'block';
	}
});
$('#july').keyup(function() {
	if(document.getElementById('july').value.toLowerCase()=='july'.toLowerCase()){
		document.getElementById("juimage").src = "../img/correct.png"
		document.getElementById('july').style.color='#AC5C90';
	}else{
		document.getElementById("juimage").src = "../img/incorrect.png"
	}
	if($('#july').val().length<1){
		document.getElementById("juimage").style.display = 'none';
	}else{
		document.getElementById("juimage").style.display = 'block';
	}
});
$('#march').keyup(function() {
	if(document.getElementById('march').value.toLowerCase()=='march'.toLowerCase()){
		document.getElementById("maimage").src = "../img/correct.png"
		document.getElementById('march').style.color='#AC5C90';
	}else{
		document.getElementById("maimage").src = "../img/incorrect.png"
	}
	if($('#march').val().length<1){
		document.getElementById("maimage").style.display = 'none';
	}else{
		document.getElementById("maimage").style.display = 'block';
	}
});
$('#may').keyup(function() {
	if(document.getElementById('may').value.toLowerCase()=='may'.toLowerCase()){
		document.getElementById("mayimage").src = "../img/correct.png"
		document.getElementById('may').style.color='#AC5C90';
	}else{
		document.getElementById("mayimage").src = "../img/incorrect.png"
	}
	if($('#may').val().length<1){
		document.getElementById("mayimage").style.display = 'none';
	}else{
		document.getElementById("mayimage").style.display = 'block';
	}
});