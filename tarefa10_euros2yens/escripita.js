  
/* 
	Código en JavaScript
	Nome do ficheiro: escripita.js
	Usado: while

	*/
	function eurosAyenes(eur){
		return(eur * 120);
	}

	function yenesAeuros(yen){
		return(yen / 120);
	}
	var rr;
	rr = true;
	while (rr == true){
		var resposta;
		resposta = prompt("Que has comprado?");

		var pre;
		pre = prompt("Cuanto vale?");
		var valor;
		valor = parseFloat(pre);


		var monedaa;
		moneda = prompt("Que moneda usas?");

		if(moneda == "euros") {
			var ee = eurosAyenes(valor);
			document.write( resposta + "->"  + ee +"¥");
		} else {
			var yy = yenesAeuros(valor);
			document.write( resposta + "->"  + yy +"€");
		}

		rr = confirm("repetimos?");
	}

	alert("chao");