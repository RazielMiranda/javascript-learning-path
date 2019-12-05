//Rest operator serve para quando voce deseja
//Incrementar os argumentos  de uma função sem saber
//Quantos argumentos ela vai ter e deseja que ocorra
//o comportamento esperado da função independente dos paramentros que
//foi passado

//Maneira clássica de fazer isso:
function sum(a,b){
	value = 0;

	for (var i = 0; i < arguments.length; i++) {
		value += arguments[i];
	}

	return value;
}

console.log(sum(1,2,3,4,5));


//Com ECMA 6
//Ele simula o comportamento do arguments mas já trazendo em forma de vetor
//podendo ser usado os metodos de vetor para manipular os paramentros.
//enquanto o arguments retorna os argumento da função em forma
//de objeto.

function sum(...restOperator){
	console.log(restOperator);
	//console.log(arguments);
	//return vetorArgumento.pop();
	//return restOperator;
}

sum(1,2,3,4,5);

//Rest operators e arrow functions parte 1:
//Com arrow functions o arguments não funciona, mas o restoperator sim
var sum = (...restOperator) => {
	console.log(restOperator);
};

console.log(sum(1,2,3,4,5));


//Rest operators e arrow functions parte 2:
//ele também funciona com argumentos definidos e usa o restante como restoperator
//a parte definida sem o rest operator retorna como os valores passados normal
//a parte do rest operator retorna como array.
var sum = (a,b,...restOperator) => {
	console.log(a,b,restOperator);
};

console.log(sum(1,2,3,4,5));


//O Spread operator ele serve para o return da função,
//Ele pega o argumento de uma outra função trasnforma tudo em uma lista
//e pode ser usado como argmentos no return de outra função.
//também pode ser usado com: Strings, arrays, objects literais e objectos iteraveis

//Forma clássica de passar todos os retornos de uma função para a outra função
var multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

/*
Antes uma atenção para entender o que acontece na função multiply
vamos conhecer o metodo reduce:

O método reduce()executa uma função reducer (provida por você)
 para cada membro do array, resultando num único valor de retorno.

*/

var sum = (...restOperator) => {
	return multiply.apply(undefined, restOperator);
}
alert(sum(10,10));




//Com ECMA 6 usando spread operator:

var multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

//Não precisa mais usar o metodo apply
var sum = (...restOperator) => {
	return multiply(...spreadOperator);
}
alert(sum(10,10));


//Spread operator funciona com: string, arrays, objetos:



var nome = 'Raziel';
function logArgs(...args){
	console.log(args);
}
//retorna a string em forma de array;
logArgs(...nome);



//retorna o array literal 
var arr = [1,2,3];
function logArgs(...args){
	console.log(args);
}
logArgs(...arr);




//definir o parametro do array também.
var arr = [1,2,3];
function logArgs(a,b){
	console.log(a,b);
}
logArgs(...arr);

//Concatena o arr onde colocou o spread operator
arr = [1,1,1];
arr2 = [2,2,2, ...arr];

//Tambem funciona com objetos literais


var obj = {
	test: 123
}

var obj2 = {
	nome: 'raziel'
}





































