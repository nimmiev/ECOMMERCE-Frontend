import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function ProductCard(props) {
  const addToCart = () => {
    alert("Product added to cart!");
  }

  return (
    <div className="product-card">
      <img src={props.product.image} alt={props.product.title} className="product-image" />
      <div>
        <Link to={`/product-details/${props.product.id}`}>
          <p className="product-title">{props.product.title}</p>
        </Link>
        <p className="product-price">${props.product.price.toFixed(2)}</p>
        <button className="btn2" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
