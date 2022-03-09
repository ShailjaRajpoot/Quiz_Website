
let questions = [
    {
        id: 1,
        question: "What is Machine learning?",
        answer: "The autonomous acquisition of knowledge through the use of computer programs",
        options: [
            "The autonomous acquisition of knowledge through the use of computer programs",
            "The autonomous acquisition of knowledge through the use of manual programs",
            "The selective acquisition of knowledge through the use of computer programs",
            "The selective acquisition of knowledge through the use of manual programs"
        ]
    },
    {
        id: 2,
        question: "Different learning methods does not include?",
        answer: "Introduction",
        options: [
            "Memorization",
            "Analog",
            "Deduction",
            "Introduction"
        ]
    },
    {
        id: 3,
        question: "In language understanding, the levels of knowledge that does not include?",
        answer: "Empirical",
        options: [
            "Phonological",
            "Syntactic",
            "Empirical",
            "Logical"
        ]
    },
    {
        id: 4,
        question: "Among the following which is not a horn clause?",
        answer: "p → Øq",
        options: [
            "P",
            "Øp V q",
            "p → q",
            "p → Øq"
        ]
    },
    {
        id: 5,
        question: "A model of language consists of the categories which does not include?",
        answer: "Structural units",
        options: [
            "Language units",
            "Role structure of units",
            "System constraints",
            "Structural units"
        ]
    },
    {
        id: 6,
        question: "Which of the factors affect the performance of learner system does not include?",
        answer: "Good data structures",
        options: [
            "Representation scheme used",
            "Training scenario",
            "Type of feedback",
            "Good data structures"
        ]
    },
    {
        id: 7,
        question: "The action ‘STACK(A, B)’ of a robot arm specify to _______________",
        answer: "Place block A on block B",
        options: [
            "Place block B on Block A",
            "Place blocks A, B on the table in that order",
            "Place block A on block B",
            "Place blocks B, A on the table in that order"
        ]
    },
    {
        id: 8,
        question: "What is a top-down parser?",
        answer: "Begins by hypothesizing a sentence (the symbol S) and successively predicting lower level constituents until individual preterminal symbols are written",
        options: [
            "Begins by hypothesizing a sentence (the symbol S) and successively predicting lower level constituents until individual preterminal symbols are written",
            "Begins by hypothesizing a sentence (the symbol S) and successively predicting upper level constituents until individual preterminal symbols are written",
            "Begins by hypothesizing lower level constituents and successively predicting a sentence (the symbol S)",
            "Begins by hypothesizing upper level constituents and successively predicting a sentence (the symbol S)"
        ]
    },
    {
        id: 9,
        question: "Which is the most straightforward approach for planning algorithm?",
        answer: "State-space search",
        options: [
            "State-space search",
            "Best-first search",
            "Depth-first search",
            "Hill-climbing search"
        ]
    },
    {
        id: 10,
        question: "What are taken into account of state-space search?",
        answer: "Both Preconditions & Effects",
        options: [
            "Post conditions",
            "Pre conditions",
            "Effects",
            "Both Preconditions & Effects"
        ]
    }
];

let question_count = 0;
let points = 0;
let total=questions.length;

sessionStorage.setItem("total",total);

window.onload = function() {
    show(question_count);

};

function next() {


    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
        location.href = "end.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}