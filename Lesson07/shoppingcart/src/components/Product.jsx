import React, { useState } from "react";

function Product(props) {
  const { key, product } = props;

  const handlerBuy = (event) => {
    event.preventDefault();
    console.log("Buy product: ", product);
    let cart = {
      quantityBuy: quantityBuy,
      idProduct: product.id,
      price: product.price,
      // product: product,
    };
    // let cart =product;
    // cart.quantity = quantityBuy;
    props.onBuy(cart);
  };
  const [quantityBuy, setQuantityBuy] = useState(1);
  const handlerChangeQuantity = (event) => {
    if (event.target.value < 1) {
      setQuantityBuy(1);
    } else if (event.target.value > product.quatity) {
      setQuantityBuy(product.quatity);
    } else {
      setQuantityBuy(event.target.value);
    }
  };
  return (
    <div className="media product">
      <div className="media-left">
        <a href="#">
          <img
            className="media-object"
            src={product.image}
            alt={product.name}
          />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{product.name}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
          asperiores veniam repellat unde debitis quisquam magnam magni ut
          deleniti!
        </p>
        {product.quatity > 0 ? (
          <>
            <input
              // name="quantity-product-1"
              type="number"
              name="quantity"
              value={quantityBuy}
              onChange={handlerChangeQuantity}
              min={1}
              max={product.quatity}
            />
            <button
              data-product={1}
              className="btn btn-success"
              onClick={handlerBuy}
            >
              Mua hàng
            </button>
            <a data-product={1} href="#" className="price">
              {`${product.price} USD`}
            </a>
          </>
        ) : (
          <>
            <span className="price">{`${product.price} USD`}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Product;
