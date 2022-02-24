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
//JSON.parse is not supported by jest :(
// const hardcodedData = require('../src/components/Overview/testContext.js');

const productDetails = { id: 40344, campus: "hr-rfp", name: "Camo Onesie", slogan: "Blend in to your crowd", description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.", category: "Jackets", default_price: "140.00", created_at: "2021-08-13T14:38:44.509Z", updated_at: "2021-08-13T14:38:44.509Z", features: [ { feature: "Fabric", value: "Canvas" }, { feature: "Buttons", value: "Brass" }] }

const productStyles =  { product_id: "40344", results:  [ { style_id: 240505, name: "Dark Grey & Black", original_price: "170.00", sale_price: null, 'default?': false, photos:  [ { thumbnail_url: "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" },  { thumbnail_url: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" },  { thumbnail_url: "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" },  { thumbnail_url: "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" },  { thumbnail_url: "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" },  { thumbnail_url: "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" }], skus:  { 1394799:  { quantity: 8, size: "XS" }, 1394800:  { quantity: 16, size: "S" }, 1394801:  { quantity: 17, size: "M" }, 1394802:  { quantity: 10, size: "L" }, 1394803:  { quantity: 15, size: "XL" }, 1394804:  { quantity: 6, size: "XXL" } } }] };

const reviewStars = { product_id: "40344", ratings:  { 1: "27", 2: "35", 3: "90", 4: "82", 5: "182" }, recommended:  { false: "111", true: "305" }, characteristics:  { Fit:  { id: 135219, value: "2.8378378378378378" }, Length:  { id: 135220, value: "2.9189189189189189" }, Comfort:  { id: 135221, value: "3.2688172043010753" }, Quality:  { id: 135222, value: "3.4615384615384615" } } };

const TestContext = React.createContext();

test.only('tests overview component for the word: Category', async () => {
  console.log({'test details': productDetails}); //check
  console.log({'test styles': productStyles}); //nope
  // { 'test styles': { product_id: '40344', results: [ [Object] ] } }
  console.log({'test stars': reviewStars});//check

  render(
    <TestContext.Provider value={{ productDetails, productStyles, reviewStars }}>
      <Overview />
    </TestContext.Provider>
  )
  const value = await waitFor(() => screen.getByText('Category'))
  // const value = await screen.getByText('Category');
  expect(value).toBeInTheDocument();
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

// const product_id = 40344; //Camo Onesie
// // //const worker = setupWorker( ) ??
// // //A function that sets up a request interception later in nodeJS env
// const server = setupServer(
//   //Product Details
//   rest.get('/products/:product_id', (req, res, ctx) => {
//     //give the request a query paramater of the product_id //40344
//     const { product_id } = req.params
//     //what do i return and how do I add the res data to my test context?
//     return res(
//       ctx.json({ product_id })
//       // ctx.json(???)
//       // ctx.json(productDetails)
//     )
//   }),
//   //Product Styles
//   rest.get('/products/:product_id/styles', (req, res, ctx) => {
//     const { product_id } = req.params
//     return res(
//       ctx.json(productStyles)
//     )
//   }),
//   //Product Stars
//   rest.get('/reviews/meta', (req, res, ctx) => {
//     const { product_id } = req.params
//     return res(
//       ctx.json(reviewStars)
//     )
//   })
// )

// // Mock out route
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(()=> server.close())