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
import ReviewListItem from '../src/components/RatingReview/ReviewListItem.jsx';
//---------Invoke Cleanup---------
// afterEach(cleanup);
//OR--
afterEach(() => {
  cleanup();
});

//---------React Unit Tests---------
// test('expect App to render Jello World', async () => {
//   render(<App />)
//   const value = await screen.getByText('Jello World')
//   expect(value).toBeInTheDocument()
// })