
// atividade 1

// function exibirBoasVindas() {
//     console.log("Bem-vindo ao curso de JavaScript!");
// }


// exibirBoasVindas();
// exibirBoasVindas();


// Atividade 2

// function saudarUsuario(nome) {
//     return ("Ola, " + nome + "!" )
// }

// nome = prompt("Digite um nome: ")
// nome1 = prompt("Digite um nome: ")
// nome2 = prompt("Digite um nome: ")

// console.log(saudarUsuario(nome));
// console.log(saudarUsuario(nome1));
// console.log(saudarUsuario(nome2));


// Atividade 3 

// function realizarOperacao(num1, num2, callback) {
//     callback(num1, num2);
// }


// function somar(a, b) {
//     console.log("Soma:", a + b);
// }


// function multiplicar(a, b) {
//     console.log("Multiplicação:", a * b);
// }


// realizarOperacao(5, 3, somar);
// realizarOperacao(5, 3, multiplicar);

// atividade 4


// const soma = (a, b) => a + b;
// const subtracao = (a, b) => a - b;
// const multiplicacao = (a, b) => a * b;


// console.log("Soma:", soma(2, 3));
// console.log("Soma:", soma(10, 5));
// console.log("Soma:", soma(7, 8));


// console.log("Subtração:", subtracao(9, 4));
// console.log("Subtração:", subtracao(20, 10));
// console.log("Subtração:", subtracao(15, 6));


// console.log("Multiplicação:", multiplicacao(3, 4));
// console.log("Multiplicação:", multiplicacao(6, 7));
// console.log("Multiplicação:", multiplicacao(5, 5));

// atividade 5


const numeros = [1, 2, 3, 4, 5];


const dobrados = numeros.map(numero => numero * 2);


console.log(dobrados);

// atividade 6


// const numeros = [1, 2, 3, 4, 5];


// const somaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// const produtoTotal = numeros.reduce((acumulador, numero) => acumulador * numero, 1);


// console.log("Soma total:", somaTotal);
// console.log("Produto total:", produtoTotal);

// atividade 7


// class Carro {
//     constructor(marca, modelo, ano) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//     }

//     detalhes() {
//         console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
//     }
// }


// const carro1 = new Carro("Toyota", "Corolla", 2020);
// const carro2 = new Carro("Honda", "Civic", 2022);


// carro1.detalhes();
// carro2.detalhes();