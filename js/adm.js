const questions = {
    questoes: "",
    respostas: ["", "", "", "", ""],
    correta: null,
    explicaçao: ""
}

const textArea = document.getElementById('textQuest')
const questionInput = document.querySelectorAll('.input-question input')
const questionSaveBtn = document.querySelector('.saveBtn button')
const explicationText = document.querySelector('.explication-text')
const switchCheck = document.querySelectorAll('.switch input')
const divError = document.getElementById('msgError')


const btnGabarito = document.querySelector('.gab-btn1')
const btnImagen = document.querySelector('.gab-btn2')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const uploadImg = document.querySelector('.uploadImg')
const editQuestion = document.querySelector(".edit-questao")
const filterQuestion = document.querySelector('.filter-question')
const divQuestions = document.querySelector('.questions')
const subSection = document.querySelector(".subSection")
const questionContainer = document.querySelector(".questionContainer")


function Questao() {
    questions.questoes = textArea.value
    questionInput.forEach((input, index) => {
        questions.respostas[index] = input.value
    });
    questions.explicaçao = explicationText.value

}

function respostaCorreta() {
    switchCheck.forEach((switch_, index)  => {
        switch_.addEventListener('change', ()=>{
            if(switch_.checked){
                questions.correta= index

                switchCheck.forEach((restSwitch, restIndex) => {
                    if(restIndex !== index) restSwitch.checked = false
                })
            }else{
                questions.correta = null
            }
        })
    })
}

function validQuestion() {
    if(questions.questoes.trim() === ''){
        messageError('Por favor, insira o enuciado da questão.')
        return false
    }
    if(questions.respostas.some( correta => correta.trim() === "")){
        messageError('Preencha todas as opções de respostas.')
        return false
    }
    if(questions.correta === null){
        messageError('Selecione a reposta correta.')
        return false
    }
    return true
}

function messageError(message, isSuccess = false){
    divError.textContent = message;
    divError.style.display = 'block'
    setTimeout(() => {
        divError.style.display = 'none'
        if(!isSuccess) returnToScreen()
    }, 3000)
}

questionSaveBtn.addEventListener('click', () =>{
    Questao()
    if(validQuestion()){
        console.log('pergunta salva:', questions)
        messageError('pergunta salva com sucesso')

    }
})
function returnToScreen() {
    editQuestion.style.display = 'flex';
    divQuestions.style.display = 'flex';
    filterQuestion.style.display = 'flex';
    questionContainer.style.display = 'flex';
    subSection.style.display = 'none';
}

respostaCorreta();

btnGabarito.addEventListener('click', function(event){
    event.preventDefault()

    editQuestion.style.display = 'none'
    divQuestions.style.display = 'none'
    filterQuestion.style.display = 'none'
    questionContainer.style.display = 'none'
    subSection.style.display = 'flex'


})

btnImagen.addEventListener('click', togglePopup)
overlay.addEventListener('click', togglePopup)
uploadImg.addEventListener('click', togglePopup)

function togglePopup() {
    const isVisible = modal.style.display === 'flex';
    modal.style.display = isVisible ? 'none' : 'flex';
    overlay.style.display = isVisible ? 'none' : 'block';
}

modal.addEventListener('click', function(event){
    if(event.target === modal || event.target.classList.contains('overlay')) {
        togglePopup()
    }
})


/* window.addEventListener("resize", () => {
    const navBar = document.getElementById("navBar");
    const iconConfig = document.querySelector(".iconConfig");
    const gearIcon = document.querySelector(".gear-icon");
    const windowWidth = window.innerWidth;

    if (windowWidth >= 800) {
        // Mover a navegação para o container do ícone no desktop
        if (!iconConfig.contains(navBar)) {
            iconConfig.appendChild(navBar);
            navBar.style.display = "flex";
            gearIcon.style.display = "none"; // Esconde o ícone de engrenagem
        }
    } else {
        // Voltar a navegação para fora no mobile
        const homePage = document.querySelector(".homePage");
        if (!homePage.contains(navBar)) {
            homePage.appendChild(navBar);
            navBar.style.display = "none"; // Oculta no mobile
            gearIcon.style.display = "inline-block"; // Mostra o ícone de engrenagem
        }
    }
});

// Executa ao carregar a página para garantir o comportamento inicial
window.dispatchEvent(new Event("resize"));
 */
