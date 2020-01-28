  
/* 
	Código en JavaScript
	Nome do ficheiro: escripita.js
	Usado: Proxecto 1
*/



var primero = prompt("indica el precio");
primer = parseInt(primero);
document.write(primero + "€" + "</br>");
var segundo = prompt("indica el precio");
segund = parseInt(segundo);
document.write(segundo + "€" + "</br>");
var tercero = prompt("indica el precio");
tercer = parseInt(tercero);
document.write(tercero + "€" + "</br>");
var total = tercer + segund + primer; 
var totalre = Math.round(total );
document.write(totalre + "€");