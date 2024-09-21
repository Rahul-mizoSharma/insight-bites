const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b",
    },
        {
            question: "What is the capital of Iraq?",
            a: "Baghdad",
            b: "Basra",
            c: "Mosul",
            d: "Erbil",
            correct: "a",
        },
        {
            question: "What is the primary function of the bark of a tree?",
            a: "To protect the tree",
            b: "To transport nutrients",
            c: "To produce leaves",
            d: "To absorb water",
            correct: "a",
        },
        {
            question: "What is the capital of Iran?",
            a: "Tehran",
            b: "Isfahan",
            c: "Shiraz",
            d: "Tabriz",
            correct: "a",
        },
        {
            question: "What is the main ingredient in a kebab?",
            a: "Meat",
            b: "Vegetables",
            c: "Bread",
            d: "All of the above",
            correct: "d",
        },
        {
            question: "What is the capital of Syria?",
            a: "Damascus",
            b: "Aleppo",
            c: "Homs",
            d: "Latakia",
            correct: "a",
        },
        {
            question: "What is the primary function of the roots of a plant?",
            a: "To absorb water and nutrients",
            b: "To produce flowers",
            c: "To photosynthesize",
            d: "To support the plant",
            correct: "a",
        },
        {
            question: "What is the capital of Jordan?",
            a: "Amman",
            b: "Irbid",
            c: "Zarqa",
            d: "Aqaba",
            correct: "a",
        },
        {
            question: "What is the main ingredient in a tabbouleh?",
            a: "Parsley",
            b: "Tomato",
            c: "Bulgar",
            d: "All of the above",
            correct: "d",
        },
        {
            question: "What is the capital of Yemen?",
            a: "Sana'a",
            b: "Aden",
            c: "Taiz",
            d: "Hodeidah",
            correct: "a",
        },
        {
            question: "What is the primary function of the roots of a plant?",
            a: "To absorb water and nutrients",
            b: "To produce flowers",
            c: "To photosynthesize",
            d: "To support the plant",
            correct: "a",
        },
        {
            question: "What is the capital of Saudi Arabia?",
            a: "Riyadh",
            b: "Jeddah",
            c: "Mecca",
            d: "Dammam",
            correct: "a",
        },
        {
            question: "What is the main ingredient in a kofta?",
            a: "Meat",
            b: "Rice",
            c: "Vegetables",
            d: "All of the above",
            correct: "d",
        },
        {
            question: "What is the capital of the United Arab Emirates?",
            a: "Abu Dhabi",
            b: "Dubai",
            c: "Sharjah",
            d: "Ajman",
            correct: "a",
        },
        {
            question: "What is the primary function of flowers in a plant?",
            a: "To produce seeds",
            b: "To attract pollinators",
            c: "To store nutrients",
            d: "Both a and b",
            correct: "d",
        },
        {
            question: "What is the capital of Oman?",
            a: "Muscat",
            b: "Salalah",
            c: "Sohar",
            d: "Nizwa",
            correct: "a",
        },
        {
            question: "What is the main ingredient in a biryani?",
            a: "Rice",
            b: "Meat",
            c: "Spices",
            d: "All of the above",
            correct: "d",
        },
        {
            question: "What is the capital of Qatar?",
            a: "Doha",
            b: "Al Rayyan",
            c: "Al Wakrah",
            d: "Al Khor",
            correct: "a",
        },
        {
            question: "What is the primary function of the bark of a tree?",
            a: "To protect the tree",
            b: "To transport nutrients",
            c: "To produce leaves",
            d: "To absorb water",
            correct: "a",
        },
        {
            question: "What is the capital of Bahrain?",
            a: "Manama",
            b: "Riffa",
            c: "Muharraq",
            d: "Sitra",
            correct: "a",
        },
        {
            question: "What is the main ingredient in a falafel?",
            a: "Chickpeas",
            b: "Lentils",
            c: "Beans",
            d: "Peas",
            correct: "a",
        },
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <label><input type="radio" name="answer" value="a">${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b">${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c">${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d">${currentQuizData.d}</label><br>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return undefined;
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
        }
    }
});

loadQuestion();