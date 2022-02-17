import React from 'react';
// import ReviewList from './RatingReview/ReviewList.jsx';
import ReviewListItem from './RatingReview/ReviewListItem.jsx';
import axios from 'axios';
import RatingBreakdown from './RatingReview/RatingBreakdown.jsx';
import ProgressBar from './RatingReview/ProgressBar.jsx';

//takes in product_id prop from feedback
const RatingReview = ({ reviews, reviewStars, meta }) => {
  let resultsArr = reviews.results;
  // console.log('review meta', meta);
  return (
    <div>
      <RatingBreakdown reviewStars={reviewStars}/>
      <ProgressBar reviewStars={reviewStars} meta={meta}/>
      {
        resultsArr &&
        resultsArr.map((item, i) => (
          <ReviewListItem item={item} key={i} />
        ))
      }
    </div>
  )
}

export default RatingReview;

// !resultsArr ? null :
