// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  if (!products.length) {
    return (
      <div className="empty-list">
        <h3>No Products Found</h3>
        <img src="/empty.png" alt="Empty list" style={{ width: "200px" }} />
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}