import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, rateProduct } from '../redux/productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className="product-list">
      {items.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <button onClick={() => dispatch(rateProduct(product.id))}>
            Rate
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
