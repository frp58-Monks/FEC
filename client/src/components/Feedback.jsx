import React from 'react';
import RatingReview from './RatingReview.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';

const Feedback = (props) => {
  return (
    <div>
      <QuestionAnswer />
      <RatingReview />
    </div>
  )
}

export default Feedback;