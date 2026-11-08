const form = document.querySelector("form-tarefa");
const campo = document.querySelector("campo-tarefa");
const mensagem = document.querySelector("mensagem");
const lista = document.querySelector("lista");
const contador = document.querySelector("contador");

function criartarefa(texto) {
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
