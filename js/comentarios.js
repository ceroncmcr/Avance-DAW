function comentarios(){
var nombre,email,pais,comentario,boton;
var publicoment;
publicoment={"nombreJSON":"V","emailJSON":"V","paisJSON":"V","comentarioJSON":"V"};//objeto JSON

var getdat= function(){
    //referencia a los imput 
this.nombre=document.getElementById("txtname");
this.email=document.getElementById("txtcorreo");
this.pais=document.getElementById("txtpais");
this.comentario=document.getElementById("txtaconsulta");
var indice=localStorage.length;
//validacion de los campos
var completo=false;
 completo=validar(this.nombre.value,this.email.value,this.pais.value,this.comentario.value);
if(completo==false){return};
//llenar laspropiedades de objeto JSON
publicoment.nombreJSON=this.nombre.value;
this.nombre.value="";

publicoment.emailJSON=this.email.value;
this.email.value="";

publicoment.paisJSON=this.pais.value;
this.pais.value="";

publicoment.comentarioJSON=this.comentario.value;
this.comentario.value="";
console.log(publicoment);
//guardar los datos
localStorage[indice]=JSON.stringify(publicoment);
indice+=1;
console.log(indice);
console.log(localStorage);

//publicar el comentario actual
var publicaractual;
publicaractual="<article class=\"Comentario\">";
publicaractual+="<div class=\"Comentario\"><h3 class=\"Comentario\"><p>Nombre</p><p>Pais</p></h3>";
publicaractual+="<h4 class=\"Comentario\"><p>"+publicoment.nombreJSON+"</p><p>"+publicoment.paisJSON+"</p></h4></div>";
publicaractual+="<p class=\"Comentario\">"+publicoment.comentarioJSON+"</p>";
publicaractual+="</article>";
var seccioncoment=document.getElementsByClassName("comentariosindividual");
seccioncoment[0].innerHTML+=publicaractual;

};//fin funcion obtener datos


function publifromlocal(){
if(localStorage[0]){
var seccioncoment=document.getElementsByClassName("comentariosindividual");
console.log(seccioncoment[0]);
var contenido="";
var recuperarinfo;
for(var i=0;i<localStorage.length;i++){
recuperarinfo=JSON.parse(localStorage[i]);
contenido+="<article class=\"Comentario\">";
contenido+="<div class=\"Comentario\"><h3 class=\"Comentario\"><p>Nombre</p><p>Pais</p></h3>";
contenido+="<h4 class=\"Comentario\"><p>"+recuperarinfo.nombreJSON+"</p><p>"+recuperarinfo.paisJSON+"</p></h4></div>";
contenido+="<p class=\"Comentario\">"+recuperarinfo.comentarioJSON+"</p>";
contenido+="</article>";
}
seccioncoment[0].innerHTML=contenido;
}//fin if
;}//fin funcion publifromlocal
publifromlocal();

function validar(inputnombre,inputemail,inputpais,inputcomentarios){ 
inputnombre=inputnombre.trim();
inputemail=inputemail.trim();
inputpais=inputpais.trim();
inputcomentarios=inputcomentarios.trim();
//para campo de nombre
if(inputnombre==""|| inputnombre==null|| inputnombre.length==0 ||/^\s+|\s+$/.test(inputnombre))
{
    alert("Complete el campo nombre para comentar por favor.");
    return false;
}else if(inputnombre.length>15)
{
alert("El nobre dado es demasiado extenso elije uno mas corto,max 15 caracteres");
return false;
}else if(!isNaN(inputnombre))
{
    alert("Numeros no son permitidos en el campo nombre");
return false;
}
//para campo correo
var exp=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(inputemail==""|| inputemail.length==0|| inputemail==null ||/^\s+|\s+$/.test(inputemail))
{
    alert("Complete el campo E-mail por favor.");
    return false;
}else if(!exp.test(inputemail))
{
    alert("El correo ingresado es invalido, igrese uno correcto");
    return false;
}

//campo de pais es opcional

//campo comentarip
if(inputcomentarios==""||inputcomentarios.length==0||inputcomentarios==null ||/^\s+|\s+$/.test(inputcomentarios))
{
alert("No se a ingresado ningun comnetarios.Este campo es requerido.");
return false;
}else if(inputcomentarios.length>100){

    alert("Solo le son permitidos 100 caracteres");
    return false;
}
}//fin validar

boton=document.getElementById("publicar");
//console.log(boton);
boton.addEventListener("click",getdat,false);


}


if(window.addEventListener){
window.addEventListener("load",comentarios,true);

}else if(window.attachEvent){
window.attachEvent("onload",comentarios);

}