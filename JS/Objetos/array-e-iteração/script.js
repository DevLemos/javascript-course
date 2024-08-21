/*----------------ForEach-----------------------------*/
const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
});

const li = document.querySelectorAll(".li");

//Forma simplificada em apenas uma linha
li.forEach((i) => i.classList.add("ativa"));

li.forEach(function (item) {
  console.log(item.classList("ativa"));
});

/*----------------Map-----------------------------*/
const alimentos = ["Batata", "Arroz", "Feijão"];

const novaArray = alimentos.map((item, index, array) => {
  return item.toUpperCase();
});

console.log(novaArray);
console.log(alimentos);

const numeros = [2, 4, 67, 78, 6];
const numerosX2 = numeros.map((n) => n * 2);
console.log(numeros);
console.log(numerosX2);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

//1
const tempoAulas = aulas.map((aula) => aula.min);
console.log(tempoAulas);

//2
const arrayNomeAulas = aulas.map(function (aula) {
  return aula.nome;
});
console.log(arrayNomeAulas);

//3
const nomeAulas = function (aula) {
  return aula.nome;
};
const arrayAulas = aulas.map(nomeAulas);
console.log(arrayAulas);

/*----------------Reduce-ReduceRight----------------------------*/
const aulasAtuais = [10, 25, 30];

const reduceAulas = aulasAtuais.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index, array);
  return acumulador + item;
}, 0);

console.log(reduceAulas);

const numerosReduce = [10, 23, 544, 55, 4, 3, 2, 12];
const maiorNumero = numerosReduce.reduce((acumulador, atual) => {
  return acumulador < atual ? atual : acumulador;
});
console.log(maiorNumero);

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

const frutas = ["Banana", "Abacaxi", "Maça", "Uva"];
const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

console.log(frutasRight);
console.log(frutasLeft);

/*----------------some------------------------*/
const pessoas = ["João", "José", "Kauan", "Emily"];
const temEmily = pessoas.some((item) => {
  return item === "Emily";
});
console.log(temEmily);

/*----------------every------------------------*/
const roupas = ["Camisetas", "Jaquetas", "Calça", "Boné", ""];
const arrayCheio = roupas.every((fruta) => {
  return fruta;
});
console.log(arrayCheio); //false

const numerosAltos = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numerosAltos.every((x) => x > 3);
console.log(maiorQue3); // true

/*-------------------findIndex-------------------------*/
const transportes = [" ", "Ônibus", "Avião", "Carro", "Barco"];
const indexAviao = transportes.findIndex(
  (transporte) => transporte === "Avião"
);
console.log(`Index: ${indexAviao}`);

const arrayNumeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = arrayNumeros.find((x) => x > 45);
console.log(buscaMaior45); // 88

/*-------------------filter-------------------------*/
const transportes2 = [
  "",
  "Ônibus",
  null,
  "Avião",
  "Carro",
  undefined,
  "Barco",
  0,
];
const arrayLimpa = transportes2.filter((transporte) => transporte);
console.log(arrayLimpa);

const numeros3 = [6, 43, 22, 88, 101, 29];
const buscaMaiorNumeros45 = numeros3.filter((x) => x > 45); // [88, 101]
console.log(buscaMaiorNumeros45);

/*-------------------Exercicios-------------------------*/
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);
const objetoArray = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(objetoArray);

// Retorne uma lista com os
// números maiores que 100
const numerosGrandes = [3, 44, 333, 23, 122, 322, 33];
const numerosMaioresQue100 = numerosGrandes.filter((n) => n > 100);
console.log(numerosMaioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const possuiBaixo = instrumentos.some((item) => item === "Baixo");
console.log(possuiBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) =>{
    const precoLimpo = +item.preco.replace('R$ ','').replace(',','.');
    return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);