import React from 'react';
import RatingReview from './RatingReview.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import StarReview from './RatingReview/StarReview.jsx';

const Feedback = ( {ratingData} ) => {
  return (
    <div>
      <QuestionAnswer />
      <StarReview />
      <RatingReview ratingData={ratingData}/>
    </div>
  )
}

export default Feedback;