import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function ProductCard(props) {
  const addToCart = () => {
    toast("Product added to cart!");
  }

  return (
    <div className="product-card">
      <img src={props.product.image} alt={props.product.title} className="product-image" />
      <div>
        <p className="product-title">{props.product.title}</p>
        <p className="product-price">${props.product.price.toFixed(2)}</p>
        <button className="btn2" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
      
      <ToastContainer />
    </div>
  );
}

export default ProductCard;
