import React, { useContext } from 'react';
import StarAverage from './StarAverage.jsx';
import { AverageStar, ProgressBar, Container } from '../Styled/RatingBreakdownStyled.js';
import AppContext from '../App.jsx'
import styled from 'styled-components';
import css from "../style.css";;

const RatingBreakdown = ({ reviewStars }) => {
  let starObj = reviewStars.ratings;
  let avg = StarAverage(starObj);
  let stars = [];

  let decimal = avg.toString().split('.');
  let solid = decimal[0];
  decimal = decimal[1];

  //let test = useContext(AppContext);
  //console.log('test: ', test.ratingAverage);

  // for (let i = 0; i < solid; i++) {
  //   stars.push('⭐');
  // }
  // if (decimal <= 50) {
  //   stars.push('')
  // }

  let string = avg.toString();
  // const width = avg * 10;

  return (
    <div>
      <Container>
        <AverageStar>
         AVERAGE RATING FOR THIS PRODUCT: {avg}
        </AverageStar>
      </Container>
    </div>
  )
}

export default RatingBreakdown;

/*

progress bar:
      <label>Average Rating: {avg} </label>
      <progress value={string} max='5' />


      <div class="star-ratings">
        <div class="fill-ratings" style="width: 50%;">
          <span>★★★★★</span>
        </div>
        <div class="empty-ratings">
          <span>★★★★★</span>
        </div>
      </div>


      <StarBox width={`25%`}>
        <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
        <div>☆ ☆ ☆ ☆ ☆</div>
      </StarBox>
*/