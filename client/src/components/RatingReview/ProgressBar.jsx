import React from 'react';
import StarAverage from './StarAverage.jsx';
import { Container, BarTitle, AverageText, RecommendText, RatingText } from '../Styled/ProgressBarStyled.js';
import axios from 'axios';

const ProgressBar = ({ reviewStars }) => {

  //to get avg star rating
  let starObj = reviewStars.ratings;
  let avg = StarAverage(starObj);
  let string = avg.toString();

  //meta deta of recommended
  let rec = reviewStars.recommended;

  //recommended the item
  let notRecommend = Number(rec.false);
  let doRecommend = Number(rec.true);
  let recommendNum = ((doRecommend / (doRecommend + notRecommend)) * 100);
  let recommendPercentageRound = Math.round(recommendNum * 10) / 10;
  let recommendPercentageStr = recommendPercentageRound.toString();

  //individual rating breakdown percentage
  let total = 0;
  // let arr = [];'
  let obj = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0
  }

  for (let key in starObj) {
    total += Number(starObj[key]);
    for (let num in obj) {
      if (num === key) {
        obj[key] += Number(starObj[key]);
      }
    }
  }

  let oneRating = (obj['1'] / total) * 100;
  oneRating = Math.round(oneRating * 10) / 10;
  let twoRating = (obj['2'] / total) * 100;
  twoRating = Math.round(twoRating * 10) / 10;
  let threeRating = (obj['3'] / total) * 100;
  threeRating = Math.round(threeRating * 10) / 10;
  let fourRating = (obj['4'] / total) * 100;
  fourRating = Math.round(fourRating * 10) / 10;
  let fiveRating = (obj['5'] / total) * 100;
  fiveRating = Math.round(fiveRating * 10) / 10;

  // let comfort = meta.characteristics.Comfort.value;
  // let fit = meta.characteristics.Fit.value;
  // let length = meta.characteristics.Length.value;
  // let quality = meta.characteristics.Quality.value;
  // console.log('3', threeRating);

  return (
    <div>
      <RatingText>Rating Breakdown</RatingText>
      <div>
        <BarTitle> One Star </BarTitle>
        <AverageText> {oneRating}% </AverageText>
        <progress value={oneRating} max={100} />
      </div>
      <div>
        <BarTitle> Two Star </BarTitle>
        <AverageText> {twoRating}% </AverageText>
        <progress value={twoRating} max={100} />
      </div>
      <div>
        <BarTitle> Three Star </BarTitle>
        <AverageText> {threeRating}% </AverageText>
        <progress value={threeRating} max={100} />
      </div>
      <div>
        <BarTitle> Four Star </BarTitle>
        <AverageText> {fourRating}% </AverageText>
        <progress value={fourRating} max={100} />
      </div>
      <div>
        <BarTitle> Five Star </BarTitle>
        <AverageText> {fiveRating}% </AverageText>
        <progress value={fiveRating} max={100} />
      </div>
      <div>
        <BarTitle> Recommended: </BarTitle>
        <RecommendText> {recommendPercentageRound}% </RecommendText>
        <progress value={recommendPercentageStr} max={100} />
      </div>
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