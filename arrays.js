const arr = [1,2,3];

const arr2 = new Array(1,2,3);

const arr3 = Array.of(1,2,3);

//Se criar um array assim, ele cria um array com 10 posições vazias
const arr2 = new Array(10);

const divs = document.querySelectorAll('p');
divs.pop(); //não funciona

const divsArray = Array.from(divs);
divs.pop() // Agora funciona

//Cria uma nova instancia de array a partir 
//de um parametro array-like ou iterable object
//array-like = node list com documentselect e tranforma o node list em um array
//iterable object =  set e map

//adicionando itens em um array na ultima posição
var frutas = ['melçancia', 'mamao'];
frutas.push('banana');
console.log(frutas);

//removendo itens em um array na ultima posição e retornando o que foi removido
frutas.pop();
console.log(frutas);

//adicionando itens em um array na primeira posição
var frutas = ['melçancia', 'mamao'];
frutas.unshift('pera');
console.log(frutas);

//removendo itens em um array na primeira posição e retornando o que foi removido
var frutas = ['melçancia', 'mamao'];
frutas.shift();
console.log(frutas);

//Concatenando dois array, a concat não meche com a estrutura dos array
//na verdade junta so dois e retona um novo array
var salgados = ['kibe', 'coxinha'];
var concatenado = frutas.concat(salgados);
console.log(concatenado);

//fatia o array com o inicio e a final determinado 
//pega essa fatia e cria um novo array
var fatiado = [1,2,3,4,5];
console.log(fatiado);
fatia = fatiado.slice(0,3);
console.log(fatia);

//Adiciona e remove itens especificando a posição
fatiado.splice(
	'posicao',
	'quantos itens quer remover a partir da posicao',
	'item que quer adicionar'
);

//Primeiro parametro é o nome do valor, segundo parametro é o
//indice do vetor 0,1,2 etc, e o terceiro parametro é o nome do array (opcional)
fatiado.forEach((numero, index, fatiado) => console.log(numero, index, fatiado));
fatiado.map((numero,index) => '${index} ---- ${numero}');


//função flat vai juntando um array com o outro dependendo da "profundidade dele"
var dados = ['a','b',['c','d']];
dados.flat(2);

//Executa um map e depois um flat com um de profundidade
fatiado.flatMap((numero,index) => '${index} ---- ${numero}');

//Retorna as chaves ou seja os indices
fatiado.keys();

//Retorna os valores
fatiado.values();

//Retorna as chaves ou seja os indices
fatiado.entries();

//Serve para fazer iterator
fatiado.next();

//Buscando dados no array com base nos valores, seguindo a condição
var buscardados = fatiado.find(value => value > 4);
console.log(buscardados);

//Buscando dados no array com base nos indices, seguindo a condição
var buscardados = fatiado.findIndex(value => value > 0);
console.log(buscardados);

//Trazendo os dados do array que satisfazem a condição e gerando um novo array
var buscardados = fatiado.filter(value => value > 1);
console.log(buscardados);

//Trazendo o indice do primeiro item que satisfaz
var arrayindice = [1,1,2,2,3,4];
var buscardadosindice = arrayindice.indexOf(1);

//Trazendo o ultimo indice do primeiro item que satisfaz
var buscardadosindice = arrayindice.LastindexOf(1);
console.log(buscardados);

//Verifica se no array tem o item 1 e retorna um booleano
var buscardadosindice = arrayindice.includes(1);
console.log(buscardados);

//Verifica se no array tem pelo menos um item que satisfaz a condição e retorna um bool
var buscardadosindice = arrayindice.some(value => value != 7);
console.log(buscardados);

//Verifica se no array todos os items satisfaz a condição e retorna um bool
var buscardadosindice = arrayindice.every(value => value === 7);
console.log(buscardados);

//ordena os itens de um array
var buscardadosindice = arrayindice.sort(value => value);
console.log(buscardados);

//reverter os itens de um array 0,1,3 fica 3,1,0
var buscardadosindice = arrayindice.reverse();

//separa os itens com -
var buscardadosindice = arrayindice.join('-');
console.log(buscardados);

//separa os itens com -
var buscardadosindice = arrayindice.join('-');
console.log(buscardados);