import React, { useContext } from 'react';
import StarAverage from './StarAverage.jsx';
import { AverageStar, ProgressBar, Container } from '../Styled/RatingBreakdownStyled.js';
import AppContext from '../App.jsx'
import styled from 'styled-components';
import css from "../style.css";;

const RatingBreakdown = (props) => {

  console.log('rb stars', props.getReviewStars);

  let starObj = props.reviewStars.ratings;
  let avg = StarAverage(starObj);
  let stars = [];

  let decimal = avg.toString().split('.');
  let solid = decimal[0];
  decimal = decimal[1];

  let string = avg.toString();
  let width = avg * 10;

  return (
    <div>
        <div className="starbox">
          <div style={{ width: `${width}%`}}>★★★★★</div>
          <div>☆☆☆☆☆</div>
        </div>
    </div>
  )
}

export default RatingBreakdown;

/*

progress bar:
      <label>Average Rating: {avg} </label>
      <progress value={string} max='5' />

    <Container>
        <AverageStar>
         AVERAGE RATING FOR THIS PRODUCT: {avg}
        </AverageStar>
      </Container>
*/