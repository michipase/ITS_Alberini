
let app = new Vue({
    el: "#app",
    data() {
        return {
            quizList : [
                {
                    id: 1,
                    quiz: 'Di che colore era il cavallo bianco di napoleone?',
                    answers: [0],
                    choices : [
                            {
                                id : 0, text: 'bianco',
                                correct: true,
                            },
                            {
                                id : 1, text: 'nero',
                                correct: false,
                            },
                            {
                                id : 2, text: 'grigio',
                                correct: false,
                            },
                            {
                                id : 3, text: 'bianco',
                                correct: false,
                            },
                        ],
                },  {
                    id: 2,
                    quiz: 'Quante sono le regioni italiane?',
                    answers: [0],
                    choices: [                        
                            {
                                id : 0, text: '20',
                                correct: true,
                            },
                            {
                                id : 1, text: '21',
                                correct: false,
                            },
                            {
                                id : 2, text: '19',
                                correct: false,
                            },
                            {
                                id : 3, text: '22',
                                correct: false,
                            },
                        ]
                },  {
                    id: 3,
                    quiz: 'Chi tra questi comanda in ITS Last?',
                    answers: [2],
                    choices: [
                        {
                            id : 0, text: 'Giacomo Alberini',
                            correct: false,
                        },
                        {
                            id : 1, text: 'Sara Vedovato',
                            correct: false,
                        },
                        {
                            id :2, text: 'Zavaah',
                            correct: true,
                        },
                        {
                            id : 3, text: 'Massimo Piazza',
                            correct: false,
                        },
                    ],
                },  {
                    id: 4,
                    quiz: 'Quanto fa: 15 + 18?',
                    answers: [0],
                    choices: [
                        
                            {
                                id : 0, text: '36',
                                correct: true,
                            },
                            {
                                id : 1, text: '33',
                                correct: false,
                            },
                            {
                                id : 2, text: 'un pesce',
                                correct: false,
                            },
                        ]
                }
            ],
            currentQuizIndex: null,
            currentView: 'quiz',
            score: 0,
            risposte: {},
        }
    },
    beforeMount() {
        this.currentQuizIndex = 0;
    },
    methods: {
        avanza(){
            if(this.currentQuizIndex < this.quizList.length - 1){
                this.currentQuizIndex ++;
            } else {
                this.getScore();
            }        
        },
        retrocedi() {
            this.currentQuizIndex = this.currentQuizIndex > 0 ? this.currentQuizIndex - 1 : this.currentQuizIndex;
        },
        getScore(){
            this.currentView = 'result'; 
            
            this.quizList.forEach(quiz => {
               this.score += quiz.answers.indexOf(this.risposte[quiz.id]) > -1 ? 1 : 0;
            });
            
            
        },
        newGame(){
            this.risposte = {};
            this.currentQuizIndex = 0;
            this.currentView = 'quiz';
            
        }
    },
    computed: {
        currentQuiz(){
            return this.quizList[this.currentQuizIndex];
        },
        canGoNext(){
            return this.risposte[this.currentQuiz.id] === undefined;
        },
        canGoBack(){
            return this.currentQuizIndex === 0;
        },
        nextButtonLabel(){
            return this.currentQuizIndex === this.quizList.length -1 ? 'Invia' : 'Avanza';
        }

    }
});