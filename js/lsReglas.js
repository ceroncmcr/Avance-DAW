localStorage.setItem("texto1", "Reglas del juego: ");

localStorage.setItem("texto2", "- Tiempo máximo 5min<br>"+
	" - Total de energía del entrenador 100%<br>- Total máximo de cartas  comunes 7<br>"+
	" - Máximo de cartas especiales 3<br>- Cartas legendarias 5<br>- Participante mayor de 18 años<br>"+
	" - Para ganar tendrá que derrotar todos los pokemones del oponente y <br>- luego tendrá que ganarle o quitarle la energía a el entrenador rival.");
function init(){
	document.getElementById("p1").innerHTML= localStorage.getItem("texto1");
	document.getElementById("p2").innerHTML= localStorage.getItem("texto2");

}

if(window.addEventListener){
	window.addEventListener("load", init,false);
}