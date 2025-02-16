const quiz3Data = [
    {
        'question' : "1. What is the primary purpose of blockchain technology?",
        'a' : "To store large files",
        'b' : "To enable secure, decentralized transactions",
        'c' : "To improve internet speed",
        'd' : "To create digital art",
        'correct' : "b"
    },
    {
        'question' : "2. Which of the following is a feature of a blockchain?",
        'a' : "Centralized",
        'b' : "Transparent and immutable",
        'c' : "Slow transactions",
        'd' : "Limited data storage",
        'correct' : "b"
    },
    {
        'question' : "3. Which cryptocurrency uses blockchain technology for transactions?",
        'a' : "Bitcoin",
        'b' : "Ethereum",
        'c' : "Litecoin",
        'd' : "All of the above",
        'correct' : "d"
    },
    {
        'question' : "4. What is a smart contract in the context of blockchain?",
        'a' : "A physical contract",
        'b' : "A computer program that automatically executes contract terms",
        'c' : "A user interface for blockchain",
        'd' : "A type of encryption",
        'correct' : "b"
    },
    {
        'question' : "5. In which year was Bitcoin, the first cryptocurrency, created?",
        'a' : "2000",
        'b' : "2008",
        'c' : "2009",
        'd' : "2010",
        'correct' : "c"
    },
    {
        'question' : "6. Which consensus algorithm does Bitcoin use?",
        'a' : "Proof of Work (PoW)",
        'b' : "Proof of Stake (PoS)",
        'c' : "Delegated Proof of Stake (DPoS)",
        'd' : "Proof of Authority (PoA)",
        'correct' : "a"
    },
    {
        'question' : "7. What does 'mining' refer to in blockchain technology?",
        'a' : "Creating new cryptocurrencies by solving mathematical problems",
        'b' : "Storing data on the blockchain",
        'c' : "Encrypting transactions",
        'd' : "Writing smart contracts",
        'correct' : "a"
    },
    {
        'question' : "8. What is the name of the first blockchain-based platform to support decentralized applications (DApps)?",
        'a' : "Bitcoin",
        'b' : "Ethereum",
        'c' : "Cardano",
        'd' : "Solana",
        'correct' : "b"
    },
    {
        'question' : "9. Which of the following is an advantage of using blockchain technology?",
        'a' : "Faster transactions than traditional banking",
        'b' : "Higher energy consumption",
        'c' : "Decentralized and secure record-keeping",
        'd' : "Limited scalability",
        'correct' : "c"
    },
    {
        'question' : "10. What is the term used for a 'block' in a blockchain?",
        'a' : "A collection of data stored in a centralized server",
        'b' : "A set of transactions that are validated and linked to previous blocks",
        'c' : "A financial transaction",
        'd' : "A file that holds smart contracts",
        'correct' : "b"
    }
];

let index = 0;
let correct = 0;
let incorrect = 0;
let total = quiz3Data.length;
let questionBox = document.querySelector("#questionbox");
let allInputs = document.querySelectorAll(".options");
const data = quiz3Data[index]; 

const loadQuestion = () => {
    
    if(total===index) {
        return endQuiz(); 
    }
     
    reset();

    const data = quiz3Data[index];
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