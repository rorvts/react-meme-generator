import React from "react";
import "./styles.css";
import Product from "./components/Product/Product";
import api from "./productData";

const App = () => {
  const productComponents = api.map(item => <Product 
    key={item.id} 
    product={item}
  />);
  return (
    <>
      {productComponents}
    </>
  );
}

export default App;