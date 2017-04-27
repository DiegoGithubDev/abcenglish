

$(document).click(function(){
        $('input[type="submit"]').removeAttr('disabled');

    });

$(document).mouseover(function(){
    $('input[type="submit"]').removeAttr('disabled');

});

function functionx(){
    if(document.getElementsByName("commit").disabled == true){ //here
        alert("disabled");
    }else{
        alert("enable");
    }
}
function existNumer(valorString) {
    var i=0;
    while ( (valorString.indexOf(i) < 0) && (i<9) ){
        i++;
    }

    if ( (valorString.indexOf(i)) >= (0) ){
        return true;
    }else{
        return false;
    }
}

function fieldEmpty(valorString){
    if( valorString == null || valorString.length == 0 || /^\s+$/.test(valorString) ) {
        return true;
    }
}

function validateEmail(valorString) {
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valorString)) ) {
        return false;
    }else{
        return true;
    }
}


function validaciones(){

    var aux=true;
    //obteniendo y validando el nombre
    var inputName=document.getElementById("student_name");
    var paragraphName=document.getElementById("paragraph_name");
    var messageError1="su nombre es muy corto";
    var messageError2="solo se permite letras";
    if (fieldEmpty(inputName.value)){
        paragraphName.innerHTML="debe llenar este campo";
        paragraphName.style.color="red";
        inputName.value="";
        aux= false;
    }else if (existNumer(inputName.value)){
        paragraphName.innerHTML="no se aceptan numeros";
        paragraphName.style.color="red";
        inputName.value="";
        aux= false;
    }else if (inputName.value.length<3 ){
        paragraphName.innerHTML=messageError1;
        paragraphName.style.color="red";
        inputName.value="";
        aux= false;
    }else if ( !isNaN(inputName.value)){
        paragraphName.innerHTML=messageError2;
        paragraphName.style.color="red";
        inputName.value="";
        aux= false;
    }


    //obteniendo y validando el apellido
    var inputLastName=document.getElementById("student_last_name");
    var paragraphLastName=document.getElementById("paragraph_last_name");
    var messageError3="su apellido es muy corto";
    var messageError4="solo se permite letras";
    if (fieldEmpty(inputLastName.value)){
        paragraphLastName.innerHTML="debe llenar este campo";
        paragraphLastName.style.color="red";
        inputLastName.value="";
        aux= false;
    }else if (existNumer(inputLastName.value)) {
        paragraphLastName.innerHTML="solo se permiten letras";
        paragraphLastName.style.color="red";
        inputLastName.value="";
        aux= false;
    }else if (inputLastName.value.length<2){
        paragraphLastName.innerHTML=messageError3;
        paragraphLastName.style.color="red";
        inputLastName.value="";
        aux= false;
    }else if(!isNaN(inputLastName.value)){
        paragraphLastName.innerHTML=messageError4;
        paragraphLastName.style.color="red";
        inputLastName.value="";
        aux= false;
    }

    //obteniendo y validando el telefono
    var inputPhone=document.getElementById("student_phone");
    var paragraphPhone=document.getElementById("paragraph_phone");
    var messageError5="solo se permite numeros";
    var messageError6="numero no valido";
    if (fieldEmpty(inputPhone.value)) {
        paragraphPhone.innerHTML = "debe llenar este campo";
        paragraphPhone.style.color = "red";
        inputPhone.value = "";
        aux = false;
    }else if (isNaN(inputPhone.value) ){
        paragraphPhone.innerHTML=messageError5;
        paragraphPhone.style.color="red";
        inputPhone.value="";
        aux= false;
    }else if (inputPhone.value.length>8 ||
        inputPhone.value.length<8 ||
        inputPhone.value.charAt(0)<6 ||
        inputPhone.value.charAt(0)>7){
        paragraphPhone.innerHTML=messageError6;
        paragraphPhone.style.color="red";
        inputPhone.value="";
        aux= false;
    }


    //obteniendo y validando la direccion
    var inputAdress=document.getElementById("student_address");
    var paragraphAdress=document.getElementById("paragraph_address");
    var messageErrorAdress1="debe llenar este campo";
    if (fieldEmpty(inputAdress.value)) {
        paragraphAdress.innerHTML = messageErrorAdress1;
        paragraphAdress.style.color = "red";
        inputAdress.value = "";
        aux = false;
    }


    //obteniendo y validando el nombre de usuario
    var inputUserName=document.getElementById("student_user_name");
    var paragraphUserName=document.getElementById("paragraph_user_name");
    var messageError7="su usuario ya existe";
    var messageError8="solo se permite letras";
    if (fieldEmpty(inputUserName.value)){
        paragraphUserName.innerHTML="debe llenar este campo";
        paragraphUserName.style.color="red";
        inputUserName.value="";
        aux= false;
    }else if ( !isNaN(inputUserName.value) ){
        paragraphUserName.innerHTML=messageError8;
        paragraphUserName.style.color="red";
        paragraphUserName.value="";
        aux= false;
    }



    //validando correo
    var inputEmail=document.getElementById("student_email");
    var paragraphEmail=document.getElementById("paragraph_email");
    var messageErrorEmail="Email no valido";
    if (fieldEmpty(inputEmail.value)){
        paragraphEmail.innerHTML="debe llenar este campo";
        paragraphEmail.style.color="red";
        inputEmail.value="";
        aux= false;
    }else if ( validateEmail(inputEmail.value) ){
        paragraphEmail.innerHTML=messageErrorEmail;
        paragraphEmail.style.color="red";
        inputEmail.value="";
        aux= false;
    }

    //confirmando que password sean iguales
    var inputPassword=document.getElementById("student_password");
    var paragraphPassword=document.getElementById("paragraph_password");

    var inputPasswordConfirmation=document.getElementById("student_password_confirmation");
    var paragraphPasswordConfirmation=document.getElementById("paragraph_password_confirmation");

    var messageError9="su password debe contener mas de 5 caracteres";
    var messageError10="las password no son iguales";

    if (fieldEmpty(inputPassword.value)) {
        paragraphPassword.innerHTML = "debe llenar este campo";
        paragraphPassword.style.color = "red";
        inputPassword.value = "";
        aux = false;
    }else if (inputPassword.value.length<3 || inputPasswordConfirmation.value.length<3  ){
        paragraphPassword.innerHTML=messageError9;
        paragraphPassword.style.color="red";
        inputPassword.value="";
        inputPasswordConfirmation.value="";
        aux = false;
    } else if ( inputPassword.value != inputPasswordConfirmation.value  ){
        paragraphPasswordConfirmation.innerHTML=messageError10;
        paragraphPasswordConfirmation.style.color="red";
        inputPassword.value="";
        inputPasswordConfirmation.value="";
        aux = false;
    }


    if (fieldEmpty(inputPasswordConfirmation.value)) {
        paragraphPasswordConfirmation.innerHTML = "debe llenar este campo";
        paragraphPasswordConfirmation.style.color = "red";
        inputPasswordConfirmation.value = "";
        aux = false;
    }

    $('input[type="submit"]').removeAttr('disabled');
    return aux

};
