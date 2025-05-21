import React from "react";
import useElectronicsProducts from "../hooks/useElectronicsProducts";

const ProductList: React.FC = () => {
  const { products, handleRemove } = useElectronicsProducts();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Electronics Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
            <button
              onClick={() => handleRemove(product.id)}
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center">Total Products: {products.length}</p>
    </div>
  );
};

export default ProductList;