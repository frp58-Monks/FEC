import React from 'react';
import StarAverage from './StarAverage.jsx';
import { FaStar } from "react-icons/fa";
import { StarStyled, StarBorder, StarText, QuarterStar } from '../Styled/StarStyled.js';

const StarFilled = () => {
  let average = StarAverage();

let fullStar = average.toString().split('.').slice(0, 1);
fullStar = Number(fullStar);
let decimal = average.toString().split('.').slice(1);
decimal = Number(decimal);

return (
  <QuarterStar>
      <FaStar className="star"/>
      <FaStar className="star"/>
      <FaStar className="star"/>
      <FaStar className="star"/>
      <FaStar className="star"/>
  </QuarterStar>
)

}

//render 5 stars with gray background
// return (
//   <div>
//     <FaStar />
//     <FaStar />
//     <FaStar />
//     <FaStar />
//     <FaStar />
//   </div>
// )
// if (fullStar < 5) {

//   [...Array(fullStar)].map((star, i) => {
//     return (
//       <FaStar />
//     )
//   })
// }

//take care of fullStar fill

//take care of decimal fill
//}

export default StarFilled;