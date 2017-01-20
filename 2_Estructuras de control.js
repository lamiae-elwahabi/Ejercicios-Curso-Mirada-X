/*Estructuras de selección*/
var carta = '1c'
var valor = carta[0]
var palo = carta[1]
/*Ejemplo 1: if*/
var carta = "3c";
if(carta[1] === "c"){
	console.log("Es un 3 de corazones");
}
/*Ejemplo 2: else*/
var carta = "3c";
if (carta[1] === "c"){
	console.log("Es un 3 de corazones");
} else {
	cosole.log("No es un 3 de corazones");
}
/*Ejemplo 3:anidamiento*/
var carta = "3p";
if (carta[1] === "c"){
	console.log("Es un 3 de corazones");
} else {
	if(carta[1] === "p"){
		console.log("Es un 3 de picas")
	}
}

/*Estructuras de interación(repetición o bucles)*/
/*Ejemplo 1: for*/
for (var i=1; i<= 12; i=i+1){
	console.log(i + "de picas");
}
/*Ejemplo 2: do while*/
var i = 1;
do {
	console.log(i + "de picas");
	i = i + 1;
}while(i<= 12);
