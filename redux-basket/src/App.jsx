import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Production from "./component/Production";
import { resetCount } from "./redux/reducer";

function App() {
  const { products } = useSelector((state) => state.Data);
  const dispatch = useDispatch();

  localStorage.setItem("products", JSON.stringify(products));

  const totalPrice = products.reduce((total, product) => total + product.count * product.price, 0);

  const handleReset = () => {
    dispatch(resetCount());
  };

  return (
    <>
      <Production />

      <hr />
      <h3 style={{ color: "red" }}>Yekun mebleg</h3>
      <h2>{totalPrice}man</h2>
      <button onClick={handleReset} style={{ width: "150px", fontSize: "20px" }}>
        Sifirla
      </button>
    </>
  );
}

export default App;
