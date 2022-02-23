import React from 'react';

const StarAverage = (ratingsObj) => {
  var totalCount = 0;
  var averageCount = 0;

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