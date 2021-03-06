import React, { useContext } from 'react';
import StarAverage from './StarAverage.jsx';
import AppContext from '../App.jsx'
import styled from 'styled-components';
import css from "../style.css";
import { JCont, JText } from '../Styled/ProgressBarStyled.js';
import '../Overview/StylesOver.css';

const RatingBreakdown = ({ reviewStars }) => {

  let starObj = reviewStars.ratings;
  let avg = StarAverage(starObj);
  let width = avg * 20;

  return (
    <JCont className="SharedStars">

        <div data-testid="star" className="StarText">
          <div className="JStarbox">
            <div style={{ 'width': `${width}%`}}>★★★★★</div>
            <div>☆☆☆☆☆</div>
          </div>

          <div className="StarText">
            <JText className="SharedStarText"> <b>Rating:</b> <i>{avg}</i> </JText>
          </div>

        </div>

    </JCont>
  )
}

export default RatingBreakdown;