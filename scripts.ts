

const validarPassword = () => {
    const userInput: HTMLInputElement = document.getElementById("user") as HTMLInputElement;
    const userPassword: HTMLInputElement = document.getElementById("password") as HTMLInputElement;

    const ejemplo: HTMLParagraphElement = document.getElementById("ejemplo") as HTMLParagraphElement;

    const userKirsi: string = `osiita`;
    const passwordKirsi: string = `osiita`;


        if (userInput.value == userKirsi && userPassword.value == passwordKirsi){
            ejemplo.textContent = "Hooola";
            window.open('./osiita/osiita.html')
        } else {
            alert('Contraseña o Usuario incorrecto')
        }
    }

    const loginButton: HTMLButtonElement = document.getElementById("login-button") as HTMLButtonElement;

    loginButton.addEventListener("click",validarPassword);