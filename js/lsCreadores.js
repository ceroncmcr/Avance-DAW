localStorage.setItem("texto1", "Cesar Mauricio Ceron Rodriguez");
localStorage.setItem("texto2", "Carnet: CR160412<br>Carrera: Tecnico en Computacion");
localStorage.setItem("texto3", "Ronal Antonio Ramos Barahona");
localStorage.setItem("texto4", "Carnet: RB160178<br>Carrera: Tecnico en Computacion");
localStorage.setItem("texto5", "Edwin Alfredo Bonilla Hernandez");
localStorage.setItem("texto6", "Carnet: BH160107<br>Carrera: Tecnico en Computacion");
localStorage.setItem("texto7", "Marcos Alfredo Duran Gómez ");
localStorage.setItem("texto8", "Carnet: DG160870<br>Carrera: Tecnico en Computacion");
localStorage.setItem("texto9", "Christian Ergardo Hernandez Rivera");
localStorage.setItem("texto0", "Carnet: HR160372<br>Carrera: Tecnico en Computacion");
function init(){
	document.getElementById("p1").innerHTML= localStorage.getItem("texto1");
	document.getElementById("p2").innerHTML= localStorage.getItem("texto2");
	document.getElementById("p3").innerHTML= localStorage.getItem("texto3");
	document.getElementById("p4").innerHTML= localStorage.getItem("texto4");
	document.getElementById("p5").innerHTML= localStorage.getItem("texto5");
	document.getElementById("p6").innerHTML= localStorage.getItem("texto6");
	document.getElementById("p7").innerHTML= localStorage.getItem("texto7");
	document.getElementById("p8").innerHTML= localStorage.getItem("texto8");
	document.getElementById("p9").innerHTML= localStorage.getItem("texto9");
	document.getElementById("p0").innerHTML= localStorage.getItem("texto0");
}

if(window.addEventListener){
	window.addEventListener("load", init,false);
}