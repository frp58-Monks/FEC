import React from 'react';
import StarAverage from './StarAverage.jsx';
import { Container, BarTitle, AverageText } from '../Styled/ProgressBarStyled.js';

const ProgressBar = ( { reviewStars } ) => {
  let starObj = reviewStars.ratings;
  let avg = StarAverage(starObj);
  let string = avg.toString();

  return (
    <Container>
      <BarTitle> This is Rating Bar: </BarTitle>
      <AverageText> {avg} </AverageText>
      <progress value={string} max={5} />
    </Container>
  )
}

export default ProgressBar;
