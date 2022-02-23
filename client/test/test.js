//---------Import React---------
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "babel-polyfill";

//---------Import Testing Libraries---------
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
import {render, screen, cleanup, getByText, waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

//---------Import_Components---------
import App from '../src/components/App.jsx';
import Overview from '../src/components/Overview.jsx';
import RatingReview from '../src/components/RatingReview.jsx';
import QuestionAnswer from '../src/components/QuestionAnswer.jsx';
import StarReview from '../src/components/RatingReview/StarReview.jsx';
import ReviewListItem from '../src/components/RatingReview/ReviewListItem.jsx';
//---------Invoke Cleanup---------
// afterEach(cleanup);
//OR--
afterEach(() => {
  cleanup();
});

//---------React Unit Tests---------
test('expect App to render Jello World', async () => {
  render(<App />);
  const value = await screen.getByText('Jello World');
  expect(value).toBeInTheDocument();
})

test('expect QuestionAnswer Component to render string', async () => {
  const fakeData =
  {
    "product_id": "40348",
    "results": [
      {
        "question_id": 426109,
        "question_body": "this is a test",
        "question_date": "2021-09-18T-00:00:00.000Z",
        "asker_name": "testing",
        "answers": {
          "5269566": {
            "id": 5269566,
            "body": "test",
            "date": "2022-01-06T00:00:00.000Z",
            "answerer_name": "testing"
          }
        }
      }
    ]
  }
  render(<QuestionAnswer questions={fakeData} />);
  const value = await screen.getByText('Questions and Answers');
  // expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
  expect(value).toBeInTheDocument();
})

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
