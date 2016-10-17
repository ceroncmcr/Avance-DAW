

function animateprogress (id, val){		


	var getRequestAnimationFrame = function () {  //getRequestAnimationFrame para tratar de la misma compatibilidad con los navegadores
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||   
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback ){
			window.setTimeout(100);
		};
		
	};
	
	var fpAnimationFrame = getRequestAnimationFrame();   
	var i = 0;
	var animacion = function () {
			
	if (i<=val) 
		{
			//incremento el valor de la barra 
			document.getElementById(id).value= i;
			//incremento el porcentaje
			i++;
			fpAnimationFrame(animacion);         
		}
										
	}

		fpAnimationFrame(animacion);  //Lamo la funcion animation
				
}
window.onload = function() { 
		
		animateprogress("vida",100);
		animateprogress("vidaEnemigo",100);	
	} 	
	