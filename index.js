
let answer = document.getElementById('one')

let answerScreen = document.getElementsByClassName('resolved-function-screen')
let showAnswerBtn = document.getElementsByClassName('show-answer-btn')
let hideAnswerBtn = document.getElementsByClassName('hide-screen-btn')




for (let i = 0; i < showAnswerBtn.length ; i++) {
    showAnswerBtn[i].addEventListener('click', function() {
        answerScreen[i].style.display = 'block'  
        hideAnswerBtn[i].style.display = 'block'  
        
    })


}
for (let j = 0; j < hideAnswerBtn.length ; j++) {

hideAnswerBtn[j].addEventListener('click', function() {
    answerScreen[j].style.display = 'none' 
    hideAnswerBtn[j].style.display = 'none'   
}) 
}