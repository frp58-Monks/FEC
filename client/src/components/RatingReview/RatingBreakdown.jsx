import React, { useContext } from 'react';
import StarAverage from './StarAverage.jsx';
// import { AverageStar, ProgressBar, Container } from '../Styled/RatingBreakdownStyled.js';
import AppContext from '../App.jsx'
import styled from 'styled-components';
import css from "../style.css";
import { JStarCont, JStarText } from '../styled/ProgressBarStyled.js';

const RatingBreakdown = ( {reviewStars} ) => {

    let starObj = reviewStars.ratings;
    let avg = StarAverage(starObj);
    let width = avg * 20;

  return (
    <JStarCont className="SharedStars">

        <div className="StarText">
          <JStarText className="SharedStarText"> Average Rating: {avg} </JStarText>
        </div>

        <div className="StarText">
          <div className="JStarbox">
            <div style={{ 'width': `${width}%`}}>★★★★★</div>
            <div>☆☆☆☆☆</div>
          </div>
        </div>

    </JStarCont>
  )
}

export default RatingBreakdown;

/*

(!reviewStars && !avg && !width)? null :


//{ reviewStars, getReviewStars }
progress bar:
      <label>Average Rating: {avg} </label>
      <progress value={string} max='5' />

    <Container>
        <AverageStar>
         AVERAGE RATING FOR THIS PRODUCT: {avg}
        </AverageStar>
      </Container>

              <span> Average Rating: {avg} </span>
        <div className="starbox">
          <div style={{ 'width': `${width}%`}}>★★★★★</div>
          <div>☆☆☆☆☆</div>
        </div>
*/