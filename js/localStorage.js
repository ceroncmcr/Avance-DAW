localStorage.setItem("texto1", "Pokemon Royale es "+
		"un videojuego de cartas en el que empezaras con"+
		" un cierto número de cartas, esas cartas poseen"+
		"a los pokemon que podrás liberar en arena de duelo,"+
		" podrás lanzar cartas mientras poseas un número suficiente"+
		" de bayas, tu número de bayas aumentara cada cierto periodo de tiempo y también al combatir.");

localStorage.setItem("texto2", "Mientras ganas partidas aumentaras"+
	" tu nivel y tus pokemon igual lo que les permitirá poder evolucionar,"+
	" además podrás desbloquear cartas con pokemon más poderosos y pócimas"+
	" que harán que tus pokemon sanen o tengan mayor fuerza de ataque.");
function init(){
	document.getElementById("p1").innerHTML= localStorage.getItem("texto1");
	document.getElementById("p2").innerHTML= localStorage.getItem("texto2");

}

if(window.addEventListener){
	window.addEventListener("load", init,false);
}