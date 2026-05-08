import React from "react";
import Product from "./Product";

function ListProduct(props) {
  const { listProduct } = props;

 const handlerBuy = (cart) => {
    console.log("List Buy product: ", cart);
    props.onBuy(cart);
  }
  const renderListProduct = () => {
    return listProduct.map((product) => {
      return <Product key={product.id} product={product}  onBuy={handlerBuy} />;
    });
  };
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {/* PRODUCT : START */}
          {renderListProduct()}
          {/* PRODUCT : END */}
          
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
