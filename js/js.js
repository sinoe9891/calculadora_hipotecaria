function calc() {

	//Precios
	var precio1 = 87900.00;
	var precio2 = 96000.00;
	var precio3 = 97000.00;
	var precio4 = 99500.00

	//Prima
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
			//Prima
			var resultadoPrima = precio1 * prima1;
			//calculo de cuota
			var intereses = tasas1/12;
			var resultado = precio1 - (precio1 * prima1);
			var otro = intereses * resultado;
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			var totalPagar =  otro / calculo2;
			//Prima
			document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));
			//Monto a Financiar
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}

		if (prima === 'prima2') {
			//Prima
			var resultadoPrima = precio1 * prima2;
			//calculo de cuota
			var intereses = tasas1/12;
			var resultado = precio1 - (precio1 * prima2);
			var otro = intereses * resultado;
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			var totalPagar =  otro / calculo2;
			//Prima
			document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));
			//Monto a Financiar
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}

		if (prima === 'prima3') {
			//Prima
			var resultadoPrima = precio1 * prima3;
			//calculo de cuota
			var intereses = tasas1/12;
			var resultado = precio1 - (precio1 * prima3);
			var otro = intereses * resultado;
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			var totalPagar =  otro / calculo2;
			//Prima
			document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));
			//Monto a Financiar
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}

		if (prima === 'prima4') {
			//Prima
			var resultadoPrima = precio1 * prima4;
			//calculo de cuota
			var intereses = tasas1/12;
			var resultado = precio1 - (precio1 * prima4);
			var otro = intereses * resultado;
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			var totalPagar =  otro / calculo2;
			//Prima
			document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));
			//Monto a Financiar
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}
	}

	//Condominio 2
	if (condominio === 'cond2') {

		if (prima === 'prima1') {
			//Prima
			var resultadoPrima = precio2 * prima1;
			console.log(resultadoPrima);
			//calculo de cuota
			var intereses = tasas2/12;
			var resultado = precio2 - (precio2 * prima1);
			var otro = intereses * resultado;
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			var totalPagar =  otro / calculo2;
			//Prima
			document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));
			//Monto a Financiar
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}

		if (prima === 'prima2') {
			//Prima
			var resultadoPrima = precio2 * prima2;
			console.log(resultadoPrima);
			//calculo de cuota
			var intereses = tasas2/12;
			var resultado = precio2 - (precio2 * prima2);
			var otro = intereses * resultado;
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			var totalPagar =  otro / calculo2;
			//Prima
			document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));
			//Monto a Financiar
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}

		if (prima === 'prima3') {
			//Prima
			var resultadoPrima = precio2 * prima3;
			console.log(resultadoPrima);
			//calculo de cuota
			var intereses = tasas2/12;
			var resultado = precio2 - (precio2 * prima3);
			var otro = intereses * resultado;
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			var totalPagar =  otro / calculo2;
			//Prima
			document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));
			//Monto a Financiar
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}

		if (prima === 'prima4') {
			//Prima
			var resultadoPrima = precio2 * prima4;
			console.log(resultadoPrima);
			//calculo de cuota
			var intereses = tasas2/12;
			var resultado = precio2 - (precio2 * prima4);
			var otro = intereses * resultado;
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			var totalPagar =  otro / calculo2;
			//Prima
			document.getElementById('resultadoPrima').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultadoPrima.toFixed(2));
			//Monto a Financiar
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}
	}

	//Condominio 3
	if (condominio === 'cond3') {

		if (prima === 'prima1') {
			var resultado = precio3 * prima1;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima2') {
			var resultado = precio3 * prima2;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima3') {
			var resultado = precio3 * prima3;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima4') {
			var resultado = precio3 * prima4;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}
	}

	//Condominio 4
	if (condominio === 'cond4') {

		if (prima === 'prima1') {
			var resultado = precio4 * prima1;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima2') {
			var resultado = precio4 * prima2;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima3') {
			var resultado = precio4 * prima3;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima4') {
			var resultado = precio4 * prima4;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}
	}

}