const Model = require('../model/model_index.js');

const getAllProducts = (req, res) => {
  Model.getAllProducts((err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(products);
    }
  })
};

const getOneProduct = (req, res) => {
  const product_id = req.params.product_id;
  Model.getOneProduct(product_id, (err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(products);
    }
  })
};

// const getProducts = (req, res) => {
//   console.log({ 'CTRL id req.query': req.query });
//   if (req.query) {
//     console.log('there is a req query!');
//     const id = req.query;
//     Model.getOneProduct(id, (err, products) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(products);
//       }
//     })
//   } else {
//     console.log('there is not a req query :(');
//     Model.getAllProducts((err, products) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(products);
//       }
//     })
//   }
// };

module.exports = { getAllProducts, getOneProduct/*, getProducts*/ };