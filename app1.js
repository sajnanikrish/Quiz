const quizData = [
    {
        'question' : "1. What is the name of the first artificial satellite launched into space?",
        'a' : "Apollo 11",
        'b' : "Sputnik 1",
        'c' : "Voyager 1",
        'd' : "Hubble",
        'correct' : "b"
    },
    {
       'question' : "2. Which planet has the strongest winds in the Solar System?",
        'a' : "Jupiter",
        'b' : "Saturn",
        'c' : "Neptune",
        'd' : "Mars",
        'correct' : "c"
    },
    {
        'question' : "3. What is the most abundant element in the universe?",
        'a' : "Oxygen",
        'b' : "Helium",
        'c' : "Hydrogen",
        'd' : "Carbon",
        'correct' : "c"
    },
    {
        'question' : "4. Which of these stars will end its life as a supernova?",
        'a' : "Red Dwarf",
        'b' : "White Dwarf",
        'c' : "Yellow Dwarf",
        'd' : "Massive Star", 
        'correct' : "d"
    },
    {
        'question' : "5. What is the name of the largest volcano in the Solar System?",
        'a' : "Mauna Loa",
        'b' : "Mount Everest",
        'c' : "Olympus Mons", 
        'd' : "Vesuvius",
        'correct' : "c"
    },
    {
        'question' : "6. Which space telescope was launched in 1990 and has provided stunning images of distant galaxies?",
        'a' : "James Webb Space Telescope",
        'b' : "Hubble Space Telescope",
        'c' : "Spitzer Space Telescope",
        'd' : "Chandra X-ray Observatory",
        'correct' : "b"
    }, 
    {
        'question' : "7. What is the Kuiper Belt primarily composed of?",
        'a' : "Metal-rich asteroids",
        'b' : "Ice and frozen gases",
        'c' : "Gas clouds",
        'd' : "Black holes",
        'correct' : "b"
    }, 
    {
        'question' : "8. What phenomenon causes the apparent backward motion of planets as seen from Earth?",
        'a' : "Gravity Assist",
        'b' : "Retrograde Motion",
        'c' : "Tidal Locking",
        'd' : "Eclipse",
        'correct' : "b"
        
    },
    {
        'question' : "9. Which planet in our Solar System has the most moons?",
        'a' : "Earth",
        'b' : "Mars",
        'c' : "Jupiter",
        'd' : "Saturn",
        'correct' : "c"
    },
    {
        'question' : "10. What is the term for the point where nothing, not even light, can escape from a black hole?",
        'a' : "Event Horizon",
        'b' : "Singularity",
        'c' : "Schwarzschild Radius",
        'd' : "Accretion Disk",
        'correct' : "a"
    }
];


let index = 0;
let correct = 0;
let incorrect = 0;
let total = quizData.length; 
let questionBox = document.querySelector("#questionbox"); 
let allInputs = document.querySelectorAll(".options"); 
const data = quizData[index];

const loadQuestion = () => {
    
    if(total===index) {
        return endQuiz(); 
    }
     
    reset();

    const data = quizData[index];
    questionBox.innerText = data.question;
    allInputs[0].nextElementSibling.innerText = data.a;           // saare options badle 
    allInputs[1].nextElementSibling.innerText = data.b;           // nextElementSibling ka matlab next element ko update karta hai
    allInputs[2].nextElementSibling.innerText = data.c;           
    allInputs[3].nextElementSibling.innerText = data.d;
}

document.querySelector("#sb-Btn").addEventListener (
    "click", 
    submitQuiz = () => {
        let ans = getAnswer();
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
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer; 
}

const reset = () => {
    allInputs.forEach (
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.querySelector(".box").innerHTML = `
    <h2> You have scored ${correct} / ${total}
    `
}

loadQuestion();