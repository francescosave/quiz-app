import React, { useRef } from 'react'
import { useState } from 'react'
import './Quiz.css'
import { data } from '../assets/data.js'

const Quiz = () => {

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let option_array = [option1, option2, option3, option4];


  const ceckAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct")
        setLock(true);
      } else {
        e.target.classList.add("wrong")
        setLock(true);
        option_array[question.ans - 1].current.classList.add('correct');
      }
    }
  }

  const next = () => {
    if (lock) {
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((optio) => {
          optio.current.classList.remove("wrong");
          optio.current.classList.remove("correct");
          return null;
      });
    }
  }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}.{question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e) => { ceckAns(e, 1) }}>{question.option1}</li>
        <li ref={option2} onClick={(e) => { ceckAns(e, 2) }}>{question.option2}</li>
        <li ref={option3} onClick={(e) => { ceckAns(e, 3) }}>{question.option3}</li>
        <li ref={option4} onClick={(e) => { ceckAns(e, 4) }}>{question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">{index + 1} of {data.length} questions</div>
    </div>
  )
}

export default Quiz