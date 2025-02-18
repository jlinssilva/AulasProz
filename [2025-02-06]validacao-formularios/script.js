// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

let passwordInput = document.getElementById("senha");
let passwordLabel = document.querySelector('label[for="senha"]');
let passwordHelper = document.getElementById("senha-helper");

// Mostrar popup de campo obrigatório
function showRequiredPopup(input, label) {
    input.addEventListener("focus", function() {
        label.classList.add("required-popup");
    });
}

showRequiredPopup(usernameInput, usernameLabel);
showRequiredPopup(emailInput, emailLabel);
showRequiredPopup(passwordInput, passwordLabel);


// Ocultar popup de campo obrigatório
function hideRequiredPopup(input, label) {
    input.addEventListener("blur", function() {
        label.classList.remove("required-popup");
    });
}

hideRequiredPopup(usernameInput, usernameLabel);
hideRequiredPopup(emailInput, emailLabel);
hideRequiredPopup(passwordInput, passwordLabel);


// Validar valor do input
function validateInput(input, helper, min) {
    input.addEventListener("input", function(elemento) {
        let valorInput = elemento.target.value;

        if (valorInput.length < min) {
            helper.textContent = `O campo deve conter no mínimo ${min} caracteres.`;
            helper.style.display = "block";
            input.classList.remove("success");
            input.classList.add("error");
        } else {
            helper.style.display = "none";
            input.classList.remove("error");
            input.classList.add("correct");
        }
    });
}

validateInput(usernameInput, usernameHelper, 5);
validateInput(emailInput, emailHelper, 10);
validateInput(passwordInput, passwordHelper, 6);

/*
usernameInput.addEventListener("input", function(elemento) {
    let valorInput = elemento.target.value;

    if (valorInput.length < 5) {
        usernameHelper.textContent = "O nome de usuário deve conter no mínimo 5 caracteres.";
        usernameHelper.style.display = "block";
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
    } else {
        usernameHelper.style.display = "none";
        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
    }
});
*/