// function helloworld(name, ...args){
//     console.log(`Ola Mundo ${name}`);
    
// }

// nome = prompt("Digite um nome: ")

// helloworld(nome, ("Teste", "teste2", "teste3", "teste4"));


// Atividade 1

// function calculaDesconto(preco, desc){
//     novopreco = preco - (preco*(desc/100))
 
//     console.log(novopreco)

// }

// precoinicial = parseFloat(prompt("Digite o Preço do produto:"))

// descInicial = parseFloat(prompt("Digite o desconto que sera dado:"))

// calculaDesconto(precoinicial,descInicial)


// Atividade 2

// function calcularSoma(...numeros){
//     return numeros.reduce((total,atual)=> total + atual ,0)
// }

// console.log(calcularSoma(1,2,3,4,5));


// Atividade 3


// let soma = function(num1, num2){
//     return num1 + num2
// }
// let subtracao = function(num1, num2){
//     return num1 - num2
// }
// let multiplicacao = function(num1, num2){
//     return num1 * num2
// }

// console.log(soma(16,5))
// console.log(subtracao(16,5))
// console.log(multiplicacao(16,5))


// atividade 4


// function processarArray(array, callback) {
//   let novoArray = [];

//   for (let i = 0; i < array.length; i++) {
//     novoArray.push(callback(array[i]));
//   }

//   return novoArray;
// }


// function dobrarNumero(numero) {
//   return numero * 2;
// }


// function raizQuadrada(numero) {
//   return Math.sqrt(numero);
// }


// let numeros = [4, 9, 16, 25];


// let arrayDobrado = processarArray(numeros, dobrarNumero);


// let arrayRaiz = processarArray(numeros, raizQuadrada);


// console.log("Array original:", numeros);
// console.log("Array dobrado:", arrayDobrado);
// console.log("Raiz quadrada dos números:", arrayRaiz);



// arrow function

// let soma = (numero1, numero2) => numero1 + numero2

// console.log(soma(1,2));


// atividade 5



const filtrarPares = (array) => {
  return array.filter(numero => numero % 2 === 0);
};


const calcularMedia = (array) => {
  const soma = array.reduce((total, numero) => total + numero, 0);
  return soma / array.length;
};


const numeros = [3, 8, 12, 5, 10, 7, 6];


const pares = filtrarPares(numeros);


const media = calcularMedia(pares);


console.log("Array de números pares:", pares);
console.log("Média dos números pares:", media);
