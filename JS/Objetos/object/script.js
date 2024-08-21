const pessoa = new Object({
    nome: 'Kauan'
});

console.log(pessoa);

/*--------------Métodos de Object------------------*/

const carro = {
    marca: 'Marca',
    rodas: 4,
    init(valor) {
        this.marca = valor;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar(){
        return this.marca + ' buzinou';
    }
}

/*--------------Object.create(obj, defineProperties)------------------*/

const honda = Object.create(carro).init('Honda');
console.log(honda);
console.log(honda.acelerar());

const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    }
}

const moto = {
    rodas: 2,
    capacete: true
}

const objCarro = {
    rodas: 4,
    mala: true
}

/*--------------Object.assign(alvo, obj1, obj2)------------------*/
console.log(Object.assign(moto, funcaoAutomovel));
console.log(Object.assign(objCarro, funcaoAutomovel));

/*
--------------Object.defineProperties(alvo, propriedades)------------------

Existe também o Object.defineProperty, para uma propriedade única.
*/
const futebol = {};

Object.defineProperties(futebol, {
    jogadores: {
        value: 12,
        configurable: false, // impede deletar e mudança de valor
        writable: true,
        enumarable: true, // torna enumerável
    },
    times: {
        value: 2,
        configurable: true,
        writable: false,  // impede mudança de valor
    },
    chutes: {
        get() {
            return this._chutes; //futebol.chutes
        },
        set(valor) {
            this._chutes = valor; //futebol.chutes = 2;
        }
    }
});

console.log(futebol.jogadores = 4);
console.log(delete futebol.jogadores); //false


/*-------------Object.getOwnPropertyDescriptors(obj)--------------------*/

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade

/*-------------Object.keys(obj), Object.values(obj) Object.entries(obj)--------------------*/

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const meuCarro = {
  marca: 'Ford',
  ano: 2018,
}

console.log(Object.keys(meuCarro)); // ['marca', 'ano']
console.log(Object.values(meuCarro)); // ['Ford', 2018]
console.log(Object.entries(meuCarro)); // [['marca', 'Ford'], ['ano', 2018]]


/*-------------Object.getOwnPropertyNames(obj)--------------------*/

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro2 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro2); // ['marca', 'ano']

/*-------------Object.getPrototypeOf() e Object.is(obj1, obj2)--------------------*/

const frutas = ['Banana', 'Pêra'];
console.log(Object.getPrototypeOf(frutas));
console.log(Object.getPrototypeOf(0)); //Number
console.log(Object.getPrototypeOf('')); //String 

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

const novaFruta = frutas1;
novaFruta[0] = 'Uva';

console.log(frutas1,frutas2, novaFruta); //(2) ['Uva', 'Pêra'], (2) ['Banana', 'Pêra'], (2) ['Uva', 'Pêra']
console.log(Object.is(frutas1, frutas2)); //false
console.log(Object.is(novaFruta, frutas1)); //true

/*-------------Object.freeze(), Object.seal(), Object.preventExtensions()--------------------*/

const produto = {
    marca: 'Bauducco',
    preco: 23
}

Object.freeze(produto); // impede qualquer mudança nas propriedades
produto.preco = 12;
console.log(produto); // 23

Object.seal(produto); // previne a adição de novas propriedades e impede que as atuais sejam deletadas
produto.cliente = 'Supermercado Parana';
delete produto.marca;
console.log(produto); // {marca: 'Bauducco', preco: 23}

Object.preventExtensions(produto); // previne a adição de novas propriedades.
produto.quantidade = 2;
console.log(produto); // {marca: 'Bauducco', preco: 23}
delete produto.marca;
console.log(produto); // {preco: 23}

console.log(Object.isFrozen(produto)); //true
console.log(Object.isSealed(produto)); //true
console.log(Object.isExtensible(produto)); //false


/*-------------Propriedades e Métodos do Protótipo--------------------*/

/*-------------{}.constructor--------------------*/
const frutas3 = ['Banana', 'Uva'];
console.log(frutas3.constructor); // Array

const frase = 'Isso é uma String';
console.log(frase.constructor); // String

/*-------------{}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')--------------------*/
const frutas4 = ['Banana', 'Uva'];
console.log(frutas.hasOwnProperty('map'));  // false
console.log(Array.hasOwnProperty('map'));  // false
console.log(Array.prototype.hasOwnProperty('map')); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

/*-------------{}.isPrototypeOf(valor)--------------------*/
const frutas5 = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutas); // true

/*-------------{}.toString()--------------------*/

//Object.prototype.toString.call(valor)
const frutas6 = ['Banana', 'Uva'];
frutas6.toString(); // 'Banana,Uva'
typeof frutas6; // object
Object.prototype.toString.call(frutas6); // [object Array]

const frase2 = 'Uma String';
frase2.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]

const carro3 = {marca: 'Ford'};
carro3.toString(); // [object Object]
typeof carro3; // object
Object.prototype.toString.call(carro3); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]










