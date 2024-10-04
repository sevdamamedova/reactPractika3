import { useDispatch, useSelector } from "react-redux";
import { countProducts } from "../redux/reducer";

const Production = () => {
  const { products } = useSelector((state) => state.Data);
  const dispatch = useDispatch();
  const handleAdd = (productId) => {
    const newProductId = products.find((product) => product.id === productId);
    if (newProductId) {
      const newProduct = {
        ...newProductId,
        count: (newProductId.count || 0) + 1,
      };
      dispatch(countProducts(newProduct));
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {products.map((product, index) => (
        <div key={index}>
          <button onClick={() => handleAdd(product.id)} style={{ width: "100px" }}>
            <h3>{product.title}</h3>
          </button>
          <p style={{ background: "yellow", fontSize: "30px" }}>{product.price} man</p>
          <hr />
          <p>Kiloqram: {product.count}</p>
          <h4>Qiymet: {product.count * product.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default Production;
