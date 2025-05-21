
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex border rounded-lg shadow-sm overflow-hidden p-4 bg-white max-w-2xl mx-auto mb-6">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-red-500 font-semibold">${product.price} <span className="line-through text-gray-500 text-sm">${product.originalPrice}</span></p>
          <div className="flex items-center text-yellow-400 text-sm mb-1">
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)} <span className="ml-2 text-gray-500 text-xs">({product.reviews})</span>
          </div>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.
          </p>
        </div>
        <div className="mt-3 flex space-x-2">
          <button className="bg-red-500 text-white px-4 py-1 rounded text-sm">Add to Cart</button>
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded text-sm">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
