// let meu_h1 = document.getElementById('meu_h1')
// let name_complet = document.getElementById('name_complet')

// escreverNome = () => {
//     let div1 = document.getElementsByClassName('div1')[0];

//     div1.innerHTML = `<p>${name_complet.value}</p>`

// }

function escreverDados() {
    let div1 = document.getElementsByClassName('div1')[0];

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let nascimento = document.getElementById('nascimento').value;
    let profissao = document.getElementById('profissao').value;

    div1.innerHTML = `
        <p>Nome: ${nome}</p>
        <p>Idade: ${idade}</p>
        <p>Nascimento: ${nascimento}</p>
        <p>Profissão: ${profissao}</p>
    `;
}