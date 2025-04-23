// src/components/ProductItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductItem({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.title} width="100" height="100" />
      <h4>{product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}</h4>
      <p>${product.price}</p>
    </div>
  );
}