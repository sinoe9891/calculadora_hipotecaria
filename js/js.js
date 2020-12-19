function calc() {
	let condominios = {
	  cond1: {
		precio: 87900.0,
		tasa: 0.105,
	  },
	  cond2: {
		precio: 96000.0,
		tasa: 0.11,
	  },
	  cond3: {
		precio: 97000.0,
		tasa: 0.115,
	  },
	  cond4: {
		precio: 99500.0,
		tasa: 0.12,
	  },
	};
	
	let primas = {
	  prima1: 0.1,
	  prima2: 0.15,
	  prima3: 0.2,
	  prima4: 0.25,
	};
  
	var condominio = document.getElementById("condominios").value;
	var prima = document.getElementById("primas").value;
  
	//Condominios
	const infoCondo = condominios[condominio];
	const primaSeleccionada = primas[prima];
	functionAll(infoCondo.precio, primaSeleccionada, infoCondo.tasa);
	
   //Funciones
	function calculoPrima(precio, prima) {
	  var resultadoPrima = precio * prima;
  
	  prima = document.getElementById(
		"resultadoPrima"
	  ).value = Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "USD",
		currencyDisplay: "narrowSymbol",
	  }).format(resultadoPrima.toFixed(2));
  
	  return prima;
	}
  
	function montoFinanciar(precio, prima) {
	  var resultado = precio - precio * prima;
  
	  montoPrestado = document.getElementById(
		"result"
	  ).value = Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "USD",
		currencyDisplay: "narrowSymbol",
	  }).format(resultado.toFixed(2));
  
	  return montoPrestado;
	}
  
	function calculoCuota(tasa, precio, prima) {
	  var intereses = tasa / 12;
	  var resultado = precio - precio * prima;
	  var otro = intereses * resultado;
	  var calculo1 = 1 + intereses;
	  var calculo2 = 1 - Math.pow(calculo1, -240);
	  var totalPagar = otro / calculo2;
  
	  imprimirTotalPagar = document.getElementById(
		"cuota"
	  ).value = Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "USD",
		currencyDisplay: "narrowSymbol",
	  }).format(totalPagar.toFixed(2));
	  porcentajeAnual = document.getElementById("porcAnual").innerHTML =
		tasa * 100 + "%";
  
	  return imprimirTotalPagar;
	}
  
	function functionAll(precio, prima, tasa) {
	  calculoPrima(precio, prima);
	  montoFinanciar(precio, prima);
	  calculoCuota(tasa, precio, prima);
	}
  }
  