import React from 'react';
import StarAverage from './StarAverage.jsx';
import { AverageStar} from '../Styled/RatingBreakdownStyled.js';

const RatingBreakdown = ( {reviewStars} ) => {
  let starObj = reviewStars.ratings;
  let avg = StarAverage(starObj);

  return (
    <div>
      <AverageStar>
        AVERAGE RATING FOR THIS PRODUCT: {avg}
      </AverageStar>
    </div>
  )
}

export default RatingBreakdown;