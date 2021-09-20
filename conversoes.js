function ConverterCParaF() 
{	
	var unidade = document.getElementById("valor");
	var valorUnidade = unidade.value;
	var fahrenheit = (parseFloat(valorUnidade) * 1.8 + 32);
	var resultado = (fahrenheit.toFixed(2) + " °F");
	console.log(fahrenheit.toFixed(2) + " °F");
	
	
	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = (valorUnidade + " °C em Fahrenheit é: " + resultado);
	elementoValorConvertido.innerHTML = valorConvertido;	
}

function ConverterFParaC() 
{	
	var unidade = document.getElementById("valor");
	var valorUnidade = unidade.value;
	var celsius = ((parseFloat(valorUnidade) -32) / 1.8);
	var resultado = (celsius.toFixed(2) + " °C");
	console.log(celsius.toFixed(2) + " °C");	
	
	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = (valorUnidade + " °F em Celsius é: " + resultado);
	elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterCParaK() 
{	
	var unidade = document.getElementById("valor");
	var valorUnidade = unidade.value;
	var kelvin = (parseFloat(valorUnidade) + 273.15) ;
	var resultado = (kelvin.toFixed(2) + " K");
	console.log(kelvin.toFixed(2) + " K");
	
	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = (valorUnidade + " °C em Kelvin é: " + resultado);
	elementoValorConvertido.innerHTML = valorConvertido;
}


function ConverterKParaC()
{
	var unidade = document.getElementById("valor");
	var valorUnidade = unidade.value;
	var celsius = (parseFloat(valorUnidade) - 273.15);
	var resultado = (celsius.toFixed(2) + " °C");
	console.log(celsius.toFixed(2) + " °C");
	
	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = (valorUnidade + " K em Celsius é: " + resultado);
	elementoValorConvertido.innerHTML = valorConvertido;
}


function ConverterFParaK()
{
	var unidade = document.getElementById("valor");
	var valorUnidade = unidade.value;
	var kelvin = ((parseFloat(valorUnidade) - 32) * 5/9 + 273.15);
	var resultado = (kelvin.toFixed(2) + " K");
	console.log(kelvin.toFixed(2) + " K");
	
	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = (valorUnidade + " °F em Kelvin é: " + resultado);
	elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterKParaF()
{
	var unidade = document.getElementById("valor");
	var valorUnidade = unidade.value;
	var fahrenheit = ((parseFloat(valorUnidade) - 273.15) * 1.8 + 32);
	var resultado = (fahrenheit.toFixed(2) + " °F");
	console.log(fahrenheit.toFixed(2) + " °F");
	
	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = (valorUnidade + " K em Fahrenheit é: " + resultado);
	elementoValorConvertido.innerHTML = valorConvertido;
}
