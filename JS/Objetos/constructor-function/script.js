// Sem argumentos
function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;

// Com argumentos
function Roupa(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

/************************************************/

const renner = new Roupa("Renner", 240);
const nike = new Roupa("Nike", 300);

function Jogos(empresaDesenvolvido, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.empresa = empresaDesenvolvido;
  this.preco = precoFinal;
}

const gtaV = new Jogos("RockstarGames", 5000);
console.log(gtaV);

// const Dom = {
//     seletor: 'li',
//     element (){
//        return document.querySelector(this.seletor);
//     },
//     ativar () {
//         this.element().classList.add('ativar');
//     }
// }

// Dom.ativar();

// Dom.seletor = 'ul';
// Dom.ativar();

/************************************************/

function Dom(seletor) {
  (this.element = () => {
    return document.querySelector(seletor);
  }),
    (this.ativar = () => {
      this.element().classList.add("ativar");
    });
}

const li = new Dom("li");
const ul = new Dom("ul");

const lastLi = new Dom("li:last-child");
lastLi.ativar();

// Transforme o objeto abaixo em um Constructor Function
const pessoa = {
  nome: "Nome Pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function(){
    console.log(this.nome + ' andou');
  }
}

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = (classe) =>{
      elementList.forEach((element) =>{
        element.classList.add(classe);
      })
    }
    this.removeClass = (classe) =>{
      elementList.forEach((element) =>{
        element.classList.remove(classe);
      })
    }
}

const listaItems = new Dom('li');
listaItems.addClass('ativar');
listaItems.removeClass('ativar');