// src/components/ProductDetail.js
import React from 'react';

export default function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} width="200" />
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}