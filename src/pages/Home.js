// src/pages/Home.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import ProductList from '../components/ProductList';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.items);
  const status = useSelector(state => state.product.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchProducts());
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={handleRefresh}>Refresh</button>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Something went wrong.</p>}

      <ProductList products={products} />
    </div>
  );
}