

function animateprogress (id, val){		


	var getRequestAnimationFrame = function () {  
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
			document.getElementById(id).value= i;
			
			i++;
			fpAnimationFrame(animacion);         
		}
										
	}

		fpAnimationFrame(animacion);  
				
}
window.onload = function() { 
		
		animateprogress("vida",100);
		animateprogress("vidaEnemigo",100);	
	} 	
	