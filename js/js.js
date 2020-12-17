function calc() {

	//Precios
	var precio1 = 87900.00;
	var precio2 = 96000.00;
	var precio3 = 97000.00;
	var precio4 = 99500.00

	//Prima
	var prima1 = 0.105;
	var prima2 = 0.110;
	var prima3 = 0.115;
	var prima4 = 0.120;


	var condominio = document.getElementById('condominios').value;
	var prima = document.getElementById('primas').value;
	var tasa = document.getElementById('tasas').value;

	//Condominios

	//Condominio 1
	if (condominio === 'cond1') {

		if (prima === 'prima1') {
			var intereses = prima1/12;
			console.log("intereses " + intereses);

			var resultado = precio1 - (precio1 * prima1);
			console.log("resultado " + resultado);

			var otro = intereses * resultado;
			console.log("multi " + otro);
			
			var calculo1 = 1+intereses;
			var calculo2 = 1-Math.pow(calculo1,-240);
			console.log(calculo1);
			
			console.log(calculo2);
			var totalPagar =  otro / calculo2;

			//var im2 = Math.pow((1 + im), -(m * n));

			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
			//Cuota
			
			var deuda = precio1-resultado;
			console.log("deuda " + deuda);
		
			var cuota = (intereses * deuda);
			console.log("cuota " + cuota);
			document.getElementById('cuota').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(totalPagar.toFixed(2));
		}

		if (prima === 'prima2') {
			var resultado = precio1 * prima2;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima3') {
			var resultado = precio1 * prima3;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima4') {
			var resultado = precio1 * prima4;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}
	}

	//Condominio 2
	if (condominio === 'cond2') {

		if (prima === 'prima1') {
			var resultado = precio2 * prima1;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima2') {
			var resultado = precio2 * prima2;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima3') {
			var resultado = precio2 * prima3;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
		}

		if (prima === 'prima4') {
			var resultado = precio2 * prima4;
			document.getElementById('result').value = Intl.NumberFormat("en-IN", { style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol' }).format(resultado.toFixed(2));
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



	console.log(prima);
	console.log(condominio);

}