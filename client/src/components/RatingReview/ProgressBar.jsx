import React from 'react';
import StarAverage from './StarAverage.jsx';
import axios from 'axios';
import { Container, BarTitle, AverageText, RecommendText, RatingText, TextBar } from '../Styled/ProgressBarStyled.js';
import { StarCont, SharedStarText } from '../Styled/ProgressBarStyled.js';

const ProgressBar = ({ reviewStars }) => {

  //to get avg star rating
  let starObj = reviewStars.ratings;
  let avg = StarAverage(starObj);
  let string = avg.toString();

  let width = avg * 20;

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

  //product breakdown
  // let comfort = reviewStars.characteristics.Comfort.value;
  // var comfortRound = Math.round(comfort * 10) / 10

  // let fit = reviewStars.characteristics.Fit.value;
  // var fitRound = Math.round(fit * 10) / 10

  // let length = reviewStars.characteristics.Length.value;
  // var lengthRound = Math.round(length * 10) / 10

  // let quality = reviewStars.characteristics.Quality.value;
  // var qualityRound = Math.round(quality * 10) / 10


  return (
    <div className="RatingBar">

      <TextBar className='TextBar'>

      <StarCont className="SharedStars">
        <div className="StarText">
          <SharedStarText className="SharedStarText"> Average Rating: {avg} </SharedStarText>
        </div>

        <div className="StarText">
          <div className="starbox">
            <div style={{ 'width': `${width}%`}}>★★★★★</div>
            <div>☆☆☆☆☆</div>
          </div>
        </div>
      </StarCont>

      {/* <RatingText className="RatingText">Rating Breakdown</RatingText> */}
      <hr></hr>

      <div className="Bar OneStar" >
        <BarTitle className="BarTitle"> One Star </BarTitle>
        <AverageText className="AverageText"> {oneRating}% </AverageText>
        <progress className="ProgressBar" value={oneRating} max={100} />
      </div>

      <div className="Bar TwoStar">
        <BarTitle className="BarTitle"> Two Star </BarTitle>
        <AverageText className="AverageText"> {twoRating}% </AverageText>
        <progress className="ProgressBar" value={twoRating} max={100} />
      </div>

      <div className="Bar ThreeStar">
        <BarTitle className="BarTitle"> Three Star </BarTitle>
        <AverageText className="AverageText"> {threeRating}% </AverageText>
        <progress className="ProgressBar" value={threeRating} max={100} />
      </div>

      <div className="Bar FourStar">
        <BarTitle className="BarTitle"> Four Star </BarTitle>
        <AverageText className="AverageText"> {fourRating}% </AverageText>
        <progress className="ProgressBar" value={fourRating} max={100} />
      </div>

      <div className="Bar FiveStar">
        <BarTitle className="BarTitle"> Five Star </BarTitle>
        <AverageText className="AverageText"> {fiveRating}% </AverageText>
        <progress className="ProgressBar" value={fiveRating} max={100} />
      </div>

      <div className="Bar RecommendedStar">
        <BarTitle className="BarTitle"> Recommended: </BarTitle>
        <RecommendText className="AverageText"> {recommendPercentageRound}% </RecommendText>
        <progress className="ProgressBar" value={recommendPercentageStr} max={100} />
      </div>

      {/* <div className="Comfort">
        <BarTitle className="ProdText"> Comfort: </BarTitle>
        <AverageText className="ProdText"> {comfortRound}/5 </AverageText>
        <BarTitle className="ProdText"> Fit: </BarTitle>
        <AverageText className="ProdText"> {fitRound}/5 </AverageText>
        <BarTitle className="ProdText"> Length: </BarTitle>
        <AverageText className="ProdText"> {lengthRound}/5 </AverageText>
        <BarTitle className="ProdText"> Quality: </BarTitle>
        <AverageText className="ProdText"> {qualityRound}/5 </AverageText>
      </div> */}

      </TextBar>
    </div>
  )
}

export default ProgressBar;