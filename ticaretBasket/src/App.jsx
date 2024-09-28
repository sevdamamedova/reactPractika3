import { useState } from "react";
import "./App.css";
import Production from "./component/production";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Alma",
      count: 0,
      price: 1,
    },
    {
      id: 2,
      title: "Armud",
      count: 0,
      price: 2,
    },
    {
      id: 3,
      title: "Heyva",
      count: 0,
      price: 2,
    },
    {
      id: 4,
      title: "Nar",
      count: 0,
      price: 3,
    },
  ]);

  const countProducts = (newProduct) => {
    setProducts((prevProducts) => prevProducts.map((product) => (product.id === newProduct.id ? newProduct : product)));
  };
  const totalPrice = products.reduce((total, product) => total + product.count * product.price, 0);
  return (
    <>
      <Production products={products} countProducts={countProducts} />
      <hr />
      <h3 style={{ color: "red" }}>Yekun mebleg</h3>
      <h2>{totalPrice}man</h2>
    </>
  );
}

export default App;
