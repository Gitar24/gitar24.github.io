const input = document.getElementById("commandinput");
const output = document.getElementById("output");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const command = input.value.trim().toLowerCase();

    output.innerHTML += `<p>$ ${command}</p>`;

    if (command === "help") {
      output.innerHTML += `
        <p>Comandos disponíveis:</p>
        <p>about - sobre mim</p>
        <p>projects - meus projetos</p>
        <p>skills - minhas habilidades</p>
        <p>contact - contato</p>
        <p>clear - limpar terminal</p>
      `;
    } else if (command === "about") {
      output.innerHTML += `<p>Meu nome é Gitar e estou estudando desenvolvimento web.</p>`;
    } else if (command === "projects") {
      output.innerHTML += `<p>Projetos: <a href="https://gitar24.github.io/">Portfólio</a>, <a href="https://github.com/Gitar24/plato">Plato</a>, <a href="https://github.com/Gitar24/ALog">Alog</a>.</p>`;
    } else if (command === "skills") {
      output.innerHTML += `<p>HTML, CSS, JavaScript, Python e SQL.</p>`;
    } else if (command === "contact") {
      output.innerHTML += `<p><a href="https://github.com/Gitar24">https://github.com/Gitar24</a></p>
      <p>arthurlopespassos159@gmail.com</p> <p><a href="https://www.linkedin.com/in/arthur-lopes-025289401/">https://www.linkedin.com/in/arthur-lopes-025289401/</a></p>`;
    } else if (command === "clear") {
      output.innerHTML = "";
    } else {
      output.innerHTML += `<p>Comando não encontrado. Digite 'help'.</p>`;
    }

    input.value = "";
  }
});