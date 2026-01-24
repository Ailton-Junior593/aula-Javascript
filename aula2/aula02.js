let status1 = true
let status2 = false
let status3 = false

console.log(!status3)


//atividade 1

let valor1 = Number(prompt("Digite O primeiro valor: "))
let valor2 = Number(prompt("Digite O segundo valor: "))


// console.log((valor1 > 0) || (valor2 > 0))

console.log(valor1 === valor2)
console.log(valor1 < valor2)
console.log(valor1 > valor2)
console.log(valor1 <= valor2)
console.log(valor1 >= valor2)
console.log(valor1 != valor2)


//atividade2

let valor1 = Number(prompt("Digite O primeiro valor: "))
let valor2 = Number(prompt("Digite O segundo valor: "))


if(valor1 > valor2){
    console.log("O valor armazenado em valor 1 é maior")
}else if(valor2 > valor1){
    console.log("O valor armazenado em valor 2 é maior")
}else{
    console.log("Nenhuma das condições acima foi atendida")
}

//atividade 3

num1 = Number(prompt("Digite O primeiro valor: "))

 if(num1 > 0){
    console.log("O valor armazenado em num1 é positivo")
}else if(num1 < 0){
    console.log("O valor armazenado em num1 é negativo")
}else{
    console.log("O valor de num1 é igual a Zero")
}

//ternarios

let nome = "Felipe"

let eh_maior = (nome.lenght >6) ? true : false

console.log(eh_maior)


//switch

let numero = Number(prompt('Digite o mes do seu aniversario'))

switch(numero){
    case 1:
        console.log("Janeiro");
    case 2:
        console.log("Fevereiro");
    case 3:
        console.log("Março");
    case 4:
        console.log("Abril");
    case 5:
        console.log("Maio");
    case 6:
        console.log("Junho");
    case 7:
        console.log("Julho");
    case 8:
        console.log("Agosto");
    case 9:
        console.log("Setembro");
    case 10:
        console.log("Outubro");
    case 11:
        console.log("Novembro");
    case 12:
        console.log("Dezembro");
}

//Atividade 4

let num1 = Number(prompt("Digite O primeiro valor: "))
let num2 = Number(prompt("Digite O segundo valor: "))
let operacao = prompt("Digite Qual operação voce deseja (Adicao, Subtracao, Multiplicacao, Divisao) ")

switch(operacao){
    case "Adicao":
        console.log(num1 + num2);
        break;
    case "Subtracao":
        console.log(num1 - num2);
        break;
    case "Multiplicacao":
        console.log(num1 * num2);
        break;
    case "Divisao":
        console.log(num1 / num2);
        

}

//atividade 5
let idade = Number(prompt('Digite sua idade: '))

if(idade >=5 && idade <=7){
    console.log("Sua Turma é Infantil A")
}else if(idade >=8 && idade <=10){
    console.log("Sua Turma é Infantil B")
}else if(idade >=11 && idade <=13){
    console.log("Sua Turma é Juvenil A")
}else if(idade >=14 && idade <=17){
    console.log("Sua Turma é Juvenil B")
}else if(idade >= 18){
    console.log("Adulto")
}