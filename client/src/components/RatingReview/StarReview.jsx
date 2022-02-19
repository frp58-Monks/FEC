import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { StarStyled, StarBorder, StarText } from '../Styled/StarStyled.js';

const StarReview = ( ) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="StarReview">
      {
        [...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
              <label className="StarReviewFiller">
                <StarStyled className="StarReviewRadio">
                <input
                  type='radio'
                  name='rating'
                  value={ratingValue}
                  onClick={() =>
                    setRating(ratingValue)
                  }
                  onMouseOver={() => setHover(ratingValue)}
                  onMouseOut={() => setHover(null)}
                />
                  <FaStar
                    className="StarIcon"
                    color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                    size={100}
                  />
                </StarStyled>
              </label>
          )
        })
      }
      <StarText>The rating is {rating}</StarText>
    </div>
  )
}

export default StarReview;

