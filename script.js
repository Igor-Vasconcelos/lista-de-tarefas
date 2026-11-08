const form = document.querySelector("#form-tarefa");
const campo = document.querySelector("#campo-tarefa");
const mensagem = document.querySelector("#mensagem");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");

function criarTarefa(texto) {
  const item = criarElemento("li", "list-group-item d-flex gap-2 tarefa");
  const caixa = criarElemento("input", "form-check-input");
  caixa.type = "checkbox";
  caixa.setAttribute("aria-label", `Concluir: ${texto}`);
  const rotulo = criarElemento("span", "flex-grow-1", texto);
  const remover = criarElemento(
    "button",
    "btn btn-sm btn-outline-danger",
    "Remover",
  );

  caixa.addEventListener("click", () => marcarFeita(item, caixa.checked));
  remover.addEventListener("click", () => removerTarefa(item));

  item.append(caixa, rotulo, remover);
  return item;
}

function criarElemento(tag, classes, texto = "") {
  const elemento = document.createElement(tag);
  elemento.className = classes;
  elemento.textContent = texto;
  return elemento;
}

function marcarFeita(item, feita) {
  item.classList.toggle("feita", feita);
  atualizarContador();
}
function removerTarefa(item) {
  item.classList.add("saindo");
  setTimeout(() => {
    item.remove();
    atualizarContador();
  }, 300);
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = campo.value.trim();

  if (texto === "") {
    mensagem.textContent = "Digite uma tarefa antes de adicionar.";
    campo.focus();
    return;
  }
  mensagem.textContent = "";

  lista.append(criarTarefa(texto));
  form.reset();
  campo.focus();
  atualizarContador();
});

function atualizarContador() {
  const total = lista.children.length;
  const feitas = lista.querySelectorAll(".feita").length;
  const pendentes = total - feitas;

  contador.textContent = `${pendentes} pendentes(s) | ${feitas} feitas(s)`;
}

atualizarContador();
