//Import react and react DOM
import React from 'react';
import * as ReactDOM from 'react-dom';
//Import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';
//Import react-testing methods
import {render, getByText, waitFor, screen} from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
//Import the App.jsx file
import App from '../src/components/App.jsx';
//Import Hardcoded Data
import Data from '../src/components/Overview/hardcodedData.jsx';
//

//Setup
//Need to make a server
const route = '/products/40344/styles';

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

// test('should render components to the DOM', () => {
//   const root = document.createElement('div');

// });

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('Jello World');
});