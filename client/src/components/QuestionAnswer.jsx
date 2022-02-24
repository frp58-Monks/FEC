import React from 'react';
import QuestionListItem from './QuestionAnswer/QuestionListItem.jsx';
import { QuestionSectionWrapper, NoQuestion, QuestionWrapper } from './Styled/QuestionListStyled.js';

const QuestionAnswer = ({ questions }) => {
  let questionsArr = questions.results || [];

  return (
    <div>
      <h1 className="QuestionList">Questions and Answers</h1>
      {
        questionsArr.length > 0 ? <QuestionSectionWrapper> {
        questionsArr.map((question, i) => (
          <QuestionListItem
          question={question}
          key={i}
          />
          ))
        }
      </QuestionSectionWrapper> : <QuestionWrapper><NoQuestion>There are no questions about this product yet</NoQuestion></QuestionWrapper>
      }
    </div>
  );
}

export default QuestionAnswer;