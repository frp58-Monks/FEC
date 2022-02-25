import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QuestionSummary, QuestionWrapper, QuestionBody, QuestionDate, QuestionAsker, Left } from '../Styled/QuestionListStyled.js';
import AnswerListItem from './AnswerListItem.jsx';

const QuestionListitem = (props) => {
  const [answers, setAnswers] = useState([]);
  const [question_id, setQuestion_id] = useState(props.question.question_id);

  //convert date on individual tiles
  let date = props.question.question_date.split('T');
  date = date[0];
  date = date.split('-');
  let month = Number(date[1]);
  let day = Number(date[2]);
  let year = Number(date[0]);

  let combined = new Date(`${year}, ${month}, ${day}`);
  let combinedDate = combined.toDateString();

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
        // console.log('error with answers', err);
      });
  }

  useEffect(() => {
  getAnswers()}, [question_id]);

  return (
    <Left className="QuestionListItem">
    <QuestionWrapper>
      <QuestionDate>{combinedDate}</QuestionDate>
      <QuestionAsker>Asker Name: {props.question.asker_name}</QuestionAsker>
      <QuestionSummary>Question: {props.question.question_body}</QuestionSummary>
      {answers[0] ?
        answers.map((answer, i) => (
          <QuestionBody><AnswerListItem answer={answer} key={i} /></QuestionBody>
          )) : <QuestionBody>No answers to this question yet!</QuestionBody>
        }
    </QuestionWrapper>
    </Left>
  );
}

export default QuestionListitem;

