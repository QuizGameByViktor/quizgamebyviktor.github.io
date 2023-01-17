const questionsList = document.getElementById("questionsList");
const Questions = JSON.parse(localStorage.getItem("Questions")) || [];

console.log(Questions)
console.log(questionsList)

questionsList.innerHTML = Questions
    .map(newQuestion => {
        return `
        <h2 class="text-center">${newQuestion.newQuestion}</h2>
        <div class="question-container">
            <p class="question-prefix">1</p>
            <p class="question-text">${newQuestion.choice1}</p>
        </div>
        <div class="question-container">
            <p class="question-prefix">2</p>
            <p class="question-text">${newQuestion.choice2}</p>
        </div>
        <div class="question-container">
            <p class="question-prefix">3</p>
            <p class="question-text">${newQuestion.choice3}</p>
        </div>
        <div class="question-container">
            <p class="question-prefix">4</p>
            <p class="question-text">${newQuestion.choice4}</p>
        </div>
        
        <p class="new-Question">Correct Answer - ${newQuestion.answer}</p>`;
    })
    .join("");