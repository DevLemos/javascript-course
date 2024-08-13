var pessoa = {
  nome: "André",
  idade: 28,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

// var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";

menu.esconder = function () {
  console.log("Escondi");
};
var bg = menu.backgroundColor;

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: "Kauan",
  sobrenome: "Lemos",
  idade: 22,
  cidade: "São Paulo",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
