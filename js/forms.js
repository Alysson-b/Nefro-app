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
    const body = document.querySelector('body')


    /* variaveis da section de create-question / historico */
    const sectionCreatQuestion = document.querySelector('.create-question')
    const editBtn = document.querySelector('.createBack')
    const editHistBtn = document.getElementById('historico')
    const histBack = document.querySelector('.histrBack')
    const starsRating = document.querySelectorAll('.stars')
    const heartRating = document.querySelectorAll('.iconHeart')
   

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

    container.style.display = 'none'
    section2.style.display = 'flex'
    
})

recoverHref.addEventListener('click', (e) =>{
    e.preventDefault();

    section2.style.display = 'none'
    container.style.display = 'flex'
})

loginButton.addEventListener('click', (e) =>{
    e.preventDefault()
    login();

})

editBtn.addEventListener('click', ()=>{
    container.style.display = 'flex'
    sectionCreatQuestion.style.display = 'none'

})
histBack.addEventListener('click', ()=>{
    sectionCreatQuestion.style.display = 'flex'
    editHistBtn.style.display = 'none'

})


    /* transiçao da tela inicial */
    
  window.onload = function () {
    setTimeout(function () {
        const mainContainer = document.getElementById('main_container');
        const inputScreen = document.getElementById('inputScreen');

        console.log("Iniciando a transição da tela de entrada...");

        mainContainer.style.display = 'flex'; 
        mainContainer.style.opacity = 0; 

        inputScreen.style.transition = 'opacity 0.5s ease-out';
        inputScreen.style.opacity = 0; 

        setTimeout(() => {
            inputScreen.style.display = 'none'; 
            console.log("Tela de entrada ocultada.");
            
            mainContainer.style.transition = 'opacity 0.5s ease-out';
            mainContainer.style.opacity = 1; 
            console.log("Tela principal exibida.");
        }, 500); 
    }, 500); 
};


function  login(){
    const loginEmailValue = loginEmail.value.trim()
    const loginPassValue = loginPass.value.trim()

    if(loginEmailValue === "" || loginPassValue === ""){
        alert('campos obrigatorios')
    }else{
        container.style.display = 'none'
        sectionCreatQuestion.style.display = 'flex'
    }

}
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

/* funçao para selecionar a quantidade de estrelas para questoes! */

starsRating.forEach((rating) => {
    const stars = rating.querySelectorAll('.fa-star')
    let starSelect = 0;

    stars.forEach((star)=>{
        star.addEventListener('click', function(){
            starSelect = this.getAttribute('data-value')

            stars.forEach((s) => s.classList.remove('select'))
            for( let i = 0; i < starSelect; i++){
                stars[i].classList.add('select')
            }
        })
    })
})
heartRating.forEach((rating) => {
    const heart = rating.querySelector('.fa-heart')

        heart.addEventListener('click', function(){
            heart.classList.toggle('select')
        })
    })
})
