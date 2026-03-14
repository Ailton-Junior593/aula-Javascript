// let arrayTeste = [1, 2, 3, 4, 5]


// arrayTeste.forEach((valor, index) => {
//     console.log(index, valor);
    
// })


// Atividade 1

// let numero = [1, 2, 3, 4, 5];

// numero.forEach((valor, index) => {
//     if (valor > 0) {
//         console.log(`O valor é positivo ${valor}`);
//     } 
//     else if (valor < 0) {
//         console.log(`O valor é negativo ${valor}`);
//     } 
//     else {
//         console.log(`O valor é zero ${valor}`);
//     }
// })


// map

// let arrayTeste1 = [1, 2, 3, 4, 5]

// let newArray = arrayTeste1.map((number) => {
//    return number *2
    
// })


// console.log(newArray);

// Atividade 2


// let nome = ["Ailton", "Felipe", "victor", "gustavo", "Lucas"]

// let newNome = nome.map((nome ) => {
//     return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase;
// })

// console.log(newNome);


// filter

// let numbers = [1, 2, 3, 4, 5];

// let evenNuber = numbers.filter((number) => {
//     return number % 2 == 0;
// })

// console.log(evenNuber);


// reduce

// let numeros = [1, 2, 3, 4, 5];

// sun = numeros.reduce((accumulator, currentValue) =>{
//     return accumulator += currentValue
// })

// console.log(sun);


// some

// let num = [1, 2, 3, 4, 5];


// let value = num.some((number) => {
//     return number % 2 == 0;
// })

// console.log(value);



// atividade 3 


// let nomes = ["Ailton", "Felipe", "victor", "gustavo", "Lucas"];

// let vogaisPorNome = nomes.map(nome => {
   
//     let nomeMinusculo = nome.toLowerCase();

    
//     let vogais = nomeMinusculo.match(/[aeiou]/g);

   
//     return {
//         nome: nome,
//         quantidadeVogais: vogais ? vogais.length : 0
//     };
// });

// console.log(vogaisPorNome);


// find

let num1 = [1, 2, 3, 4, 5];


let value = num1.find((number) => {
    return number % 2 == 0;
})

console.log(value);
