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

function messageError(message){
    divError.textContent = message;
    divError.style.display = 'block'
    setTimeout(() => {
        divError.style.display = 'none'
    }, 3000)
}

questionSaveBtn.addEventListener('click', () =>{
    Questao()
    if(validQuestion()){
        console.log('pergunta salva:', questions)

        messageError('pergunta salva com sucesso')
    }
})

respostaCorreta();