import React from 'react';
import { ReviewSummary, ReviewWrapper, ReviewBody, ReviewDate, ReviewPurchaser, Response } from '../styled/ReviewListStyled.js';
import StarFilled from '../RatingReview/StarFilled.jsx';

const ReviewListItem = ( {item} ) => {
  let date = item.date.split('T');
  date = date[0];

  return (
    <ReviewWrapper>
      <StarFilled />
      <ReviewPurchaser>Verified Purchaser: {item.reviewer_name}</ReviewPurchaser>
      <ReviewDate>{date}</ReviewDate>
      <ReviewSummary>Summary: {item.summary}</ReviewSummary>
      <ReviewBody>{item.body}</ReviewBody>
      <Response>{item.response ? `Response: ${item.response}`: ''}</Response>
    </ReviewWrapper>
  )
}

export default ReviewListItem;
