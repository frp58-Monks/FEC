import React, { useContext } from 'react';
import StarAverage from './StarAverage.jsx';
import AppContext from '../App.jsx'
import styled from 'styled-components';
import css from "../style.css";
import { JCont, JText } from '../Styled/ProgressBarStyled.js';

const RatingBreakdown = ({ reviewStars }) => {

  let starObj = reviewStars.ratings;
  let avg = StarAverage(starObj);
  let width = avg * 20;

  return (
    <JCont className="SharedStars">

        <div className="StarText">
          <div className="JStarbox">
            <div style={{ 'width': `${width}%`}}>★★★★★</div>
            <div>☆☆☆☆☆</div>
          </div>

          <div className="StarText">
            <JText className="SharedStarText"> {avg} </JText>
          </div>

        </div>

    </JCont>
  )
}

export default RatingBreakdown;