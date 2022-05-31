const express = require("express");
const app = express();
const port = 3001;
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    count: 120,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    count: 259,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    count: 500,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    count: 430,
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    count: 400,
  },
];
app.listen(port, () => {
  console.log(`app litening on port ${port}`);
});

app.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    res.status(404).send("Something went wrong");
  }
  res.json(product);
});

app.get("/product", (req, res) => {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  count > 0 && offset > 0
    ? res.json(products.slice(offset, offset + count))
    : res.json(products);
});
