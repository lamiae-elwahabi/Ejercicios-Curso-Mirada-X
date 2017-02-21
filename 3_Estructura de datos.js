/*Array o colecciones*/
/*Ejemplo 1: arrays de número y de cadenas*/
var numeros = [1, 2, 3];
var palos = ["c", "d", "p", "t"]
/*Ejemplo 2: añadir elementos a un array*/
var palos = [];
palos[0] = "c";
palos[1] = "d";
/*Ejemplo 3: recorriendo un array*/
var cartas = [10, 3, 5, 7];
var total = 0;
for(var i=0; i<cartas.length; i = i + 1){
	total = total +cartas[i];
}
/*Ejemplo 4: búsqueda en un array*/
var cartas = ["5d", "3t", "2c",
"12c"];
var encontrado = false;
for(var i=0; i<cartas.length; i= i+1){
	if(carta[i] === "1c"){
		encontrado = true;
	}
}
/*Ejempo 5: inserción de valores en un array*/
var cartas = ["5d", "3t", "2c", "12c"];
var resultado = [];
for(var i=0; i<cartas.length; i=i+1){
	resultado[resultado.length] = cartas[i];
	if(cartas[i] === "3t"){
		resultado[resultado.length] = "1c";
	}
}
/*Ejemplo 6 : filtrado de un array*/
var cartas = ["5d", "3t", "2c", "12c"];
var resultado =[];
for(var i=0; i<cartas.length; i=i+1){
	if(cartas[i][1] === "d" || cartas[i][1] === "c"){
		resultado[resultado.length] = cartas[i];
	}
}
