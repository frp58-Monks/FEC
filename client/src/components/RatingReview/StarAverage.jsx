import React from 'react';
// { productId }
const StarAverage = (ratingsObj) => {
  var totalCount = 0;
  var averageCount = 0;

  //let ratingsObj = data.ratings;

  for (let key in ratingsObj) {
    let value = Number(ratingsObj[key]);
    let num = Number(key);
    totalCount += value;
    averageCount += (num * ratingsObj[key]);
  }

  let average = averageCount / totalCount;
  average = Math.round(average * 10) / 10
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

  /*
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
  }*/