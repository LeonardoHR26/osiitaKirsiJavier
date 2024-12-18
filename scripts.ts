

const validarPassword = () => {
    const userInput: HTMLInputElement = document.getElementById("user") as HTMLInputElement;
    const userPassword: HTMLInputElement = document.getElementById("password") as HTMLInputElement;

    const userKirsi: string = `osiita`;
    const passwordKirsi: string = `osiita`;


        if (userInput.value == userKirsi && userPassword.value == passwordKirsi){
            window.open('./osiita/osiita.html')
        } else {
            alert('Contraseña o Usuario incorrecto, intente denuevo')
        }
    }

    const loginButton: HTMLButtonElement = document.getElementById("login-button") as HTMLButtonElement;

    loginButton.addEventListener("click",validarPassword);
