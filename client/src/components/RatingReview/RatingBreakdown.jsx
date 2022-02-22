import React, { useContext } from 'react';
import StarAverage from './StarAverage.jsx';
// import { AverageStar, ProgressBar, Container } from '../Styled/RatingBreakdownStyled.js';
import AppContext from '../App.jsx'
import styled from 'styled-components';
import css from "../style.css";
import { JCont, JText } from '../styled/ProgressBarStyled.js';

const RatingBreakdown = ( {reviewStars} ) => {

    let starObj = reviewStars.ratings;
    let avg = StarAverage(starObj);
    let width = avg * 20;

  return (
    <JCont className="SharedStars">

        <div className="StarText">
          <JText className="SharedStarText"> Average Rating: {avg} </JText>
        </div>

        <div className="StarText">
          <div className="JStarbox">
            <div style={{ 'width': `${width}%`}}>★★★★★</div>
            <div>☆☆☆☆☆</div>
          </div>
        </div>

    </JCont>
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

              <span> Average Rating: {avg} </span>
        <div className="starbox">
          <div style={{ 'width': `${width}%`}}>★★★★★</div>
          <div>☆☆☆☆☆</div>
        </div>
*/