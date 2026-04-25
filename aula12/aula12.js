// localStorage.setItem("nome", "Ailton")

// let nome = localStorage.getItem(nome)

// localStorage.clear


// Atividade 1

// const input = document.getElementById("nomeInput");
// const salvarBtn = document.getElementById("salvarBtn");
// const recuperarBtn = document.getElementById("recuperarBtn");
// const mensagem = document.getElementById("mensagem");


// salvarBtn.addEventListener("click", function () {
//   const nome = input.value;

//   if (nome.trim() !== "") {
//     localStorage.setItem("nomeUsuario", nome);
//     mensagem.textContent = "Nome salvo com sucesso!";
//   }
// });


// recuperarBtn.addEventListener("click", function () {
//   const nomeSalvo = localStorage.getItem("nomeUsuario");

//   if (nomeSalvo) {
//     mensagem.textContent = "Olá, " + nomeSalvo + "!";
//   } else {
//     mensagem.textContent = "Nenhum nome encontrado.";
//   }
// });

// atividade 2

// const input = document.getElementById("tarefaInput");
// const salvarBtn = document.getElementById("salvarBtn");
// const removerBtn = document.getElementById("removerBtn");
// const limparBtn = document.getElementById("limparBtn");
// const mensagem = document.getElementById("mensagem");


// salvarBtn.addEventListener("click", function () {
//   const tarefa = input.value;

//   if (tarefa.trim() !== "") {
//     localStorage.setItem("tarefa", tarefa);
//     mensagem.textContent = "Tarefa salva!";
//     input.value = "";
//   }
// });


// removerBtn.addEventListener("click", function () {
//   localStorage.removeItem("tarefa");
//   mensagem.textContent = "Tarefa removida!";
// });


// limparBtn.addEventListener("click", function () {
//   localStorage.clear();
//   mensagem.textContent = "Todas as tarefas foram apagadas!";
// });


// JSON

// let objetosJS = {
//     nome: 'Felipe',
//     idade: 25
// }

// let convertJSON = JSON.stringify(objetosJS)

// console.log(convertJSON);
