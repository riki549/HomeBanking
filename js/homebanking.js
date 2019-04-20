//Declaración de variables
var limiteExtraccion = 1500;
var saldoCuenta = 3800;
var nombreUsuario = "Jonathan David Tronconi";
var telefono = 425;
var internet = 570;
var luz = 210;
var agua = 350;
var cuentaUno = 1234567;
var cuentaDos = 7654321;
var codigoSeguridad = 2211;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function restaDeExtraccion(ingresoDeExtraccion){
	var totalResta = saldoCuenta -= ingresoDeExtraccion;
	return totalResta;
}

function SumaDeDeposito(dineroDepositado){
	var totalSuma = saldoCuenta += dineroDepositado;
	return totalSuma;
}

function transferencia(valor){
	var totalRestaDos = saldoCuenta -= valor;
	return totalRestaDos;
}

function cambiarLimiteDeExtraccion() {
	
	var valor = parseInt(prompt("Introduzca su nuevo LIMITE DE EXTRACCION:"));
	var mensajeExtraccion = "";
	var limiteAnterior = limiteExtraccion;
		limiteExtraccion = valor;
		mensajeExtraccion = "\nOperacion exitosa. Has cambiado tu limite de extracción." 
		+ "\nLimite de extracción anterior: " + limiteAnterior + "\nNuevo limite de extracción: " + limiteExtraccion;
			alert(mensajeExtraccion);
			actualizarLimiteEnPantalla();
}

function extraerDinero() {
	
	var ingresoDeExtraccion = parseInt(prompt("Ingrese la extracción que desea realizar:"));
	var mensajeResta = "";
	if((saldoCuenta >= ingresoDeExtraccion)&&(ingresoDeExtraccion <= limiteExtraccion)){
		var saldoAnterior = saldoCuenta;
		mensajeResta = "Saldo anterior: " + saldoAnterior + "\nDinero extraido: " + ingresoDeExtraccion 
		+ "\nSaldo actual: " + restaDeExtraccion(ingresoDeExtraccion);
		alert(mensajeResta);
		actualizarSaldoEnPantalla();
	} else {
		if(saldoCuenta < ingresoDeExtraccion){
			alert("No hay suficiente saldo, ingrese un monto menor.");
			return;
		}

		if(ingresoDeExtraccion > limiteExtraccion){
			alert("Excede su limite de extracción. Seleccione un monto menor.");
			return;
		}
	}
}

function depositarDinero() {
	
	var dineroDepositado = parseInt(prompt("Introduzca el dinero que va a depositar:"));
	var mensajeSuma = "";	
	if (!isNaN(dineroDepositado)) {
		var saldoAnterior = saldoCuenta;
		saldoCuenta + dineroDepositado;
		mensajeSuma = "Operación exitosa." + "\nHas despositado: " + dineroDepositado + 
		"\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + SumaDeDeposito(dineroDepositado);
		alert(mensajeSuma);
		actualizarSaldoEnPantalla();
	}else{
		alert("Deposito erroneo. Intente nuevamente");
	}
}

function pagarServicio() {
	
	var valor = parseInt(prompt("Ingrese el número que corresponda con el servicio que desea pagar: \n1-Agua\n2-Luz\n3-Internet\n4-Telefono"));

	switch (valor) { 
	   	
	   	case 1:

	 		var saldoAnterior = saldoCuenta;
	   		var mensajeAgua = "";
	  		if ((saldoCuenta >= agua) > 0){
	   			saldoCuenta -= agua;
	   			mensajeAgua = "\nOperación exitosa. Has pagado el servicio de AGUA." + "\nSaldo anterior: " 
	   			+ saldoAnterior + "\nDinero descontado: " + agua + "\nSaldo actual: " + saldoCuenta;
				alert(mensajeAgua);
				actualizarSaldoEnPantalla();
			}
			else{
				alert("No posee saldo suficiente para abonar el servicio.");
			}
		break;
		
		case 2:

			var saldoAnterior = saldoCuenta;
			var mensajeLuz = "";
			if ((saldoCuenta >= luz) > 0){
			   	saldoCuenta -= luz;
				mensajeLuz = "\nOperación exitosa. Has pagado el servicio de LUZ." + "\nSaldo anterior: " 
				+ saldoAnterior + "\nDinero descontado: " + luz + "\nSaldo actual: " + saldoCuenta;
				alert(mensajeLuz);
				actualizarSaldoEnPantalla();
			}
			else{
				alert("No posee saldo suficiente para abonar el servicio.");
			}
		break;
		
		case 3:

			var saldoAnterior = saldoCuenta;
		   	var mensajeInternet = "";
			if ((saldoCuenta >= internet) > 0){
			   	saldoCuenta -= internet;
				mensajeInternet = "\nOperación exitosa. Has pagado el servicio de INTERNET." + "\nSaldo anterior: " 
				+ saldoAnterior + "\nDinero descontado: " + internet + "\nSaldo actual: " + saldoCuenta;
				alert(mensajeInternet);
			   	actualizarSaldoEnPantalla();
			}
			else{
				alert("No posee saldo suficiente para abonar el servicio.");
			}
		break;
		
		case 4:

			var saldoAnterior = saldoCuenta;
			var mensajeTelefono = "";
			if ((saldoCuenta >= telefono) > 0){
		   		saldoCuenta -= telefono;
				mensajeTelefono = "\nOperación exitosa. Has pagado el servicio de TELEFONO." + "\nSaldo anterior: " 
				+ saldoAnterior + "\nDinero descontado: " + telefono + "\nSaldo actual: " + saldoCuenta;
				alert(mensajeTelefono);
				actualizarSaldoEnPantalla();
			}
			else{
				alert("No posee saldo suficiente para abonar el servicio.");
			}
		break;
		
		default:
		   	alert("No existe el servicio seleccionado. Reintente nuevamente."); 
		}
}

function transferirDinero() {
	
	var valor = parseInt(prompt("Digite el monto que desea transferir:"));
	var mensajeDeposito = "";
	if ((saldoCuenta >= valor) > 0){
		var valorDos = parseInt(prompt("Ingrese cuenta amiga a la que desea transferir:"));
			if(valorDos == cuentaUno){
				var saldoAnterior = saldoCuenta;
				saldoCuenta - valor;
				mensajeDeposito = "Operación exitosa. Has transferido a CUENTA AMIGA UNO" + "\nHas transferido: " + valor + 
				"\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + transferencia(valor);
				alert(mensajeDeposito);
				actualizarSaldoEnPantalla();
			}
			else if(valorDos == cuentaDos){
			 	var saldoAnterior = saldoCuenta;
				saldoCuenta - valor;
				mensajeDeposito = "Operación exitosa. Has transferido a CUENTA AMIGA DOS" + "\nHas transferido: " + valor + 
				"\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + transferencia(valor);
				alert(mensajeDeposito);
				actualizarSaldoEnPantalla();
			}
			else{
				alert("ERROR. Solo se puede transferir a cuenta amiga.");
			}
	}
	else{
		alert("No posee dinero suficiente para realizar trransferencia. Seleccione un monto menor.");
	}
}

function iniciarSesion() {

	var clave = parseInt(prompt("Benvenido/a. Introduzca su clave para poder operar HOMEBANKING."));
	if(clave == codigoSeguridad){
		alert("Bienvenido/a Jonathan David Tronconi, ya puede utilizar HOMEBANKING.");
	}
	else{
		saldoCuenta = 0;
		alert("Codigo ingresado incorrecto. Su dinero ha sido retenido por cuestiones de seguridad.");
			actualizarSaldoEnPantalla();
	}
		cargarNombreEnPantalla();

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}