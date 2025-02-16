const quiz2Data = [
    {
        'question' : "1. Which of the following is NOT a programming language?",
        'a' : "Python",
        'b' : "Java",
        'c' : "HTML",
        'd' : "C++",
        'correct' : "c"
    }, 
    {
        'question' : "2. What does OOP stand for in programming?",
        'a' : "Object-Oriented Programming",
        'b' : "Open-Operational Process",
        'c' : "Output-Oriented Program",
        'd' : "Overload-Oriented Paradigm",
        'correct' : "a"
    }, 
    {
        'question' : "3. In Python, what is the output of 3 * '7'?",
        'a' : "21",
        'b' : "777",
        'c' : "37",
        'd' : "Error",
        'correct' : "b"
    },
    {
        'question' : "4. Which of the following is used to find errors in code?",
        'a' : "Compiler",
        'b' : "Debugger",
        'c' : "Assembler",
        'd' : "Interpreter",
        'correct' : "b"
    },
    {
        'question' : "5. What is the correct syntax to output 'Hello, World!' in Java?",
        'a' : "echo('Hello, World!'); ",
        'b' : "Console.WriteLine('Hello, World!'); ",
        'c' : "print('Hello, World!'); ",
        'd'  : "System.out.println('Hello, World!'); ",
        'correct' : "d"
    },
    {
        'question' : "6. Which data structure uses FIFO (First In, First Out) principle?",
        'a' : "Stack",
        'b' : "Queue",
        'c' : "Tree",
        'd' : "Graph",
        'correct' : "b"
    },
    {
        'question' : "7. What does the == operator do in most programming languages?",
        'a' : "Assigns a value",
        'b' : "Checks for equality",
        'c' : "Increments a value",
        'd' : "Ends a program",
        'correct' : "b"
    },
    {
        'question' : "8. Which of the following is a backend programming language?",
        'a' : "CSS",
        'b' : "HTML",
        'c' : "Java",
        'd' : "Bootstrap",
        'correct' : "c"
    },
    {
        'question' : `9. What will be the output of the following C code? 
        int a = 5;  
        printf("%d", a++);`,
        'a' : "6",
        'b' : "4",
        'c' : "5",
        'd' : "Error",
        'correct' : "c"
    }, 
    {
        'question' : "10. Which algorithm is commonly used for searching in sorted arrays?",
        'a' : "Bubble Sort",
        'b' : "Merge Sort",
        'c' : "Binary Search",
        'd' : "Linear Search",
        'correct' : "c"
    }
]



let index = 0;
let correct = 0;
let incorrect = 0;
let total = quiz2Data.length; 
let questionBox = document.querySelector("#questionbox"); 
let allInputs = document.querySelectorAll(".options"); 
const data = quiz2Data[index];

const loadQuestion = () => {
    
    if(total===index) {
        return endQuiz(); 
    }
     
    reset();

    const data = quiz2Data[index];
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