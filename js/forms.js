document.addEventListener('DOMContentLoaded', () =>{

    /* Variaveis da tela de Login */
    const container = document.querySelector('.container')
    const loginForm = document.querySelector('#form')
    const loginEmail = document.querySelector('#inputEmail')
    const loginPass = document.querySelector('#inputPass')
    const loginPassIcon = document.querySelector('.showPass')
    const loginCheck = document.querySelector('#inputCheck')
    const lembrarSenha = document.querySelector('#forgotPass')
    const loginButton = document.querySelector('#loginButton')
    const loginGoogle = document.querySelector('#hrefGoogle')
    const loginMeta = document.querySelector('#hrefMeta')
    const loginFirst = document.querySelector('#firstHref')

    /* Variaveis da rela de Cadastro */ 

    const section3 = document.querySelector('.registration')
    const formRegist = document.querySelector('#form-Regist')
    const userName = document.querySelector('#name')
    const passName = document.querySelector('#senha')
    const passIcon = document.querySelector('.mostarSenha')
    const passConfirIcon = document.querySelector('.confirSenha')
    const passNameConfirmation = document.querySelector("#confirmaçaoSenha")
    const registEmail = document.querySelector('#Email')
    const registButton = document.querySelector('#cadastro')
    const logar = document.querySelector('#hrefLogar')
    const divMessage = document.querySelector('#Error')

    /* variaveis para recuperar senha */

    const section2 = document.querySelector('.section-recover')
    const recoverInput = document.querySelector('#recoverPassword')
    const recoverButton = document.querySelector('#recoverEmail')
    const recoverHref = document.querySelector('#hrefRemenber')


registButton.addEventListener('click', (event) =>{
    event.preventDefault()
    checkInputs();
    
})
passIcon.addEventListener('click', () =>{
    togglePassword(passName, passIcon)
})
passConfirIcon.addEventListener('click', () => {
    togglePassword(passNameConfirmation, passConfirIcon)
})
loginPassIcon.addEventListener('click', () =>{
    togglePassword(loginPass, loginPassIcon)
})

logar.addEventListener('click', (e) =>{
    e.preventDefault();    
    section3.style.display = 'none'
    container.style.display = 'flex'

})

loginFirst.addEventListener('click', (e) => {
    e.preventDefault()
    container.style.display = 'none'
    section3.style.display = 'flex'
})  

lembrarSenha.addEventListener('click', (e) => {
    e.preventDefault();

    container.style.zIndex = '0'
    section2.style.zIndex = '1000'
    section2.style.display = 'flex'
})

recoverHref.addEventListener('click', (e) =>{
    e.preventDefault();

    section2.style.display = 'none'
    container.style.display = 'flex'
})

function checkInputs(){

    const userNameValue = userName.value.trim();
    const passNameValue = passName.value.trim();
    const passNameConfirmationValue = passNameConfirmation.value.trim();
    const registEmailValue = registEmail.value.trim();
    
    let error = false;
    divMessage.innerHTML = ''; 


    if(userNameValue === "" || passNameValue === "" || passNameConfirmationValue === "" || registEmailValue === ""){
        const message = document.createElement('p')
        message.textContent = 'Campos obrigatorios'
        divMessage.appendChild(message)
        formRegist.classList.add('error')
        error = true
        return
    }else{
        formRegist.classList.remove('error')
    }

    /* VALIDAÇAO DO NOME DE USUARIO */
    
    if(userNameValue === ""){
        const message = document.createElement('p')
        message.textContent = 'Insira seu nome completo.'
        divMessage.appendChild(message)
        formRegist.classList.add('error')
        error = true;
        return

    }else if(userNameValue.length < 10){
        const message = document.createElement('p')
        message.textContent = 'O nome tem que ter no mínimo 10 caracteres.'
        divMessage.appendChild(message)
        formRegist.classList.add('error')
        error = true;
        return
    }else{
        formRegist.classList.remove('error')
        error = false
    }

    /* VALIDAÇAO DA SENHA SO USUARIO */


    if(passNameValue === "" ){
        const message = document.createElement('p')
        message.textContent = 'Insira sua senha.'
        divMessage.appendChild(message)
        formRegist.classList.add('error')
        error = true;
        return

    }else if(passNameValue.length < 8){
        const message = document.createElement('p')
        message.textContent = 'A senha tem que ter no mínimo 8 caracteres.'
        divMessage.appendChild(message)
        formRegist.classList.add('error')
        error = true;
        return
    }else{
        formRegist.classList.remove('error')
        error = false
    }


    /* VALIDAÇAO DA CONFIRMAÇAO DE SENHA DO USUARIO */

    if(passNameConfirmationValue !== passNameValue){
        const message = document.createElement('p')
        message.textContent = 'As senhas não conferem.'
        divMessage.appendChild(message)
        formRegist.classList.add('error')
        error = true;
        return

    }else{
        formRegist.classList.remove('error')
        error = false
    }
    
    /* VALIDAÇAO DE EMAIL DO USUARIO*/

    if(registEmailValue === "" ){
        const message = document.createElement('p')
        message.textContent = 'Insira seu email.'
        divMessage.appendChild(message)
        formRegist.classList.add('error')
        error = true;
        return

    }else if(!validEmail(registEmailValue)){
        const message = document.createElement('p')
        message.textContent = 'Email invalido, tente novamente.'
        divMessage.appendChild(message)
        formRegist.classList.add('error')
        error = true;
        return
    }else{
        formRegist.classList.remove('error')
        error = false
    }


}

function validEmail(email){

        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        return regexEmail.test(email);
}



function togglePassword(input, icon) {

    if (input.type === "password") {
        input.type = "text"
        icon.querySelector('i').classList.add('fa-eye-slash')
    } else {
        input.type = "password"
        icon.querySelector('i').classList.remove('fa-eye-slash')
    }
}

/* funçao para respose do google */

window.handleCredentialResponse = (response) =>{
    console.log('ID Token:', response.credential)

}


window.onload = function () {
    google.accounts.id.initialize({
      client_id: '209104012971-3v08qrfpub4kctonej8jc6lnunse8fl7.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    const parent = document.getElementById('google_btn');
    google.accounts.id.renderButton(parent, {theme: "filled_blue"});
    google.accounts.id.prompt();
}

})

