function calc() {

	//Precios
	var precio1 = 87900.00;
	var precio2 = 96000.00;
	var precio3 = 97000.00;
	var precio4 = 99500.0
	var prima1 = 0.10;
	var prima2 = 0.15;
	var prima3 = 0.20;
	var prima4 = 0.25;

	//Tasas
	var tasas1 = 0.105;
	var tasas2 = 0.110;
	var tasas3 = 0.115;
	var tasas4 = 0.120;

	var condominio = document.getElementById('condominios').value;
	var prima = document.getElementById('primas').value;

	//Condominios

	//Condominio 1
	if (condominio === 'cond1') {

		if (prima === 'prima1') {
			functionAll(precio1, prima1, tasas1)
		}

		if (prima === 'prima2') {
			functionAll(precio1, prima2, tasas1)
		}

		if (prima === 'prima3') {
			functionAll(precio1, prima3, tasas1)
		}

		if (prima === 'prima4') {
			functionAll(precio1, prima4, tasas1)
		}
	}

	//Condominio 2
	if (condominio === 'cond2') {

		if (prima === 'prima1') {
			functionAll(precio2, prima1, tasas2)
		}

		if (prima === 'prima2') {
			functionAll(precio2, prima2, tasas2)
		}

		if (prima === 'prima3') {
			functionAll(precio2, prima3, tasas2)
		}

		if (prima === 'prima4') {
			functionAll(precio2, prima4, tasas2)
		}
	}

	//Condominio 3
	if (condominio === 'cond3') {

		if (prima === 'prima1') {
			functionAll(precio3, prima1, tasas3)
		}

		if (prima === 'prima2') {
			functionAll(precio3, prima2, tasas3)
		}

		if (prima === 'prima3') {
			functionAll(precio3, prima3, tasas3)
		}

		if (prima === 'prima4') {
			functionAll(precio3, prima4, tasas3)
		}
	}

	//Condominio 4
	if (condominio === 'cond4') {

		if (prima === 'prima1') {
			functionAll(precio4, prima1, tasas4)
		}

		if (prima === 'prima2') {
			functionAll(precio4, prima2, tasas4)
		}

		if (prima === 'prima3') {
			functionAll(precio4, prima3, tasas4)
		}

		if (prima === 'prima4') {
			functionAll(precio4, prima4, tasas4)
		}
	}

	function calculoPrima(precio, prima){
		var resultadoPrima = precio * prima;

		prima = document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));

		return prima;
	};

	function montoFinanciar(precio, prima){
		var resultado = precio - (precio * prima);

		montoPrestado = document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));

		return montoPrestado;
	};

	function calculoCuota(tasa, precio, prima){
		var intereses = tasa/12;
		var resultado = precio - (precio * prima);
		var otro = intereses * resultado;
		var calculo1 = 1+intereses;
		var calculo2 = 1-Math.pow(calculo1,-240);
		var totalPagar =  otro / calculo2;

		imprimirTotalPagar = document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		porcentajeAnual = document.getElementById('porcAnual').innerHTML = tasa*100 + "%";

		return imprimirTotalPagar;
	};

	function functionAll(precio, prima, tasa){
		calculoPrima(precio, prima);
		montoFinanciar(precio, prima);
		calculoCuota(tasa, precio, prima);
	}
}