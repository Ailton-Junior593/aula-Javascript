

// alert('Ola')

// Metodo While

var numero = 1
while(numero < 5){
    console.log("Ola meu primeiro loop while");
    numero ++;
}

let numero = 0


// Metodo DoWhile
do{
    console.log(numero)
    numero++
}while(numero <= 3)

// Atividade 1

let numero
do{
   numero =  parseFloat(prompt("Digite um numero: "))
    console.log(numero)
}while(numero >= 0)

console.log("Número negativo inserido. Programa encerrado.")


// Atividade 2

const numeroSecreto = 7
let tentativa


while (true){
    tentativa = parseInt(prompt("Adivinhe um numero entre 1 e 10"))

    if(tentativa == numeroSecreto) {
        alert("Parabens você acertou")
        break
    }else{
        alert("Você errou tente novamnete")
    }
}

// Atividade 3

let numero = parseInt(prompt("Digite um numero Positivo : "))
let soma = 0;
let contador = 1;



while (contador <= numero) {
  soma += contador;
  contador++;
}

alert(`A soma dos números de 1 até ${numero} é ${soma}`)


// metodo For

for (let i = 0; i < 10; i++){
    console.log(i);
    
}


// atividade 4

for(let i = 1; i <= 20; i++){
    if (i > 15){
        break
    }else if(i% 3 == 0){
        continue
    }

    console.log(i);
    


// Metodo For Of

let words = "Felipe"

for(let i of words ){
    console.log(i);
    
}


// Atividade 5

let palavra = prompt("Digite uma palavra: ")

for(let i of palavra){
    console.log(i);
    
}