import React from 'react'
import './answer.css'

const Answer = (props) => {
    let asnwer = Object.keys(props.answer)
                .map((qAnswer, i) => (
                <li className=
                {
                  props.correctAnswer ===qAnswer ?
                  'correctAns' :
                  props.clickedAnswer ===qAnswer ?
                  'clickedAns' : ''
                }

                key={qAnswer}
                 onClick={()=> props.checkAnswer(qAnswer)}>
                {props.answer[qAnswer]}
                </li>

            ));

  return(
    <>
    <ul  className="Answers">
        {asnwer}

    </ul>
    </>
  );


}

export default Answer;
