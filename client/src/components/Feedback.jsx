import React from 'react';
import RatingReview from './RatingReview.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';

class Feedback extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <QuestionAnswer />
        <RatingReview />
      </div>
    )
  }
}

export default Feedback;