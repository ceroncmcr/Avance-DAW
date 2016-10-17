//variable de canvas
var canvas=document.getElementById("game");
//variable del contexto de canvas
var ctx= canvas.getContext("2d");
//Objeto JSON con los img de los enemigos
var enemigos= ["img/poke1.jpg","img/squirtle.gif", "img/poke3.jpg"];

//funcion que se ejecuta cuando la pagina ya a terminado de cargar
function init(){
	//se obtiene las cartas de los pokemos con su respectivo checkbox
	var nave= document.getElementById("nave");
	var nave2= document.getElementById("nave2");
	var nave3= document.getElementById("nave3");
	var chk1= document.getElementById("chk1");
	var chk2= document.getElementById("chk2");
	var chk3= document.getElementById("chk3");

//Eventos que ocurren cuando alguna de las cartas se le da click
	nave.addEventListener("click",function(){
		nave.style.opacity= 0.5;
		nave2.style.opacity= 1;
		nave3.style.opacity= 1;
		chk1.checked=true;
		chk2.checked=false;
		chk3.checked=false;
	},false);
	
	nave2.addEventListener("click",function(){
		nave.style.opacity= 1;
		nave2.style.opacity= 0.5;
		nave3.style.opacity= 1;
		chk1.checked=false;
		chk2.checked=true;
		chk3.checked=false;
	},false);
	
	nave3.addEventListener("click",function(){
		nave.style.opacity= 1;
		nave2.style.opacity= 1;
		nave3.style.opacity= 0.5;
		chk1.checked=false;
		chk2.checked=false;
		chk3.checked=true;
	},false);
}
//Evento para insertar las imagenes en el canvas
canvas.addEventListener("click",cargarImagen,false);

//funcion para insertar las imagenes en el canvas
function cargarImagen(){
	//Variables del span
	var equipo=document.getElementById("equipo");
	var rival= document.getElementById("rival");
	//variable para calcular el enemigo aleatoriamente
	var aleatorio;
	//var chk1= document.getElementById("chk1");
	//var chk2= document.getElementById("chk2");
	//var chk3= document.getElementById("chk3");

	//Insertando las imagenes en el canvas
	if(chk1.checked==true){
		var image= new Image();
		image.src= "img/charmander.gif";
		equipo.innerHTML= "Charmander";
		image.onload= function(){
			ctx.drawImage(image, 250,300,100,100);

		}
	}
	if(chk2.checked==true){
		var image= new Image();
		image.src= "img/squirtle.gif";
		equipo.innerHTML= "Squirtle";
		image.onload= function(){
			ctx.drawImage(image, 250,300,100,100);
		}
	}
	if(chk3.checked==true){
		var image= new Image();
		image.src= "img/poke3.jpg";
		equipo.innerHTML= "Boulbasaur";
		image.onload= function(){
			ctx.drawImage(image, 250,300,100,100);
		}
	}
	//calculo del numero aleatorio con el metodo random
	aleatorio= Math.floor(Math.random()*3);
	//Insertando el nombre del pokemon en el span
	if(aleatorio==0){
		rival.innerHTML= "Charmander";
	}
	else if(aleatorio==1){
		rival.innerHTML= "Squirtle";
	}
	else if(aleatorio==2){
		rival.innerHTML= "Boulbasaur";
	}
	
	dibujarEnemigo(aleatorio);//Llamamiento de la funcion para insertar la imagen de los enemigos
}
function dibujarEnemigo(num){
	//variable de tipo image
	var enemigo= new Image();
	//asignandole el sourve a la imagen 
	enemigo.src = enemigos[num];
	//se dibuja la imagen en el canvas
	enemigo.onload= function(){
		ctx.drawImage(enemigo, 250,10,100,100);
	}
}
//Evento que ocurre cuando la pagina se carga
if(window.addEventListener){
	window.addEventListener("load", init, false);
}
else if(window.attachEvent){
	window.attachEvent("onload", init);
}