function calc(){
	
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


	var condominio = document.getElementById('condominios').value;
	var prima = document.getElementById('primas').value;

	//Condominios
	if (condominio === 'cond1' && prima === 'prima1'){
		var resultado = precio1*prima1;
		document.getElementById('result').value = Intl.NumberFormat("en-IN", {style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol'}).format(resultado.toFixed(2));
	}

	if (condominio === 'cond2' && prima === 'prima2'){
		var resultado = precio2*prima2;
		document.getElementById('result').value = Intl.NumberFormat("en-IN", {style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol'}).format(resultado.toFixed(2));
	}

	if (condominio === 'cond3' && prima === 'prima3'){
		var resultado = precio3*prima3;
		document.getElementById('result').value = Intl.NumberFormat("en-IN", {style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol'}).format(resultado.toFixed(2));
	}

	if (condominio === 'cond4' && prima === 'prima4'){
		var resultado = precio4*prima4;
		document.getElementById('result').value = Intl.NumberFormat("en-IN", {style: "currency", currency: "USD", currencyDisplay: 'narrowSymbol'}).format(resultado.toFixed(2));
	}

	console.log(prima);
	console.log(condominio);

}