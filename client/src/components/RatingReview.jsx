import React from 'react';
// import ReviewList from './RatingReview/ReviewList.jsx';
import ReviewListItem from './RatingReview/ReviewListItem.jsx';
import axios from 'axios';

//takes in product_id prop from feedback
const RatingReview = ({ reviews }) => {
  let resultsArr = reviews.results;
  console.log('results arr', resultsArr);

  return (
    <div>
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