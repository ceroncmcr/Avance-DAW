//insertamos los items en el localStorage
localStorage.setItem("texto1", "Pokemon Royale es un videojuego"+
	" de cartas en el que empezaras con un cierto número de cartas,"+
	" esas cartas poseen a los pokemon que podrás liberar en arena de"+
	" duelo, podrás lanzar cartas mientras poseas un número suficiente"+
	" de bayas, tu número de bayas aumentara cada cierto periodo de tiempo y también al combatir.");

localStorage.setItem("texto2", "Mientras ganas partidas aumentaras"+
	" tu nivel y tus pokemon igual lo que les permitirá poder evolucionar,"+
	" además podrás desbloquear cartas con pokemon más poderosos y pócimas"+
	" que harán que tus pokemon sanen o tengan mayor fuerza de ataque.");
//funcion que se ejecuta cuando la pagina ha terminado de cargar
function init(){
	//propiedad innerHTML para poder insertar los items del local storage en el nodo texto de los id p1 y p2
	document.getElementById("p1").innerHTML= localStorage.getItem("texto1");
	document.getElementById("p2").innerHTML= localStorage.getItem("texto2");
}
//evento que courre cuando la pagina se ha cargado
if(window.addEventListener){
	window.addEventListener("load", init,false);
}