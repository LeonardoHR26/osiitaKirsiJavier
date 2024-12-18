"use strict";
const validarPassword = () => {
    const userInput = document.getElementById("user");
    const userPassword = document.getElementById("password");
    const ejemplo = document.getElementById("ejemplo");
    const userKirsi = `osiita`;
    const passwordKirsi = `osiita`;
    if (userInput.value == userKirsi && userPassword.value == passwordKirsi) {
        ejemplo.textContent = "Hooola";
        window.open('./osiita/osiita.html');
    }
    else {
        alert('Contraseña o Usuario incorrecto');
    }
};
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", validarPassword);
