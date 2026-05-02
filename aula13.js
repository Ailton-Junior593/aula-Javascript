// let nome = null

// try {
//     console.log(nome.toUppercase());
    
// }catch {
//     console.log('A variavel nao foi encontrada');
// }finally {
//     console.log('Teste');
// }

// atividade 1

// function dividir() {
//   const resultado = document.getElementById("resultado");
//   const mensagemFinal = document.getElementById("mensagemFinal");

//   resultado.innerHTML = "";
//   mensagemFinal.innerHTML = "";
//   resultado.classList.remove("error");

//   try {
//     let n1 = parseFloat(document.getElementById("num1").value);
//     let n2 = parseFloat(document.getElementById("num2").value);

//     if (isNaN(n1) || isNaN(n2)) {
//       throw new Error("Por favor, insira valores válidos.");
//     }

//     if (n2 === 0) {
//       throw new Error("Não é possível dividir por zero!");
//     }

//     let divisao = n1 / n2;
//     resultado.innerHTML = "Resultado: " + divisao;
//   } 
//   catch (erro) {
//     resultado.innerHTML = erro.message;
//     resultado.classList.add("error");
//   } 
//   finally {
//     mensagemFinal.innerHTML = "Operação concluída.";
//   }
// }

// atividade 2

// function verificarIdade() {
//   const resultado = document.getElementById("resultado");
//   resultado.innerHTML = "";
//   resultado.className = "resultado";

//   try {
//     let idade = document.getElementById("idade").value;
//     idade = Number(idade);

//     if (isNaN(idade)) {
//       throw new Error("A idade deve ser um número.");
//     }

//     if (idade < 0) {
//       throw new Error("A idade não pode ser negativa.");
//     }

//     resultado.innerHTML = "Idade válida!";
//     resultado.classList.add("ok");
//   } 
//   catch (erro) {
//     resultado.innerHTML = erro.message;
//     resultado.classList.add("erro");
//   }
// }