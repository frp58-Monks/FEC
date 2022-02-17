import React from 'react';
import StarAverage from './StarAverage.jsx';
import { Container, BarTitle, AverageText } from '../Styled/ProgressBarStyled.js';
import axios from 'axios';

const ProgressBar = ( { reviewStars, meta } ) => {
  
  //to get avg star rating
  let starObj = reviewStars.ratings;
  let avg = StarAverage(starObj);
  let string = avg.toString();

  console.log('meta rec :', reviewStars.recommended);
  //meta deta of recommended
  let rec = reviewStars.recommended;
  //recommended the item
  let notRecommend = Number(rec.false);
  let doRecommend = Number(rec.true);
  let recommendNum = ((doRecommend / (doRecommend + notRecommend)) * 100);
  let recommendPercentageRound = Math.round(recommendNum * 100) / 100;
  let recommendPercentageStr = recommendPercentageRound.toString();

  // let comfort = meta.characteristics.Comfort.value;
  // let fit = meta.characteristics.Fit.value;
  // let length = meta.characteristics.Length.value;
  // let quality = meta.characteristics.Quality.value;

  return (
    <div>
      <Container>
        <BarTitle> This is Rating Bar: </BarTitle>
        <AverageText> {avg} </AverageText>
        <progress value={string} max={5} />
      </Container>
          <BarTitle> Recommended: {recommendPercentageRound}% </BarTitle>
          <progress value={recommendPercentageStr} max={100} />
    </div>
  )
}

export default ProgressBar;

// const getMeta = () => {
//   let product_id = this.props.product_id;
//   axios
//     .get('/reviews/meta', { params: { product_id: product_id } })
//     .then(res => {
//       const data = res.data;

//       this.setState({
//         reviewMeta: data
//       });
//     })
//     .catch((err) => {
//       console.log('error with reviews', err);
//     });
// }