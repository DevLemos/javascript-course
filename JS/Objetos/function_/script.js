/*-----------------------Function-------------------------*/
const perimetroQuadrado = new Function("lado", "return lado * 4");

function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'

/*-----------------------function.call()-------------------------

Neste exemplo abaixo, tenho um elemento ul e passo uma nova referencia li para a mesma

*/

//Exemplo 1
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};

const li = {
  element: document.querySelector("li"),
};

Dom.prototype.ativo.call(li, "ativar");

//Exemplo 2
const carro1 = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro1); // Ford 2018

const frutas = ["Uva", "Maça", "Banana"];

//Ambos fazem a mesma coisa
Array.prototype.pop.call(frutas);
frutas.pop();

//Objeto arrayLike
const arrayLike = {
  0: "item 1",
  1: "item 2",
  2: "item 3",
  length: 3,
};

const lista = document.querySelectorAll("li");

//Exemplo 1(nodeList)
const filtro = Array.prototype.filter.call(lista, (item) => {
  return item.classList.contains("ativo");
});
console.log(filtro);
console.log(lista);

//Exemplo 2(array)
const novoArray = Array.from(lista);
const filtroNovoArray = novoArray.filter((item) => {
  return item.classList.contains("ativo");
});
console.log(novoArray);
console.log(filtroNovoArray);

/*-----------------------function.apply()-------------------------*/
const numeros = [43, 4546, 687, 3, 2, 35, 6, 7, 22535, 57, 6];
console.log(Math.max(12, 3, 5, 6, 7678)); //7678
console.log(Math.max(numeros)); //NaN
console.log(Math.max.apply(null, numeros)); //22535

/*

Diferença entre apply e Call
A única diferença é a array como argumento

*/
const lista2 = document.querySelectorAll("li");

function itemPossuiAtivo(item) {
  return item.classList.contains("ativo");
}

const filtro1 = Array.prototype.filter.call(lista2, itemPossuiAtivo);
console.log(filtro1);
const filtro2 = Array.prototype.filter.apply(lista2, [itemPossuiAtivo]);
console.log(filtro2);

/*-----------------------function.bind()-------------------------*/

/* 

Diferente de call e apply, bind não irá executar a função mas sim 
retornar a mesma com o novo contexto de this.

*/
const lista3 = document.querySelectorAll("li");

const filtrarLi = Array.prototype.filter.bind(lista3, function (item) {
  return item.classList.contains("ativo");
});

console.log(filtrarLi());

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

console.log(carro.acelerar(100, 20)); // Ford acelerou 100 em 20

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(200, 10)); // Honda acelerou 200 em 10

// Podemos passar argumentos padrões para uma função e retornar uma nova função.
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

imc(1.8, 70); // 21.6
imc180(70); // 21.6


/*----------------------Exercicios------------------------*/
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('.function p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos,(acumulador,item) =>{
  return acumulador + item.innerText.length;
},0);

console.log(totalCaracteres);
console.log(paragrafos);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento('li','azul','Esse é o conteúdo'));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1','titulo');
console.log(h1Titulo('Cursos de JavaScript'));


