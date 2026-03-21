// let pessoa = {
//     nome: "Ailton",
//     idade: 28,
//     profissao: "Desenvolvedor"
// };

// pessoa.nome = "Ailton Junior"
// pessoa["idade"] = 29

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.profissao);

// Atividade 1

// let carro = {
//     marca: "Ferrari",
//     modelo: "La Ferrari",
//     ano: 2025
// };


// console.log(carro);
// console.log(carro.marca);
// console.log(carro.modelo);
// console.log(carro.ano);

// Atividade2

// let pessoa1 = {
//     nome: "Ailton",
//     idade: 28,
//     profissao: "Desenvolvedor",
//     cidade: "São Paulo"
// };


// console.log(pessoa1);

// const exibir_dados = (pessoa) => {
//     console.log(`Nome: ${pessoa.nome}`);
//     console.log(`Idade: ${pessoa.idade}`);
//     console.log(`Endereço: ${pessoa.cidade}`);
//     console.log(`Profissão: ${pessoa.profissao}`);
// }

// let nome_var = prompt("Digite seu nome: ");
// let idade_var = prompt("Digite sua idade: ");
// let cidade_var = prompt("Digite sua cidade: ");

// let pessoa2 = {
//     nome: nome_var,
//     idade: idade_var,
//     profissao: prompt("Digite a sua Profissão: "),
//     cidade: cidade_var
// };

// exibir_dados(pessoa2);



// Atividade 3


let livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
    editora: "Editora Garnier"
};


let { titulo, autor } = livro;


console.log("Título:", titulo);
console.log("Autor:", autor);

