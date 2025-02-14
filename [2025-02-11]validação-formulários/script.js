// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email");

let emailLabel = document.querySelector('label[for="email"]');

//1. Mostrar popup de campo obrigatório
// tem que ser disparado quando o input de username for selecionado
// função reaproveitavel para o campo-obrigatorio
function mostrarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
}
// chamada da função mostrarPopup

mostrarPopup(usernameInput, usernameLabel);

mostrarPopup(emailInput, emailLabel);

// usernameInput.addEventListener("focus", () => {
//   usernameLabel.classList.add("required-popup");
// });

// Ocultar popup de campo obrigatório

function ocultarPopup(input, label) {
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

ocultarPopup(usernameInput, usernameLabel);

ocultarPopup(emailInput, emailLabel);

// usernameInput.addEventListener("blur", () => {
//   usernameLabel.classList.remove("required-popup");
// });

// Validar valor do input

// para aplicar um evento de acordo com o valor do input, eu preciso capturar o valor do input em tempo real

// qual evento é disparado para captar o value do input em tempo real?
// R= change ou input

usernameInput.addEventListener("input", (elemento) => {
  // propriedade dentro de um evento para capturar o value do input

  let valueInput = elemento.target.value;

  console.log(valueInput);

  // estrutura condicional para validar a qtde de caracteres de um input;
  console.log([usernameInput]);

  if (valueInput.length < 5) {
    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");
  } else {
    usernameInput.classList.remove("error");
    usernameInput.classList.add("correct");
  }
});
