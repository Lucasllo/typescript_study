// //tipos primitivos - string, number, boolean
// let nome: string = "teste";
// let idade: number = 3;
// let bool: boolean = false;

// // tipos especiais - any, undefined, null, object,array, tupla, date
// let t: any = "qualquer tipo";
// let indefinido: undefined = undefined;
// let nad: null;
// let objeto: object = {info: "teste"};
// let dados: string[] = ["teste", "teste2"];
// let dados2: Array<string> = ["teste", "teste2"];
// let infos: (string | number | boolean)[] = ["teste", 5, false]; // aceita dois ou mais tipos de dados na array
// let énuplo: [string, number, number, boolean] = ["teste", 5, 7, false] // tupla, a ordem definida importa
// let niver: Date = new Date("2022-05-20 05:00");

// type pessoa = {
//     nome: string,
//     idade: number,
// }
// let teste: pessoa;
// teste = {
//     nome:"teste",
//     idade: 30
// }


// console.log(teste.idade);
// console.log(teste.nome);
// console.log(niver.toString());


// // funções
// function soma(x: number, y: number): number{
//     return x + y;
// }

// function chamar(telefone: number | string): number | string{
//     return telefone;
// }

// async function getDado(id: number): Promise<string | number> {
//     return "teste";
// }

// let somar: number = soma(2,2);
// let chamada: string | number = chamar("8599999999");
// let dado: Promise<string | number> = getDado(1);


// console.log(somar);
// console.log(chamar(123));


// // interfaces x types
// // type é mais usado para tipar objetos
// type robot ={
//     readonly id: string | number,
//     name: string
// }

// // inteface é mais usado para tipar classes
// interface robot2 {
//     readonly id: string | number,
//     name: string,
//     say(): string;
// }

// const robo: robot ={
//     id: 1,
//     name: "teste"
// }

// const robo2: robot2 = {
//     id: 2,
//     name: "teste 2",
//     say():string {
//         return "hi";
//     }
// }

// class testando implements robot2{
//     id: string | number;
//     name: string;

//     constructor(id: number, name: string){
//         this.id = id;
//         this.name = name;
//     }
    
//     say(): string {
//         return this.name;
//     }
    
// }

// console.log(new testando(1,"hello!").say());

// // classes
// class personagem{
//     protected nome?: string;
//     readonly ataque: number;
//     habilidade: number;

//     constructor(ataque: number, habilidade: number,nome?: string){
//         this.nome = nome;
//         this.ataque = ataque;
//         this.habilidade = habilidade;
//     }
    
//     public atacar(): void{
//         console.log(`ataque com ${this.ataque} pontos!`);
//     }
// }

// class mago extends personagem{
//     public ataqueMagico: number;
    
//     constructor(ataqueMagico: number, ataque: number, habilidade: number,nome?: string){
//         super(ataque, habilidade, nome);
//         this.ataqueMagico = ataqueMagico;
//     }
// }


// new personagem(2,5).atacar();


// //generics
// function contArrays<T>(...itens: T[]): T[]{
//     return new Array().concat(...itens);
// }

// const numberArray = contArrays<number[]>([1,2,3], [5]);
// const stringArray = contArrays<string[]>(["teste", "teste2"], ["teste3"]);

// console.log(numberArray);
// console.log(stringArray);



//decorators

// class decorator
function apiVersion(version: string){
    return (target: any) =>{
        Object.assign(target.prototype, {__version: version})
    }
}

// attribute decorator
function minLength(length: number){
    return (target:any, key: any) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value : string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor que ${length}`)
            }else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}



@apiVersion("1.1")
class Api{
    @minLength(3)
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

const api = new Api("teste");
// roda apenas no "npm run start:dev"
// console.log(api.__version);















