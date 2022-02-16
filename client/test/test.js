//Import react and react DOM
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//Import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, getByText, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/components/App.jsx';
import Overview from '../src/components/Overview.jsx';
import RatingReview from '../src/components/RatingReview.jsx';
import QuestionAnswer from '../src/components/QuestionAnswer.jsx';
import StarReview from '../src/components/RatingReview/StarReview.jsx';
import ReviewListItem from '../src/components/RatingReview/ReviewListItem.jsx';
import ReviewListData from '../src/components/RatingReview/HardcodeData.jsx';

// import Data from '../src/components/Overview/hardcodedData.jsx';

// const route = '/products/40344/styles';

// //Create a Mock Server
// const server = setupServer(
//   rest.get(route, (req, res, ctx) =>{
//     //ctx.json() method returns Data into a JSON response body
//     return res(ctx.json(Data))
//   }),
// )

// //Set up the Mock Server to Listen for incoming requests
// beforeAll(() => server.listen());
// //Set up the Mock Server to reset handlers upon test completion
// afterEach(() => server.resetHandlers());
// //Set up the Server to stop listening when all tests commence
// afterAll(()=> server.close());

// test('properly returns styles for given product id', async ()=> {
//   //Test the todo list app
//   //Render the App component
//   render(<App />)
//   //Wait for the App to fully render
//   await waitFor(()=> screen.getByText('todo one'))

//   //Run Tests on what you expect (test if the todos are on screen)
//   expect(screen.getByText('todo one'))
//   expect(screen.getByText('todo two'))

// })

test('expect App to render Jello World', () => {
  render(<App/>);
  expect(screen.getByText('Jello World')).toBeInTheDocument();
})

// test('expect DOM to render', () => {
//   render(<Overview/>);
//   expect(screen.getByText('Product Name-PROP')).toBeInTheDocument();
// })

test('expect QuestionAnswer Component to render string', () => {
  render(<QuestionAnswer/>);
  expect(screen.getByText('Question and Answer Components Here')).toBeInTheDocument();
})

test('expect RatingReview Component to render string: RatingReview', () => {
  render(<RatingReview/>);
  expect(screen.getByText('RatingReview')).toBeInTheDocument();
})

test('expect StarReview Component to render string: The Rating is', () => {
  render(<StarReview/>);
  expect(screen.getByText('The rating is')).toBeInTheDocument();
})

test('expect ReviewListItem Component to render purchaser name: shortandsweeet', () => {
  render(<ReviewListItem item={ReviewListData.results[0]}/>);
  expect(screen.getByText('shortandsweeet')).toBeInTheDocument();
})