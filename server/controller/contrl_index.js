const Model = require('../model/model_index.js');

const getProducts = (req, res) => {
  Model.getProducts((err, products) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(products);
    }
  })
};

module.exports = { getProducts };