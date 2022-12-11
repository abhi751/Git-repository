let num1= Math.ceil(Math.random()*10);
let num2= Math.ceil(Math.random()*10);
let QuestionElement=document.getElementById("question");
QuestionElement.innerText=`What is ${num1} multiply by ${num2}?`;
let formelement=document.getElementById("form");
let inputelement=document.getElementById("input");
let CorrectAnswer=num1*num2;
let ScoreElement=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0
}
ScoreElement.innerText=`score:${score}`;
formelement.addEventListener("submit",()=>{
    let UserAnswer= +inputelement.value;
    if(UserAnswer==CorrectAnswer){
        score++
        UpdateLocalStorage()
    }else{
        score--
        UpdateLocalStorage()
    }
})
function UpdateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
