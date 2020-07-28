import React from "react";

const Product = (props) => {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>{props.product.description}</p>
      <h3>{props.product.price}</h3>
    </div>
  )
}

export default Product