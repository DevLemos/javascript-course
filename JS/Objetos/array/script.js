const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

console.log(dados[2]('Ford'));
console.log(dados[1][2].cor);  // azul

console.log(dados)


const carros = new Array('Corola', 'Mustang', 'Honda');

console.log(carros[1]); // Mustang
console.log(carros[2] = 'Ferrari'); 
console.log(carros[10] = 'Parati');
console.log(carros.length); // 11

const li = document.querySelectorAll('li'); //NodeList
const arrayLi = Array.from(li); //Array

console.log(li);
console.log(arrayLi);

//Criando um array que parece array(NodeList)
const obj = {
    0:'Mustang',
    1:'Palio',
    2: 'Civic',
    3: 'Ferrari',
    length: 4
}

const objArray = Array.from(obj);

console.log(obj);
console.log(objArray);

//Verifica se é um array
let nodeList = document.querySelectorAll('li'); // NodeList
console.log(Array.isArray(nodeList)); // false

nodeList = Array.from(nodeList); // Array
console.log(Array.isArray(nodeList)); // true

// Métodos array
const idades = [,12,35,34,32,25,5,666,65];
idades.sort();
console.log(idades);

idades.unshift(2,10);
console.log(idades)

idades.push(1000);
console.log(idades)

// shift e pop
const marcasCarro = ['VW','Ford', 'Honda', 'Toyota'];
const primeiroElemento = marcasCarro.shift(); 
console.log(primeiroElemento); //VW

const ultimoElemento = marcasCarro.pop();
console.log(ultimoElemento); //Toyota

// Reverse
marcasCarro.push('Fiat');
marcasCarro.reverse();
console.log(marcasCarro); //['Fiat', 'Honda', 'Ford']

// splice
marcasCarro.splice(1,0,'Ferrari','BMW','Volvo');
console.log(marcasCarro); //['Fiat', 'Ferrari', 'BMW', 'Volvo', 'Honda', 'Ford']

marcasCarro.splice(3,3,'Chevrolet');
console.log(marcasCarro); //['Fiat', 'Ferrari', 'BMW', 'Chevrolet']

// copyWithin
const arrayCopiado1 = ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3); // ['Item1', 'Item2', 'Item1', 'Item2']
console.log(arrayCopiado1);
const arrayCopiado2 = ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1); // ['Item1', 'Item2', 'Item3', 'Item1']  
console.log(arrayCopiado2);

// fill
const preencheArray1 = ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana'); // ['Banana', 'Banana', 'Banana', 'Banana']
console.log(preencheArray1);
const preencheArray2 =['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2); // ['Item1', 'Item2', 'Banana', 'Banana']
console.log(preencheArray2);
const preencheArray3 =['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3); // ['Item1', 'Banana', 'Banana', 'Item4']
console.log(preencheArray3);

// concat
const transporte1 = ['Ônibus', 'Avião'];
const transporte2 = ['Carro','Moto'];
const transportes = transporte1.concat(transporte2);
console.log(transportes); //['Ônibus', 'Avião', 'Carro', 'Moto']

const maisTransportes = [].concat(transporte1,transporte2,'Barco','Van');
console.log(maisTransportes); // ['Ônibus', 'Avião', 'Carro', 'Moto', 'Barco', 'Van']

// Includes, IndexOf e lastIndexOf
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('css'));  // true
console.log(linguagens.includes('ruby')); // false
console.log(linguagens.indexOf('python')); // 4
console.log(linguagens.indexOf('js')); // 2
console.log(linguagens.lastIndexOf('js')); // 5

// Join
console.log(linguagens.join()); // 'html,css,js,php,python'
console.log(linguagens.join(' '));  // 'html css js php python'
console.log(linguagens.join('-_-')); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
console.log(htmlString = htmlString.split('h2')); // ['<', '>Título Principal</', '>']
console.log(htmlString = htmlString.join('h1')); // <h1>Título Principal</h1>

// Slice
console.log(linguagens.slice(4));
console.log(linguagens.slice(2));
console.log(linguagens.slice(1,4));
console.log(linguagens.slice(0,3));
