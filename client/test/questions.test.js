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
import Feedback from '../src/components/Feedback.jsx';
import QuestionAnswer from '../src/components/QuestionAnswer.jsx';
import QuestionListItem from '../src/components/QuestionAnswer/QuestionListItem.jsx';
import AnswerListItem from '../src/components/QuestionAnswer/AnswerListItem.jsx';

//---------Invoke Cleanup---------
afterEach(() => {
  cleanup();
});

//---------React Unit Tests---------
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
    },
    {
      "question_id": 987654,
      "question_body": "2nd question",
      "question_date": "2021-09-18T-00:00:00.000Z",
      "asker_name": "testing again",
      "answers": ''
    }
  ]
}

//---------React Unit Tests---------
test('expect QuestionAnswer Component to render string', async () => {
  render(<QuestionAnswer questions={fakeData} />);
  const value = await screen.getByText('Questions and Answers');
  expect(value).toBeInTheDocument();
});

test('Expect QuestionListItem Component to render the date a question is asked', async () => {
  render(<QuestionListItem question={fakeData.results[0]}/>);
  const value = await screen.getByText('Sat Sep 18 2021');
  expect(value).toBeInTheDocument();
});

test('Expect QuestionListItem Component to render the name of a question asker', async () => {
  render(<QuestionListItem question={fakeData.results[0]}/>);
  const value = await screen.getByText('Asker Name: testing');
  expect(value).toBeInTheDocument();
});

test('Expect QuestionListItem Component to render a question', async () => {
  render(<QuestionListItem question={fakeData.results[0]}/>);
  const value = await screen.getByText('Question: this is a test');
  expect(value).toBeInTheDocument();
});

test('Expect QuestionListItem Component to render a message when a question has no answers', async () => {
  render(<QuestionListItem question={fakeData.results[1]}/>);
  const value = await screen.getByText('No answers to this question yet!');
  expect(value).toBeInTheDocument();
});

test('Expect AnswerListItem Component to render an answer', async () => {
  render(<AnswerListItem answer={fakeData.results[0].answers['5269566']} />);
  const value = await screen.getByText('Answered by: testing');
  expect(value).toBeInTheDocument();
});

test('Expect AnswerListItem Component to render an answer', async () => {
  render(<AnswerListItem answer={fakeData.results[0].answers['5269566']} />);
  const value = await screen.getByText('Answer: test');
  expect(value).toBeInTheDocument();
});

