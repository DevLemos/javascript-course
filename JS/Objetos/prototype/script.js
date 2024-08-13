function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

var obj = {
    nome: 'Lucas',
    idade: 24,
}

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou';
}

const kauan = new Pessoa('Kauan', 22);

console.log(Pessoa.prototype);
console.log(kauan.prototype);

const pais = 'Brasil';
const cidade = new String('São Paulo');

console.log(pais.charAt(0));
console.log(cidade.charAt(0));


String.prototype

const listaAnimais = ['Gato', 'Cachorro', 'Cavalo'];
console.log(listaAnimais);


const lista = document.querySelectorAll('li');

//Transforma essa nodeList em um Array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);
console.log(listaArray1);
console.log(listaArray2);

console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));

const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
        return true;
    }
}

console.log(Carro);  // Object
console.log(Carro.marca); // String
console.log(Carro.preco); // Number
console.log(Carro.acelerar); // Function
console.log(Carro.acelerar()); // Boolean
console.log(Carro.marca.charAt); // Function
console.log(Carro.marca.charAt(0)); // String

//Verifique o nome do construtor com .constructor.name
console.log(Carro.preco.constructor.name)


