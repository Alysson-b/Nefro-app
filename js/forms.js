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
    const editHistBtn = document.querySelector('.historico')
    const histBack = document.querySelector('.histrBack')
    const starsRating = document.querySelectorAll('.stars')
    const heartRating = document.querySelectorAll('.iconHeart')
    
    /* variaveis da tela all test */
    const newQuestion = document.querySelector(".newQuestion")
    const newtest = document.querySelector(".newtest")
    const allTest = document.querySelector('.all-tests')


    /* barra de navegaçao */
    const iconHome = document.querySelector('.house')
    const iconBook = document.querySelector('.book')
    const iconClock = document.querySelector('.clock')
    const navigation = document.querySelector('.navigation');
    const navBar = document.querySelector('.navigation ul');
    const indicator = document.querySelector('.indicador');
    const navItems = document.querySelectorAll('.navigation ul li');

    const screens = document.querySelectorAll(".screen")
    const navScreens = ["home", "allTests", "historico",];

    let scrollTop = 0

    window.addEventListener("scroll", ()=>{
        const scroll = window.pageYOffset || document.documentElement.scroll;
        if(scroll > scrollTop){
            navigation.classList.add("hidden")
        }else{
            navigation.classList.remove("hidden")
        }
        scrollTop = scroll
    })
    
function updateIndicator() {
    const activeItem = document.querySelector('.navigation ul li.active');
    if (activeItem) {
        const activeRect = activeItem.getBoundingClientRect();
        const navRect = navBar.getBoundingClientRect();
        const leftOffset = activeRect.left - navRect.left + (activeRect.width / 2) - (indicator.offsetWidth / 2);
        indicator.style.left = `${leftOffset}px`;
    }
}
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navItems.forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        updateIndicator(); 
    });
});

window.addEventListener('resize', updateIndicator);
updateIndicator();

function showSection(sectionToShow) {
        const sections = [home, allTest, editHistBtn];
        sections.forEach(section => section.style.display = "none");
        sectionToShow.style.display = "flex";
    }

function showScreen(screenId, isCreateQuestion = false){

    screens.forEach(screen =>{
        screen.classList.remove("active")
    })

    const activeScreen = document.getElementById(screenId)

    if (!activeScreen) {
        console.log("Tela não encontrada:", screenId);
        return;
    }
    activeScreen.classList.add("active");

    if (navigation) {
        if (isCreateQuestion) {
            navigation.style.display = 'none';
            
        } else {
            navigation.style.display = navScreens.includes(screenId) ? "block" : "none";
        }
    }
}
showScreen('container')

document.querySelectorAll('li').forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        showScreen(navScreens[index]);
    });
});


iconHome.addEventListener('click', function(e){
    e.preventDefault()
    showSection(home)
})
iconBook.addEventListener('click', function(e){
    e.preventDefault()
    showSection(allTest)
})
iconClock.addEventListener('click', function(e){
    e.preventDefault()
    showSection(editHistBtn)
})

const list = document.querySelectorAll(".navigation li");
list[0].classList.add("active");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

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
    showScreen("home")
})
editBtn.addEventListener('click', ()=>{
    home.style.display = 'flex'
    sectionCreatQuestion.style.display = 'none'
    navigation.style.display = "flex"
})
histBack.addEventListener('click', ()=>{
    home.style.display = 'flex'
    editHistBtn.style.display = 'none'
    /* navigation.style.display = "flex" */
})

newQuestion.addEventListener('click', function(e){
    e.preventDefault()
    allTest.style.display = 'none'
    sectionCreatQuestion.style.display = "flex"
    navigation.style.display = "none"
    
})
all.addEventListener("click", (e)=>{
    e.preventDefault()
    home.style.display = "none"
    allTest.style.display = "flex"
})

document.querySelector('.iconPerf').addEventListener("click", ()=>{
    const dadosDesempenho = document.querySelector(".boxDesempenho")
    dadosDesempenho.classList.toggle('active')
})

    /* transiçao da tela inicial */
window.onload = function () {
    setTimeout(function () {
        const mainContainer = document.getElementById('main_container');
        const inputScreen = document.getElementById('inputScreen');
        mainContainer.style.display = 'flex'; 
        mainContainer.style.opacity = 0; 
        inputScreen.style.transition = 'opacity 0.5s ease-out';
        inputScreen.style.opacity = 0; 

        setTimeout(() => {
            inputScreen.style.display = 'none'; 
            mainContainer.style.transition = 'opacity 0.5s ease-out';
            mainContainer.style.opacity = 1; 
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
        home.style.display = 'flex'
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

    }else if(userNameValue.length < 6){
        const message = document.createElement('p')
        message.textContent = 'O nome tem que ter no mínimo 6 caracteres.'
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

heartRating.forEach((rating) => {
    const heart = rating.querySelector('.fa-heart')

        heart.addEventListener('click', function(){
            heart.classList.toggle('select')
        })
    })
})

    /* variais da tela Home */
const config = document.querySelector('.iconConfig'); 
const popUser = document.querySelector('.popUpUser'); 
const home = document.querySelector('.userHome')
const overlay2 = document.querySelector('.overlay2');
const all = document.querySelector(".icon-tests p")

config.addEventListener('click', popUpOpen);

function popUpOpen() {
    const Visible = popUser.style.display === 'flex';
    popUser.style.display = Visible ? 'none' : 'flex'; 
    overlay2.style.display = Visible ? 'none' : 'block';
}

document.addEventListener('click', function(event) {

    if (!popUser.contains(event.target) && !config.contains(event.target)) {
        popUser.style.display = 'none';
        overlay2.style.display = 'none'; 

    }
});
document.querySelector('.creationIcon').addEventListener('click', function() {
    const modal = document.querySelector('.modalCreate');
    modal.classList.toggle('show');
}); 

document.addEventListener('click', function(event) {
    const modal = document.querySelector('.modalCreate');
    const icon = document.querySelector('.creationIcon');
    
    if (!modal.contains(event.target) && !icon.contains(event.target)) {
        modal.classList.remove('show');
    }
});

/* Adicionar tags para uma busca mais rapida */
const addCategoryInput = document.querySelector(".AddCategory");

addCategoryInput.addEventListener('keydown', (event) =>{
        if(event.key === "Enter"){
            createCategory()
            event.preventDefault()
        }
    })

function createCategory() {

    const addCategoryValue = addCategoryInput.value.trim();
    const categoryContainer = document.querySelector(".categoria");
    const tags = categoryContainer.querySelectorAll('.group')

    if(tags.length >= 3){
        alert("Voçe só pode adicionar 3 tags.")
        return
    }
    
    if (addCategoryValue === "") {
        alert("Por favor, insira uma categoria válida.");
        return;
    }

    
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("group");

    const categoryParagraph = document.createElement("p");
    categoryParagraph.textContent = addCategoryValue;

    const removeIcon = document.createElement("span");
    removeIcon.innerHTML = "<i class='bx bx-x'></i>";
    removeIcon.style.cursor = "pointer";

    
    removeIcon.addEventListener("click", () => {
        groupDiv.remove();
    });

    categoryParagraph.appendChild(removeIcon);
    groupDiv.appendChild(categoryParagraph);


    categoryContainer.appendChild(groupDiv);

    addCategoryInput.value = "";
}

/* funçao para selecionar a quantidade de estrelas para questoes! */
/* starsRating.forEach((rating) => {
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
}) */

