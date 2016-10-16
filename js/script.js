var canvas=document.getElementById("game");
var ctx= canvas.getContext("2d");
var enemigos= ["img/poke1.jpg","img/poke2.jpg", "img/poke3.jpg"];
function init(){
	var nave= document.getElementById("nave");
	var nave2= document.getElementById("nave2");
	var nave3= document.getElementById("nave3");
	var chk1= document.getElementById("chk1");
	var chk2= document.getElementById("chk2");
	var chk3= document.getElementById("chk3");
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
canvas.addEventListener("click",cargarImagen,false);
function cargarImagen(){
	var aleatorio;
	//var chk1= document.getElementById("chk1");
	//var chk2= document.getElementById("chk2");
	//var chk3= document.getElementById("chk3");
	if(chk1.checked==true){
		var image= new Image();
		image.src= "img/poke1.jpg";
		image.onload= function(){
			ctx.drawImage(image, 250,180,100,100);
		}

	}
	if(chk2.checked==true){
		var image= new Image();
		image.src= "img/poke2.jpg";
		image.onload= function(){
			ctx.drawImage(image, 250,180,100,100);
		}

	}
	if(chk3.checked==true){
		var image= new Image();
		image.src= "img/poke3.jpg";
		image.onload= function(){
			ctx.drawImage(image, 250,180,100,100);
		}

	}
	aleatorio= Math.floor(Math.random()*3);
	dibujarEnemigo(aleatorio);
}
function dibujarEnemigo(num){
	var enemigo= new Image();
	enemigo.src = enemigos[num];
	enemigo.onload= function(){
		ctx.drawImage(enemigo, 250,10,100,100);
	}
}

if(window.addEventListener){
	window.addEventListener("load", init, false);
}
else if(window.attachEvent){
	window.attachEvent("onload", init);
}