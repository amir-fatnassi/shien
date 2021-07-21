import React from "react";
import ProductImage from "../element_component/ProductImage/ProductImage";
import ProductDetail from "../element_component/ProductDetails/ProductDetail";

const Product = ({ location }) => {
  const { Prod } = location;
  console.log(Prod?.product.images.push(Prod?.product.imageProduct));
  return (
    <div className="product-page-component">
      <ProductImage img={Prod?.product.images.reverse()} />
      <ProductDetail prod={Prod?.product} />
    </div>
  );
};

export default Product;
