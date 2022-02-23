//---------Import React---------
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "babel-polyfill";
import axios from 'axios';

//---------Import Testing Libraries---------
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, cleanup, getByText, getByLabel, getByRole, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

//---------Invoke Cleanup---------
// afterEach(() => {
//   cleanup();
// });

//---------Import_Components---------
import App from '../src/components/App.jsx';
import Overview from '../src/components/Overview.jsx';

// const product_id = 40344;

// describe("Do the axios GET calls first", () => {
//   beforeAll(async() => {
//       //product details
//       const productDetails = await axios
//       .get('/products/:product_id', {
//         params: { product_id }
//       })
//       .then((res) => {
//         return res.data;
//         // const productDetails = res.data;
//       })
//       .catch((err) => {
//         console.log('Client GET Details err: ', err)
//       })

//       //product styles
//       const productStyles = await axios
//       .get('/products/:product_id/styles', {
//         params: { product_id }
//       })
//       .then((res) => {
//         return res.data;
//         // const productStyles = res.data;
//       })
//       .catch((err) => {
//         console.log('Client GET Styles err: ', err);
//       })

//       //stars
//       const reviewStars = await axios
//       .get('/reviews/meta', {
//         params: { product_id }
//       })
//       .then(res => {
//         return res.data;
//         // const reviewStars = res.data;
//       })
//       .catch((err) => {
//         console.log('error with stars: ', err);
//       })
//     })
// });

const product_id = 40344; //Camo Onesie

//const worker = setupWorker( ) ??
const server = setupServer(
  //Product Details
  rest.get('/products/:product_id', (req, res, ctx) => {
    //give the request a query paramater of the product_id //40344
    const { product_id } = req.params
    //what do i return and how do I add the res data to my test context?
    return res(ctx.json(productDetails))
  },
  //Product Styles
  rest.get('/products/:product_id/styles', (req, res, ctx) => {
    const { product_id } = req.params
    return res(
      ctx.json(productStyles)
    )
  },
  //Product Stars
  rest.get('/reviews/meta', (req, res, ctx) => {
    const { product_id } = req.params
    return res(
      ctx.json(reviewStars)
    )
  }
)

//Mock out route
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(()=> server.close())

const TestContext = React.createContext();

test('it tests overview component', async () => {

  console.log({'test details': productDetails}); //still undefined
  console.log({'test styles': productStyles});
  console.log({'test stars': reviewStars});

  render(
    <TestContext.Provider value={{ productDetails, productStyles, reviewStars }}>
      <Overview />
    </TestContext.Provider>
  )
  const value = await waitFor(() => screen.getByText('Category'))
  expect(value).toBeInTheDocument()
})


// test('Search renders new product price', async () => {
//   //input 'heir force ones' into the search bar form

//   //access the button with the value "Search"
//   const button = getByRole('button', {name: 'Search'})
//   //click the search button
//   fireEvent.click(button);
//   //expect to see string '$99.00' on the page
//   await expect(getByText("$99.00")).toBeInTheDocument();
// });