import React from 'react';
import { ReviewSummary, ReviewWrapper, ReviewBody, ReviewDate, ReviewPurchaser } from '../styled/ReviewList.js';
import StarFilled from '../RatingReview/StarFilled.jsx';

const ReviewList = ( {productId} ) => {
  var data =  {
    "product": "2",
    "page": 0,
    "count": 5,
    "results": [
      {
        "review_id": 5,
        "rating": 3,
        "summary": "I'm enjoying wearing these shades",
        "recommend": false,
        "response": null,
        "body": "Comfortable and practical.",
        "date": "2019-04-14T00:00:00.000Z",
        "reviewer_name": "shortandsweeet",
        "helpfulness": 5,
        "photos": [{
            "id": 1,
            "url": "urlplaceholder/review_5_photo_number_1.jpg"
          },
          {
            "id": 2,
            "url": "urlplaceholder/review_5_photo_number_2.jpg"
          },
        ]
      },
      {
        "review_id": 3,
        "rating": 4,
        "summary": "I am liking these glasses",
        "recommend": false,
        "response": "Glad you're enjoying the product!",
        "body": "They are very dark. But that's good because I'm in very sunny spots",
        "date": "2019-06-23T00:00:00.000Z",
        "reviewer_name": "bigbrotherbenjamin",
        "helpfulness": 5,
        "photos": [],
      }
    ]
  };

  let resultsArr = data.results;
  let text = [];

  for (let i = 0; i < resultsArr.length; i++) {
    let obj = resultsArr[i];

    let summary = obj.summary;
    let date = obj.date.split('T');
    date = date[0];
    let reviewerName = obj.reviewer_name;
    let body = obj.body;

     return (
       <ReviewWrapper>
        <StarFilled />
        <ReviewPurchaser>Verified Purchaser: {reviewerName}</ReviewPurchaser>
        <ReviewDate>{date}</ReviewDate>
        <ReviewSummary>{summary}</ReviewSummary>
        <ReviewBody>{body}</ReviewBody>
       </ReviewWrapper>
     )
  }
}
export default ReviewList;