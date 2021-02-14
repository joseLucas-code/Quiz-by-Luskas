const quizContainer = document.querySelector('.quiz-container')
const questionsLeftEl = document.querySelector('.questions-left')
const questionEl = document.querySelector('.question')
const answerEls = document.querySelectorAll('.answer')
const questionWraper = document.querySelectorAll('.question-wraper')
const submitBtn = document.querySelector('.submit-quiz')

const answerA = document.querySelector('.question-wraper label.answerA')
const answerB = document.querySelector('.question-wraper label.answerB')
const answerC = document.querySelector('.question-wraper label.answerC')
const answerD = document.querySelector('.question-wraper label.answerD')

const wrapperA = document.querySelector('.question-wraper.A')
const wrapperB = document.querySelector('.question-wraper.B')
const wrapperC = document.querySelector('.question-wraper.C')
const wrapperD = document.querySelector('.question-wraper.D')

let score = 0
let currentQuestion = 0
const allQuestions = [
    {
        question: 'Eu prefiro Calor ou Frio?',
        a: 'Frio',
        b: 'Calor',
        c: '',
        d: '',
        correct: 'a'
    },
    {
        question: 'Qual o meu Primeiro nome?',
        a: 'João',
        b: 'Lucas',
        c: 'José',
        d: 'Alfredo',
        correct: 'c'
    },
    {
        question: 'Qual minha cor favorita?',
        a: 'Azul',
        b: 'Vermelho',
        c: 'Preto',
        d: 'Rosa',
        correct: 'c'
    },
    {
        question: 'Qual a minha idade?',
        a: '19',
        b: '21',
        c: '22',
        d: '20',
        correct: 'd'
    },
    {
        question: 'Qual meu personagem de Harry Potter Favorito?',
        a: 'Sirius Black',
        b: 'Hermione',
        c: 'Harry Potter',
        d: 'R.J Lupin',
        correct: 'a'
    },
    {
        question: 'Qual minha comida favorita?',
        a: 'Frango',
        b: 'Batata',
        c: 'Sorvete',
        d: 'Alface',
        correct: 'a'
    },
    {
        question: 'Qual minha altura?',
        a: '1,70m',
        b: '1,67m',
        c: '1,80m',
        d: '1,87m',
        correct: 'd'
    },
    {
        question: 'Qual minha linguagem de programação favorita?',
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'C#',
        correct: 'b'
    },
    {
        question: 'Qual minha bebida favorita?',
        a: 'Coca-cola',
        b: 'Fanta Laranja',
        c: 'Pepsi',
        d: 'Guaraná',
        correct: 'c'
    },
    {
        question: 'Qual a minha data de aniversário?',
        a: '23/07/2001',
        b: '25/03/2000',
        c: '13/12/2001',
        d: '23/07/2000',
        correct: 'd'
    },
    {
        question: 'Qual o comprimento do meu cabelo?',
        a: 'Curto',
        b: 'Grande',
        c: '',
        d: '',
        correct: 'b'
    },
    {
        question: 'Eu uso mais...',
        a: 'Instagram',
        b: 'Facebook',
        c: 'Snapchat',
        d: 'Telegram',
        correct: 'a'
    },
    {
        question: 'EU ODEIO LIGAÇOES?!',
        a: 'Verdade',
        b: 'Mentira',
        c: '',
        d: '',
        correct: 'a'
    },
    {
        question: 'Eu gosto mais de...',
        a: 'Pizza',
        b: 'Hambúrguer',
        c: '',
        d: '',
        correct: 'b'
    },
    {
        question: 'Qual meu gênero de filme eu prefiro?',
        a: 'Ação',
        b: 'Comédia',
        c: 'Ficção cientifica',
        d: 'Romance',
        correct: 'c'
    },
    {
        question: 'Eu prefiro...',
        a: 'Cachorro',
        b: 'Gato',
        c: '',
        d: '',
        correct: 'a'
    },
    {
        question: 'Eu tenho um segredo que nem mesmo os/as melhores amigos(as) sabem.',
        a: 'Verdade',
        b: 'Mentira',
        c: '',
        d: '',
        correct: 'a'
    },
    
]
const totalQuestions = allQuestions.length


function getAnswer(){
    let answer;
    
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    
    return answer;
    
}

function deselectAnswer(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false
    })
}

function loadQuestion(){
    deselectAnswer()
    
    let questions = allQuestions[currentQuestion]
    
    if(currentQuestion < 9){
        questionsLeftEl.innerText = `Pergunta 0${currentQuestion + 1}/${allQuestions.length}`
    }else{
        questionsLeftEl.innerText = `Pergunta ${currentQuestion + 1}/${allQuestions.length}`
    }
    
    questionEl.innerText = questions.question
    answerA.innerText = questions.a
    answerB.innerText = questions.b
    answerC.innerText = questions.c
    answerD.innerText = questions.d
    
    if(answerC.textContent === ''){
        wrapperC.style.display = 'none'
    }else{
        wrapperC.style.display = 'flex'
    }
    
    if(answerD.textContent === ''){
        wrapperD.style.display = 'none'
    }else{
        wrapperD.style.display = 'flex'
    }
    
}

function results(){
    if(score <= 6){
        quizContainer.style.padding = '15px 15px 5px 15px'
        quizContainer.style.backgroundColor = 'red'
        quizContainer.innerHTML = `
        <h2 style="text-align: center;">Parabens seu cocô💩, você acertou 0${score}/${allQuestions.length}</h2>
        <button onclick="window.location.reload()">Recomeçar</button>
        `
    }else if(score >= 7 && score <= 13){
        quizContainer.style.padding = '15px 15px 5px 15px'
        quizContainer.style.color = 'black'
        quizContainer.style.backgroundColor = 'yellow'
        if(score < 10){
            quizContainer.innerHTML = `<h2 style="text-align: center;">Parabens 😐🙄, você acertou 0${score}/${allQuestions.length}</h2>
            <button onclick="window.location.reload()">Recomeçar</button>
            `
        }else{
            quizContainer.innerHTML = `<h2 style="text-align: center;">Parabens 😐🙄, você acertou ${score}/${allQuestions.length}</h2>
            <button onclick="window.location.reload()">Recomeçar</button>
            `
        }
    }else{
        quizContainer.style.padding = '15px 15px 5px 15px'
        quizContainer.style.backgroundColor = 'green'
        quizContainer.innerHTML = `
        <h2 style="text-align: center;">Parabens 🥰❤😎, você acertou ${score}/${allQuestions.length}</h2>
        <button onclick="window.location.reload()">Recomeçar</button>
        `
    }
}

questionWraper.forEach((answer,answerIndex) =>{
    answer.addEventListener('click', ()=>{
        questionWraper.forEach(item => item.classList.remove('selectedAnswer'))
        questionWraper[answerIndex].classList.add('selectedAnswer')
    })
})

submitBtn.addEventListener('click', ()=>{
    getAnswer()
    let answer = getAnswer()
    questionWraper.forEach(item => item.classList.remove('selectedAnswer'))
    
    if(answer){
        if(answer === allQuestions[currentQuestion].correct){
            score++
        };
        currentQuestion++
        if(currentQuestion < totalQuestions){
            loadQuestion()
            
        }else{
            results()
        }
    }
        
    
})

loadQuestion();

