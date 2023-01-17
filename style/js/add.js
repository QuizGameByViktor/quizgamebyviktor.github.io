const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');
const answer = document.getElementById('answer');
const Questions = JSON.parse(localStorage.getItem('Questions')) || [];

question.addEventListener('keyup', () => {
    addQuestion.disabled = !question.value;
});

saveQuestion = (e) => {
    e.preventDefault();

    const newQuestion = {
        newQuestion: question.value,
        choice1: choice1.value,
        choice2: choice2.value,
        choice3: choice3.value,
        choice4: choice4.value,
        answer: answer.value,
    };
    
    console.log(newQuestion)
    Questions.push(newQuestion);

    localStorage.setItem('Questions', JSON.stringify(Questions));
    window.location.assign('/../../pages/admin.html');
};