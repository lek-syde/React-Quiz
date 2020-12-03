import React, { Component } from 'react';
import Question from './questions/question'
import Answer from './answers/answer'
import './quizmain.css'


export default class Quiz extends Component{
  state = {
    questions:{
      1: 'What US city is known a the birthplace of jazz?',
      2: 'What is the capital of greece?',
      3: 'what planet gave birth to superman?'

    },
    answers: {
      1: {
        1:'chicago',
        2:'lagos',
        3:'ogunstate'
      },
      2: {
        1:'Athens',
        2:'mexico',
        3:'okofo'
      },
      3: {
        1:'Athens',
        2:'mexico',
        3:'okofo'
      }
    },
    correctAnswers:{
      1:'2',
      2:'3',
      3:'3'
    },
    correctAnswer:0,
    clickedAnswer:0,
    step: 1,
    score: 0
  }

  checkAnswer = answer =>{
      console.log("hi")
  const {correctAnswers, step, score}= this.state;
  if(answer === correctAnswers[step]){

    this.setState({

      score: score + 1,
      correctAnswer : correctAnswers[step],
      clickedAnswer : answer


    });

  }else{

    this.setState({
      correctAnswer : 0,
      clickedAnswer : answer
    });
  }
}

NextStep= step =>{
  this.setState({
    step:step+1,
    correctAnswer : 0,
    clickedAnswer : 0

  });
}

render(){
  let {questions, correctAnswer, clickedAnswer,  answers, step, score}= this.state;
  return(
    <div className="Content">
{ step <=Object.keys(questions).length ?
(  <><Question
  question={questions[step]}
  />

  <Answer
   answer= {answers[step]}
   checkAnswer={this.checkAnswer}
   step= {step}
   correctAnswer= {correctAnswer }
   clickedAnswer= {clickedAnswer }

   />

   <button
   disabled={
     clickedAnswer && Object.keys(questions).length  >= step
     ? false :true
   }
   className="NextStep"

   onClick={()=> this.NextStep(step)}
   >
   Next
    </button>
    </>):(

      <div className= "finalPage">
      <h1>you have completed the Quiz!</h1>
      <p>Your score is {score} of {Object.keys(questions).length}</p>
      <p>Thank you!</p>
      </div>
    )


}





    </div>

  );
}


}
