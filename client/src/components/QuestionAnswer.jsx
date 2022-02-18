import React from 'react';
import QuestionListItem from './QuestionAnswer/QuestionListItem.jsx';

const QuestionAnswer = ({ questions }) => {
  let questionsArr = questions.results;

  return (
    <div>
      {
        questionsArr &&
        questionsArr.map((question, i) => (
          <QuestionListItem question={question} key={i} />
        ))
      }
    </div>
  );
}

export default QuestionAnswer;