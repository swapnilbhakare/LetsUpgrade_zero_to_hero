import React from "react";
import Product from "./Product";

const Products_List = () => {
  return (
    <div className="products">
      <Product title="iphone 12" price="200" />
      <Product title="macbook" price="5500" />
      <Product title="redmi 12" price="50" />
    </div>
  );
};

export default Products_List;
