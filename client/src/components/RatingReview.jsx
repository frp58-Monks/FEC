import React from 'react';
// import ReviewList from './RatingReview/ReviewList.jsx';
import ReviewListItem from './RatingReview/ReviewListItem.jsx';
import axios from 'axios';
import RatingBreakdown from './RatingReview/RatingBreakdown.jsx';

//takes in product_id prop from feedback
const RatingReview = ({ reviews, reviewStars }) => {
  let resultsArr = reviews.results;

  return (
    <div>
      <RatingBreakdown reviewStars={reviewStars}/>
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

/* can also use this
return  (
    <div>
      {
        resultsArr &&
        resultsArr.map((item, i) => (
          <ReviewListItem item={item} key={i} />
        ))
      }
    </div>
  )
  */