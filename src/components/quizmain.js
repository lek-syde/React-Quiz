import React, { Component } from 'react';
import Question from './questions/question'
import Answer from './answers/answer'
import './quizmain.css'


export default class Quiz extends Component{
  state = {
    questions:{
      1: 'When was github founded?',
      2: 'What is the capital of india?',
      3: 'Which is the largest country in the world?'

    },
    answers: {
      1: {
        1:'2006',
        2:'2007',
        3:'2008'
      },
      2: {
        1:'New Delhi',
        2:'Mexico',
        3:'Abuja'
      },
      3: {
        1:'India',
        2:'USA',
        3:'Russia'
      }
    },
    correctAnswers:{
      1:'3',
      2:'1',
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
