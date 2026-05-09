// let url = "https://dogapi.dog/api/v2/breeds";

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });

// atividade 1

const container = document.getElementById("users-container");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    const users = await response.json();

    renderUsers(users);

  } catch (error) {
    container.innerHTML = `<p>${error.message}</p>`;
  }
}

function renderUsers(users) {
  container.innerHTML = "";

  users.forEach(user => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="name">${user.name}</div>

      <div class="info">
        <span class="label">Usuário:</span>
        ${user.username}
      </div>

      <div class="info">
        <span class="label">Email:</span>
        ${user.email}
      </div>

      <div class="info">
        <span class="label">Telefone:</span>
        ${user.phone}
      </div>

      <div class="info">
        <span class="label">Empresa:</span>
        ${user.company.name}
      </div>

      <div class="info">
        <span class="label">Cidade:</span>
        ${user.address.city}
      </div>

      <a 
        class="website"
        href="https://${user.website}" 
        target="_blank"
      >
        Visitar Site
      </a>
    `;

    container.appendChild(card);

  });
}

fetchUsers();