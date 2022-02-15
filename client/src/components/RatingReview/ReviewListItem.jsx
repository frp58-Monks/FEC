import React from 'react';
import { ReviewSummary, ReviewWrapper, ReviewBody, ReviewDate, ReviewPurchaser, Response, Recommend } from '../styled/ReviewListStyled.js';
import StarFilled from '../RatingReview/StarFilled.jsx';
import { FaCheck } from "react-icons/fa";


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
      <Recommend>
        {item.recommend ? `I recommend this product`: ''}
        {item.recommend ? <FaCheck style={{ 'color': "#00FA9A" }} /> : ''}
      </Recommend>
    </ReviewWrapper>
  )
}

export default ReviewListItem;
