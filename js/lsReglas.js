//insertamos los items en el localStorage
localStorage.setItem("texto1", "Reglas del juego: ");

localStorage.setItem("texto2", "- Tiempo máximo 5min<br>"+
	" - Total de energía del entrenador 100%<br>- Total máximo de cartas  comunes 7<br>"+
	" - Máximo de cartas especiales 3<br>- Cartas legendarias 5<br>- Participante mayor de 18 años<br>"+
	" - Para ganar tendrá que derrotar todos los pokemones del oponente y <br>- luego tendrá que ganarle o quitarle la energía a el entrenador rival.");
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