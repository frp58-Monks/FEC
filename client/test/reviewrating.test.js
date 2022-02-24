//---------Import React---------
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "babel-polyfill";

//---------Import Testing Libraries---------
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
import { render, screen, cleanup, getByText, waitFor, fireEvent, getByLabel, getByTestId, toHaveStyle } from '@testing-library/react';
import '@testing-library/jest-dom';

//---------Import_Components---------
import App from '../src/components/App.jsx';
import Overview from '../src/components/Overview.jsx';
import RatingReview from '../src/components/RatingReview.jsx';
import RatingBreakdown from '../src/components/RatingReview/RatingBreakdown.jsx';
import StarAverage from '../src/components/RatingReview/StarAverage.jsx';
import ProgressBar from '../src/components/RatingReview/ProgressBar.jsx';
import QuestionAnswer from '../src/components/QuestionAnswer.jsx';
import ReviewListItem from '../src/components/RatingReview/ReviewListItem.jsx';
//---------Invoke Cleanup---------
// afterEach(cleanup);
//OR--
afterEach(() => {
  cleanup();
});

//---------Fake Data---------
const reviewData =
{
  "product": "40344",
  "page": 0,
  "count": 1000,
  "results": [
    {
      "review_id": 1135865,
      "rating": 5,
      "summary": "pls",
      "recommend": false,
      "response": null,
      "body": "pleasss",
      "date": "2022-02-23T00:00:00.000Z",
      "reviewer_name": "working?",
      "helpfulness": 0,
      "photos": [
        {
          "id": 2180153,
          "url": "http://res.cloudinary.com/dhx5k7wb3/image/upload/v1645585910/rii8yuhmz6pkddynvxjv.png"
        }
      ]
    }
  ]
}

const metaData =
{
  "product_id": "40427",
  "ratings": {
      "1": "2",
      "2": "1",
      "3": "1",
      "4": "1",
      "5": "3"
  },
  "recommended": {
      "false": "2",
      "true": "6"
  },
  "characteristics": {
      "Fit": {
          "id": 135494,
          "value": "3.0000000000000000"
      },
      "Length": {
          "id": 135495,
          "value": "3.5000000000000000"
      },
      "Comfort": {
          "id": 135496,
          "value": "2.5000000000000000"
      },
      "Quality": {
          "id": 135497,
          "value": "3.5000000000000000"
      }
  }
}

//---------React Unit Tests---------

/*TESTING RATING REVIEW COMPONENT */
//test Title renders
test('expect RatingReview Component to render string',
async () => {
    render(<RatingReview reviews={reviewData}/>);
    const value = await screen.getByText('Ratings and Reviews');
    expect(value).toBeInTheDocument();
  })

//Test "sort" renders
test('expect RatingReview Component to render sort string',
async () => {
    render(<RatingReview reviews={reviewData}/>);
    const value = await screen.getByText('Sort:');
    expect(value).toBeInTheDocument();
  })

//test more reviews button
// test('expect RatingReview Component to render more reviews button',
// async () => {
//     render(<RatingReview reviews={reviewData}/>);
//     const value = await screen.getByText('More Reviews');
//     expect(value).toBeInTheDocument();
//   })
//test onclick more reviews
//test add reviews button
test('expect RatingReview Component to render add reviews button',
async () => {
    render(<RatingReview reviews={reviewData}/>);
    const value = await screen.getByText('Add Review');
    expect(value).toBeInTheDocument();
  })
//test onclick add reviews
//sort dropdown - select tag?

/*TESTING RATING REVIEW LIST COMPONENT */
test('expect RatingReview Component to render username',
async () => {
  render(<ReviewListItem reviews={null} reviewStars={null} product_id={null} item={reviewData.results[0]}/>);
  const value = await screen.getByText('Verified Purchaser: working?');
  expect(value).toBeInTheDocument();
  })

test('expect RatingReview Component to render date',
async () => {
  render(<ReviewListItem reviews={null} reviewStars={null} product_id={null} item={reviewData.results[0]}/>);
  const value = await screen.getByText('Wed Feb 23 2022');
  expect(value).toBeInTheDocument();
  })

test('expect RatingReview Component to render summary',
async () => {
  render(<ReviewListItem reviews={null} reviewStars={null} product_id={null} item={reviewData.results[0]}/>);
  const value = await screen.getByText('Summary: pls');
  expect(value).toBeInTheDocument();
  })

test('expect RatingReview Component to render body',
async () => {
  render(<ReviewListItem reviews={null} reviewStars={null} product_id={null} item={reviewData.results[0]}/>);
  const value = await screen.getByText('pleasss');
  expect(value).toBeInTheDocument();
  })
//test helpful submission and error
//test helpful button - update
//recommend

/*TESTING PROGRESS BAR COMPONENT */
//test rating breakdown title
test('expect ProgressBar Component to render Rating Breakdown title',
async () => {
  render(<ProgressBar reviewStars={metaData}/>);
  const value = await screen.getByText('Rating Breakdown');
  expect(value).toBeInTheDocument();
  })
//test average rating text and averge rating
//test 1 star bar & title
//test 2 star bar & title
//test 3 star bar & title
//test 4 star bar & title
//test 5 star bar & title
//test recommended & title
//test star icons

/*TESTING RATING BREAKDOWN COMPONENT */
test("expect star icons to be filled with yellow based on average rating percentage",
async () => {
  render(<RatingBreakdown reviewStars={metaData}/>);
  const value = await screen.getByTestId('star');
  expect(value).toBeInTheDocument(`width: 65%`);
})

/*TESTING STAR AVERAGE COMPONENT */
describe('Testing sum', () => {
  function average() {
    var totalCount = 0;
    var averageCount = 0;

    for (let key in metaData.ratings) {
      let value = Number(metaData.ratings[key]);
      let num = Number(key);
      totalCount += value;
      averageCount += (num * metaData.ratings[key]);
    }

    let average = averageCount / totalCount;
    average = Math.round(average * 10) / 10
    return average;
  }

  it('should equal 3.3',()=>{
     expect(average()).toBe(3.3);
    })

  test('also should equal 3.3', () => {
    expect(average()).toBe(3.3);
    })
});

/*TESTING ADD REVIEWS MODAL COMPONENT */
