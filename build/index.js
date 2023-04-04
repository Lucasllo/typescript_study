"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//tipos primitivos - string, number, boolean
let nome = "teste";
let idade = 3;
let bool = false;
// tipos especiais - any, undefined, null, object,array, tupla, date
let t = "qualquer tipo";
let indefinido = undefined;
let nad;
let objeto = { info: "teste" };
let dados = ["teste", "teste2"];
let dados2 = ["teste", "teste2"];
let infos = ["teste", 5, false]; // aceita dois ou mais tipos de dados na array
let énuplo = ["teste", 5, 7, false]; // tupla, a ordem definida importa
let niver = new Date("2022-05-20 05:00");
let teste;
teste = {
    nome: "teste",
    idade: 30
};
// funções
function soma(x, y) {
    return x + y;
}
function chamar(telefone) {
    return telefone;
}
function getDado(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "teste";
    });
}
let somar = soma(2, 2);
let chamada = chamar("8599999999");
let dado = getDado(1);
const robo = {
    id: 1,
    name: "teste"
};
const robo2 = {
    id: 2,
    name: "teste 2",
    say() {
        return "hi";
    }
};
class testando {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    say() {
        return this.name;
    }
}
// classes
class personagem {
    constructor(ataque, habilidade, nome) {
        this.nome = nome;
        this.ataque = ataque;
        this.habilidade = habilidade;
    }
    atacar() {
        console.log(`ataque com ${this.ataque} pontos!`);
    }
}
class mago extends personagem {
    constructor(ataqueMagico, ataque, habilidade, nome) {
        super(ataque, habilidade, nome);
        this.ataqueMagico = ataqueMagico;
    }
}
//generics
function contArrays(...itens) {
    return new Array().concat(itens);
}
const numberArray = contArrays([1, 2, 3], [5]);
const stringArray = contArrays(["teste", "teste2"], ["teste3"]);
console.log(numberArray);
console.log(stringArray);
console.log(new testando(1, "hello!").say());
console.log(teste.idade);
console.log(teste.nome);
console.log(niver.toString());
console.log(somar);
console.log(chamar(123));
new personagem(2, 5).atacar();
