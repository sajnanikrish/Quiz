
const quiz4Data = [

    {
        'question' : "1. What is the principle of superposition in quantum mechanics?",
        'a' : "A particle can exist in multiple places at once",
        'b' : "A particle can only exist in one state",
        'c' : "A particle can change its state without any external force",
        'd' : "A particle cannot exist in a state of uncertainty",
        'correct' : "a"
    },
    {
        'question' : "2. Which of these is considered the 'father' of quantum mechanics?",
        'a' : "Albert Einstein",
        'b' : "Niels Bohr",
        'c' : "Werner Heisenberg",
        'd' : "Max Planck",
        'correct' : "d"
    },
    {
        'question' : "3. The famous double-slit experiment demonstrated which key quantum concept?",
        'a' : "Wave-particle duality",
        'b' : "Relativity",
        'c' : "Time dilation",
        'd' : "Energy conservation",
        'correct' : "a"
    },
    {
        'question' : "4. What does Heisenberg's Uncertainty Principle state?",
        'a' : "The position and momentum of a particle can be precisely measured simultaneously",
        'b' : "It is impossible to know both the position and momentum of a particle with perfect accuracy",
        'c' : "A particle can exist in multiple states simultaneously",
        'd' : "The wave function always collapses to a single state",
        'correct' : "b"
    },
    {
        'question' : "5. What is the phenomenon where particles can pass through a barrier that would be insurmountable in classical mechanics?",
        'a' : "Quantum tunneling",
        'b' : "Wave interference",
        'c' : "Quantum entanglement",
        'd' : "Quantum superposition",
        'correct' : "a"
    },
    {
        'question' : "6. In quantum mechanics, what is a 'quantum state' typically described by?",
        'a' : "A list of numbers",
        'b' : "A wave function",
        'c' : "A classical particle",
        'd' : "A deterministic equation",
        'correct' : "b"
    },
    {
        'question' : "7. What is the value of Planck's constant (h) in SI units?",
        'a' : "3.14 × 10^-34 J·s",
        'b' : "1.6 × 10^-19 J·s",
        'c' : "9.8 × 10^-31 J·s",
        'd' : "6.626 × 10^-34 J·s",
        'correct' : "a"
    },
    {
        'question' : "8. What does the term 'quantum entanglement' describe?",
        'a' : "Two particles becoming separated",
        'b' : "The concept of waves acting like particles",
        'c' : "The phenomenon where two particles are linked, and the state of one instantly affects the other, regardless of distance",
        'd' : "A particle moving through a barrier",
        'correct' : "c"
    },
    {
        'question' : "9. The Schrödinger equation describes the behavior of which of the following?",
        'a' : "Waves only",
        'b' : "Electrons in atoms",
        'c' : "Gravitational forces",
        'd' : "Energy fields",
        'correct' : "b"
    },
    {
        'question' : "10. What is the key feature of a quantum computer compared to a classical computer?",
        'a' : "It uses binary code",
        'b' : "It relies on quantum bits (qubits), which can be in multiple states at once",
        'c' : "It uses more electricity",
        'd' : "It solves problems faster by brute force",
        'correct' : "b"
    }
];

let index = 0;
let correct = 0
let incorrect = 0;
let total = quiz4Data.length;
let questionBox = document.querySelector("#questionbox");
let allInputs = document.querySelectorAll(".options");

const data = quiz4Data[index];

const loadQuestion = () => {
    if(total === index) {
       return endQuiz();
    }

    reset();

    const data = quiz4Data[index];
    questionBox.innerHTML = `${data.question}`; 
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;    
    allInputs[2].nextElementSibling.innerText = data.c;    
    allInputs[3].nextElementSibling.innerText = data.d;    
}

document.querySelector("#sb-Btn").addEventListener(
    "click" , 
    submitQuiz = () => {
        const ans = getAnswer();
        if(ans == data.correct) {
            correct++;
        }
        else {
            incorrect++;
        }

        index++;
        loadQuestion(index);
        return;
    }
)


const getAnswer = () => {
    let answer;
    allInputs.forEach (
        (inputs) => {
            if(inputs.checked) {
                answer = inputs.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    allInputs.forEach (
        (inputs) => {
        inputs.checked = false;
        }
    )
}

const endQuiz = () => {
    document.querySelector(".box").innerHTML = 
    `<h2> You have scored ${correct} / ${total} </h2>` 
    
}

loadQuestion();