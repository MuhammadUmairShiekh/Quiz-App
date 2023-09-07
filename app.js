const question = [
    {
        "ques": "What is the color of blood when it's inside your body?",
        "ans1": "Blue",
        "ans2": "White",
        "ans3": "Red",
        "ans4": "Green",
        "correct": "ans3",
    },


    {
        "ques": "Which is the fastest bird in the world?",
        "ans1": "Bald Eagle",
        "ans2": "Peregrine Falcon",
        "ans3": "Hummingbird",
        "ans4": "Hummingbird",
        "correct": "ans2",
    },


    {
        "ques": "What letter is not present anywhere on the periodic table of elements? ",
        "ans1": "Q",
        "ans2": "J",
        "ans3": "F",
        "ans4": "X",
        "correct": "ans2",
    },

    {
        "ques": "What is the tallest waterfall in the world?  ",
        "ans1": "Angel Falls, Venezuela",
        "ans2": "Niagara Falls, New York",
        "ans3": "Sutherland Falls, New Zealand",
        "ans4": "Wailua Falls, Hawaii",
        "correct": "ans1",
    },

    {
        "ques": "Which of these foods will never spoil?  ",
        "ans1": "Honey",
        "ans2": "Beef Jerky",
        "ans3": "Cereal",
        "ans4": "Beans",
        "correct": "ans1",
    },
];

let total = question.length
let right = 0, wrong = 0;
let index = 0;
let count = document.getElementById("count")
const quesList = document.getElementById("quesList")
const optionInpt = document.querySelectorAll(".optionAll")
// const btn = document.querySelector(".sub")
const loadFunction = () => {
    if (index === total) {
        return endQuiz()
    }
    resestQuiz()
    const data = question[index]
    quesList.innerText = `Ques ${index + 1}:  ${data.ques}`
    optionInpt[0].nextElementSibling.innerText = data.ans1;
    optionInpt[1].nextElementSibling.innerText = data.ans2;
    optionInpt[2].nextElementSibling.innerText = data.ans3;
    optionInpt[3].nextElementSibling.innerText = data.ans4;
}

let ready = document.querySelector(".ready")
const sub = () => {
    const data = question[index]
    count.innerText = `Out Of: ${index + 2}/5`
    const ans = getAnswer()
    if (ans === data.correct) {
        right++



    }
    else {
        wrong++



    }
    index++
    loadFunction()
    return



}


const getAnswer = () => {
    let answer;
    optionInpt.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        })
    return answer
}

const resestQuiz = () => {
    optionInpt.forEach(
        (input) => {
            input.checked = false


        })
}

const endQuiz = () => {
    if (right === 2 || right == 3) {

        document.querySelector(".child-container").innerHTML = `
      
    <h4> Thanks For Playing the Quiz </h4>
    <span>  ${right} / ${total} are correct you win </span>  
    <button onclick="res()"> Play Again </button>    
    `
    } else if (right == 1 || right == 0) {
        document.querySelector(".child-container").innerHTML = `
    <h5> You Are Fail please try again later </h5>
    <span>  ${right} / ${total} are correct you fail </span> 
    <button onclick="res()" > Play Again </button>
    `
    };




}

const res = () => {
    window.location.href = "./quiz.html"
}






loadFunction()