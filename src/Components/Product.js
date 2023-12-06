import React from "react";

const Product = (props) => {
  const submitHandler = () => {
    console.log("abc");
  };
  return (
    <div className="product">
      <h3>{props.title}</h3>
      <h3>{props.price}</h3>
      <button onClick={submitHandler}>Click</button>
    </div>
  );
};

export default Product;
