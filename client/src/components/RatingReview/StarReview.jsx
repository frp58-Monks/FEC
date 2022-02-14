import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";;
import { StarStyled, StarBorder, StarText } from '../styled/StarStyled.js';

const StarReview = ( ) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {
        [...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          // let count = 0;

          return (
              <label>
                <StarStyled>
                <input
                  type='radio'
                  name='rating'
                  value={ratingValue}
                  onClick={() =>
                    //{
                    // count++;
                    setRating(ratingValue)
                  }
                  onMouseOver={() => setHover(ratingValue)}
                  onMouseOut={() => setHover(null)}
                />
                  <FaStar
                    className='star'
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

