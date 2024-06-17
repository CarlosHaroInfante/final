/**
 * 
 */

 //Declaración de un objeto, este será los datos a introducir para abrir la caja fuerte
/*var dados = {
	pr: 1,
	sc: 2,
	ter: 3
}
//Declaración de un objeto, aquí se guardaran los valores dados por el usuario
var user = {
	pr: 0,
	sc: 0,
	ter: 0
}
//Declaración de un array, en él aparecerá lo que se desea guardar en la caja fuerte (texto y alumnos) y el número de intentos para abrirla
var secreto = ["texto", "usuarios", 3];
//creación de la función con la que se va a trabajar
function caja() {
	//petición de valores
	alert("Introduce los valores correctos para continuar.");
	user.pr = prompt("Primer valor:");
	user.sc = prompt("Segundo valor:");
	user.ter = prompt("Tercer valor:");
	//comparación, si los datos recibidos son iguales a los deseados se accede dentro
	if (user.pr == dados.pr && user.sc == dados.sc && user.ter == dados.ter) {
		//reseteo de los intentos realizados
		secreto[2] = 3;
		//escritura en el HTML, en el ID: p2
		document.getElementById("p2").innerHTML = (secreto[0] + '<br>' + secreto[1] + '<br>' + '<button onclick="valores()">Valores</button><button onclick="change()">cambiar código</button>');
	}
	else {
		//bajamos los intentos
		secreto[2]--;
		//si hemos llegado a perder todos los intentos
		if (secreto[2] <= 0) {
			//document.write borra toda la página si es lanzada en una función
			document.write('<h1>Bloqueada</h1>');
		}
		else {
			//escribimos en el ID: p2 que se ha producido un Fallo


document.getElementById("p2").innerHTML = ('<h1>Fallaste</h1>' + secreto[2]);
		}


	}
}
//Para mostrar los valores
function valores() {
	console.log("primero " + dados.pr);
	console.log("segundo " + dados.sc);
	console.log("tercero " + dados.ter);
}
//para cambiar los valores
function change() {
	dados.pr = prompt("Nuevo primer valor:");
	dados.sc = prompt("Nuevo segundo valor:");
	dados.ter = prompt("Nuevo tercero valor:");
	alert("Valores cambiados satisfactoriamente");
	document.getElementById("p2").innerHTML = (' ');
}*/


const baseDeDatos = [["Juanito", 7], ["Pepe", 8], ["Juan", 5], ["Manuel", 10], ["Alberto", 4], ["Igor", 2]];
const ruta = document.getElementById("base");
escritura(baseDeDatos)
let baseFiltrada = baseDeDatos.concat()
function escritura(nombre) {
	ruta.innerHTML = "";
	nombre.forEach((valor) => ruta.innerHTML += (valor + "<br>"))
}
/*ordenar*/
function alfabetico() {
	/*esto se hace para tener una copia de baseDeDatos sin que sean el mismo*/
	baseFiltrada = (baseFiltrada.concat())
	baseFiltrada.sort((a, b) => {
		/*se puede comparar string de esta manera*/
		if (a[0] > b[0]) {
			return 1
		}
		else
			return -1
	})
	escritura(baseFiltrada)
}
function notas() {
	baseFiltrada = (baseFiltrada.concat())
	baseFiltrada.sort((a, b) => {
		if (a[1] < b[1]) {
			return 1
		}
		else
			return -1
	})
	escritura(baseFiltrada)
}
function todos (){
	baseFiltrada = baseDeDatos.concat();
	escritura(baseFiltrada)
}
/*si no se usa sort siempre se puede hacer una unión de varios modos conocidos previamente*/
function nota() {
	baseFiltrada = (baseDeDatos.concat()).fill([0, 0])
	let base = (baseDeDatos.concat()).fill(-1)
	for (i = 0; i < baseDeDatos.length; i++) {
		baseDeDatos.forEach((aux, index) => {
			if (!base.some((numero) => numero == index))
				if (baseFiltrada[i][1] < aux[1]) {
					baseFiltrada[i] = aux
					base[i] = index
				}
		})
	}
	escritura(baseFiltrada)
}
/*filtrar*/
function filNota(valor) {
	baseFiltrada = baseDeDatos.filter((numero) => {
		if (valor == 0) {
			if (numero[1] < 5) {
				return numero
			}
		}
		else {
			if (numero[1] >= 5) {
				return numero
			}
		}
	})
	escritura(baseFiltrada)
}
/*otra manera */
function suspensos() {
	baseFiltrada = baseDeDatos.filter((numero) => {
		if (numero[1] < 5) {
			return numero
		}
	})
	escritura(baseFiltrada)
}

