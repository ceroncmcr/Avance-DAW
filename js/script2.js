//variable de canvas
var canvas=$("#game");
//variable del contexto de canvas
var ctx= canvas[0].getContext("2d");
//Objeto JSON con los img de los enemigos
var enemigos= ["img/poke1.jpg","img/squirtle.gif", "img/poke3.jpg"];
var jimges=["img/pokemons/squirtle/espalda/1.png", "img/pokemons/squirtle/espalda/2.png", "img/pokemons/squirtle/espalda/3.png",
"img/pokemons/squirtle/espalda/4.png", "img/pokemons/squirtle/espalda/5.png" ];

var jimgef=[ "img/pokemons/squirtle/1.png", "img/pokemons/squirtle/2.png", "img/pokemons/squirtle/3.png", "img/pokemons/squirtle/4.png",
"img/pokemons/squirtle/5.png"];

var jenemigo= [jimgef];

//funcion que se ejecuta cuando la pagina ya a terminado de cargar
function init(){
	//se obtiene los checkbox de las cartas de los pokemos 
	var chk1= $("#chk1");
	var chk2= $("#chk2");
	var chk3= $("#chk3");

//Eventos que ocurren cuando alguna de las cartas se le da click
	$("#carta").on("click", function(){
		$("#carta").css("opacity", "0.5");
		$("#carta2").css("opacity", "1");
		$("#carta3").css("opacity", "1");
		chk1.prop("checked", true);
		chk2.prop("checked", false);
		chk3.prop("checked", false)
	});
	
	$("#carta2").on("click", function(){
		$("#carta").css("opacity", "1");
		$("#carta2").css("opacity", "0.5");
		$("#carta3").css("opacity", "1");
		chk1.prop("checked", false);
		chk2.prop("checked", true);
		chk3.prop("checked", false)
	});
	
	$("#carta3").on("click", function(){
		$("#carta").css("opacity", "1");
		$("#carta2").css("opacity", "1");
		$("#carta3").css("opacity", "0.5");
		chk1.prop("checked", false);
		chk2.prop("checked", false);
		chk3.prop("checked", true)
	});
	$("#btn1").on("click", function(){
		alert("Hola");
	});


}
//Evento para insertar las imagenes en el canvas
canvas.on("click",cargarImagen);
//funcion dibular imagen
var i =0;
function caminar(imagen,corx,cory,Twidth,Theigth){
if(i<imagen.length){
	console.log(i);
	img = new Image();
	img.src= imagen[i];
	console.log(img);

ctx.drawImage(img,corx,cory,Twidth,Theigth);
i+=1;
if(i==5){
	i=0;
}
}//fin if
}//fin metodo

var terreno= document.getElementById("poketerreno");
var turno=0;
var asignadoP1=false;
var asignadoP2=false;
//funcion para insertar las imagenes en el canvas
function cargarImagen(){
	
	ctx.drawImage(terreno, 0, 0, 600, 400);
	//Variables del span
	var equipo=$("#equipo");
	var rival= $("#rival");
	//variable para calcular el enemigo aleatoriamente
	var aleatorio;
	
	
	//Insertando las imagenes en el canvas
	if($("#chk1").prop("checked")){
		var image= new Image();
		image.src= "img/squirtle.gif";
		equipo.html("Squirtle");
		image.onload= function(){
			ctx.drawImage(image, 50,550,100,100);
		}
		
	}
	if($("#chk2").prop("checked")){
		console.log(turno );
		if(turno==0){
		caminar(jimges,75,240,160,218);
		turno=1;
		asignadoP1=true;
		}
		else{
		caminar(jimgef,400,75,160,218);
		turno=0;
		asignadoP2=true;
		}
	}
	if($("#chk3").prop("checked")){
		var image= new Image();
		image.src= "img/poke3.jpg";
		equipo.html("Bulbasaur");
		image.onload= function(){
			ctx.drawImage(image, 250,300,100,100);
		}
	}
	//calculo del numero aleatorio con el metodo random
	aleatorio= Math.floor(Math.random()*3);
	//Insertando el nombre del pokemon en el span
	if(aleatorio==0){
		rival.html("Charmander");
	}
	else if(aleatorio==1){
		rival.html("Squirtle");
	}
	else if(aleatorio==2){
		rival.html("Bulbasaur");
	}
	
	dibujarEnemigo(1);//Llamamiento de la funcion para insertar la imagen de los enemigos

	//$("#vidaEnemigo").val(vidaEnemigo);

}
function dibujarEnemigo(num){
	//variable de tipo image
	var enemigo= new Image();
	//asignandole el sourve a la imagen 
	enemigo.src = jenemigo[num];
	//se dibuja la imagen en el canvas
	enemigo.onload= function(){
		ctx.drawImage(enemigo, 250,10,100,100);
	}
}
//Evento que ocurre cuando la pagina se cargar
$(document).ready(init);

$("#btn").on("click", function(){
	if(turno ==1 && asignadoP1==true){
		var vidaEnemigo= $("#vidaEnemigo").val();
	    aleatorio= Math.floor(Math.random()*10);
	    if(vidaEnemigo>0){
		vidaEnemigo -= aleatorio;
		}
		if(vidaEnemigo==0){
			ctx.clearRect(0, 0,  600, 400);
			ctx.fillStyle= "white";
			ctx.font = "bold 50px sans-serif";
			ctx.fillText("You are win P1", 100, 200);
		}
		$("#vidaEnemigo").val(vidaEnemigo);
		
	}
	if(turno==0 && asignadoP2==true){
		var vida= $("#vida").val();
		aleatorio= Math.floor(Math.random()*10);
	    if(vida>0){
		vida -= aleatorio;
		}
		if(vida==0){
			ctx.clearRect(0, 0,  600, 400);
			ctx.fillStyle= "white";
			ctx.font = "bold 50px sans-serif";
			ctx.fillText("You are win P2", 100, 200);
		}
		$("#vida").val(vida);
		
	}
});



//arreglos
var imgSF=new Array();
imgSF[0]=document.getElementById("SF1");
imgSF[1]=document.getElementById("SF2");
imgSF[2]=document.getElementById("SF3");
imgSF[3]=document.getElementById("SF4");
imgSF[4]=document.getElementById("SF5");
imgSF[5]=document.getElementById("SF6");


var imgSE=new Array();
imgSE[0]=document.getElementById("SE1");
imgSE[1]=document.getElementById("SE2");
imgSE[2]=document.getElementById("SE3");
imgSE[3]=document.getElementById("SE4");
imgSE[4]=document.getElementById("SE5");
imgSE[5]=document.getElementById("SE6");

var imgSFA=new Array();
imgSFA[0]=document.getElementById("SFA1");
imgSFA[1]=document.getElementById("SFA2");
imgSFA[2]=document.getElementById("SFA3");
imgSFA[3]=document.getElementById("SFA4");
imgSFA[4]=document.getElementById("SFA5");
imgSFA[5]=document.getElementById("SFA6");

var imgSEA=new Array();
imgSEA[0]=document.getElementById("SEA1");
imgSEA[1]=document.getElementById("SEA2");
imgSEA[2]=document.getElementById("SEA3");
imgSEA[3]=document.getElementById("SEA4");
imgSEA[4]=document.getElementById("SEA5");
imgSEA[5]=document.getElementById("SEA6");


