import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListItem from './AnswerListItem.jsx';

const QuestionListitem = (props) => {
  const [answers, setAnswers] = useState([]);
  const [question_id, setQuestion_id] = useState(props.question.question_id);

  const getAnswers = () => {
    axios
      .get('/qa/questions/:question_id/answers', { params: {
        question_id: question_id
      }})
      .then(res => {
        const data = res.data;
        setAnswers(data.results);
      })
      .catch((err) => {
        console.log('error with answers', err);
      });
  }

  useEffect(() => {
  getAnswers()}, [question_id]);

  return (
    <div>
      Question: {props.question.question_body}
      {
        answers.map((answer, i) => (
          <AnswerListItem answer={answer} key={i} />
        ))
      }
    </div>
  );
}

export default QuestionListitem;

