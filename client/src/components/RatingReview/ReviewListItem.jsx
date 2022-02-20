import React, {useState, useEffect} from 'react';
import { ReviewSummary, ReviewWrapper, ReviewBody, ReviewDate, ReviewPurchaser, Response, Recommend, Left, Helpful } from '../Styled/ReviewListStyled.js';
//import StarFilled from '../RatingReview/StarFilled.jsx';
import { FaCheck } from "react-icons/fa";
import axios from 'axios';

const ReviewListItem = ({ item, product_id, reviewStars, reviews }) => {
  const[helpful, setHelpful] = useState(item.helpfulness);

  //convert date on individual tiles
  let date = item.date.split('T');
  date = date[0];
  date = date.split('-');
  let month = Number(date[1]);
  let day = Number(date[2]);
  let year = Number(date[0]);

  let combined = new Date(`${year}, ${month}, ${day}`);
  let combinedDate = combined.toDateString();

  //Capped Summary
  let cappedSummary = item.summary.substring(0, 60);
  cappedSummary = cappedSummary.split('.');
  cappedSummary = cappedSummary[0];

  //getting individual review stars per review
  let rating = item.rating;
  let reviewRating = [];
  for (let i = 0; i < rating; i++) {
    reviewRating.push('⭐')
  }

  //putting helpful reviews/onclick change count
  const updateHelpful = () => {
    let review_id = item.review_id;

    axios.put(`reviews/:review_id/helpful`, { params: {review_id: review_id} })
      .then(() => {
        setHelpful(helpful + 1)
      })
      .catch((err) => {
        console.log('error with helpful submission', err);
      })
  }

  return (
      <div className="ReviewList" >
      <ReviewWrapper>
        <div>{reviewRating}</div>
        <ReviewDate>{combinedDate}</ReviewDate>
        <ReviewPurchaser>Verified Purchaser: {item.reviewer_name}</ReviewPurchaser>
        <Recommend>
          {item.recommend ? `I recommend this product` : ''}
          {item.recommend ? <FaCheck style={{ 'color': "#00FA9A" }} /> : ''}
        </Recommend>
        <ReviewSummary>Summary: {cappedSummary}</ReviewSummary>
        <ReviewBody>{item.body}</ReviewBody>
        <Response>{item.response ? `Response from seller: ${item.response}` : ''}</Response>
        <Helpful onClick={updateHelpful}> Helpful? Yes: {helpful}</Helpful>
      </ReviewWrapper>
      </div>
  )
}

export default ReviewListItem;


//<button onClick={decreaseHelpful}> No: {notHelpful} </button>
