// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// EMAIL
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// SENHA

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector("label[for='senha']");
let senhaHelper = document.getElementById("senha-helper");

// function mostrarPopup de CAMPO OBRIGATÓRIO

function mostrarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
}

// function oculparPopup de CAMPO OBRIGATÓRIO

function ocultarPopup(input, label) {
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

mostrarPopup(usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel);

ocultarPopup(usernameInput, usernameLabel);
ocultarPopup(emailInput, emailLabel);

mostrarPopup(senhaInput, senhaLabel);
ocultarPopup(senhaInput, senhaLabel);

// Validar valor do input
function estilizarInputCorreto(input,helper){
  input.classList.remove('error');
  input.classList.add('correct');
  helper.classList.remove('visible');
}

function estilizarInputIncorreto(input,helper,msgAjuda){
  input.classList.remove('correct');
  input.classList.add('error');
  helper.textContent = msgAjuda;
  helper.classList.add('visible');
}

// validando tamanho do campo senha
function validarTamanho(input, tamanhoMinimo, tamanhoMaximo, inputHelper) {
  const tamanhoMin = tamanhoMinimo || 6;
  const tamanhoMax = tamanhoMaximo || 12;
  let tamanhoInput = input.value.length;

  console.log(tamanhoInput);

  if (tamanhoInput >= tamanhoMin && tamanhoInput <= tamanhoMax) {
    /*input.classList.remove("error");
    input.classList.add("correct");*/
    estilizarInputCorreto(input, inputHelper);
  } else {
    /*input.classList.remove("correct");
    input.classList.add("error");*/
    let msgAjudaErro = `O ${input.name} deve ter entre ${tamanhoMin} e ${tamanhoMax} caracteres`;
    estilizarInputIncorreto(input, inputHelper, msgAjudaErro);
  }
}

// gerar o evento de aplicando a função acima para os inputs que precisam de seu tamanho validado
let msgAjudaErro = "O ${input.name} deve ter entre ${tamanhoMin} e ${tamanhoMax} caracteres";

usernameInput.addEventListener("input", () => {
  validarTamanho(usernameInput, 6, null, usernameHelper, "O nome de usuário deve ter no mínimo 6 caracteres");
});

emailInput.addEventListener("input", () => {
  validarTamanho(emailInput, 6, 20, emailHelper, "O email deve ter entre 6 e 20 caracteres");
});

senhaInput.addEventListener("input", () => {
  validarTamanho(senhaInput, 5, 10, senhaHelper, "A senha deve ter entre 5 e 10 caracteres");
});
