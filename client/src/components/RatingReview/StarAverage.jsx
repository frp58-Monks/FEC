
//on click need the product id in app state
//pass down product id to staraverage

//get request to API taking in product id from props from app
//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=40344
//then
//get ratings from the res.data.ratings
//create a total count
//create average count

//loop over the ratings obj
//total count += values of rating obj
//average += number(key) * values of rating obj

//return average/total count

//export star average to star review


//starReview
//import star average
//take is prod id as props as well
//get decimal if prod id
//get integer of product id
//if integer value
//fill whole star of integer value

//if decimal value
//if the average has a decimal <0.26
//fill quarter star
//if the average has a decimal of <0.75
//fill half star
//otherwise
//fill 3/4 star

import React from 'react';
// { productId }
const StarAverage = () => {
  var totalCount = 0;
  var averageCount = 0;

  var data =
  {
    "product_id": "40344",
    "ratings": {
      "1": "17",
      "2": "17",
      "3": "50",
      "4": "64",
      "5": "172"
    },
    "recommended": {
      "false": "82",
      "true": "238"
    },
    "characteristics": {
      "Fit": {
        "id": 135219,
        "value": "2.8507462686567164"
      },
      "Length": {
        "id": 135220,
        "value": "2.8283582089552239"
      },
      "Comfort": {
        "id": 135221,
        "value": "3.1127819548872180"
      },
      "Quality": {
        "id": 135222,
        "value": "3.2967741935483871"
      }
    }
  }

  let ratingsObj = data.ratings;

  for (let key in ratingsObj) {
    let value = Number(ratingsObj[key]);
    let num = Number(key);
    totalCount += value;
    averageCount += (num * ratingsObj[key]);
  }

  let average = averageCount / totalCount;
  average = Math.round(average * 100) / 100
  return average;
}

export default StarAverage;

// axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`)
//   .then(res => {
//     var ratingsObj = res.data.ratings;

//loop over ratings obj
// for (let key in ratingsObj) {
//   totalCount += ratingsObj[key];
//   averageCount += (key * ratingsObj[key]);
//   let average = averageCount / totalCount;

//   return average;
  //   }
  // })
  // .catch((err) => {
  //   console.log(err);
  // });