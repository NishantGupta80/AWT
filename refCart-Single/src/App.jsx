import React from 'react';
//import "./App.css";

const App = () => {
  return (
    <div className="flex gap-8 p-6 bg-white shadow-lg rounded-lg m-10 max-w-6xl mx-auto">
      {/* Product Image Section */}
      <div className="flex flex-col gap-4">
        <img
          src="/images/shoe-main.png"
          alt="Main Product"
          className="w-80 h-80 object-contain border rounded"
        />
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((id) => (
            <img
              key={id}
              src={`/images/thumb${id}.png`}
              alt={`Thumbnail ${id}`}
              className="w-16 h-16 object-contain border rounded hover:ring-2 ring-pink-500"
            />
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">MEN'S ADIDAS COURTSMASH</h2>
        <div className="flex items-center gap-2 text-yellow-400 text-sm mb-2">
          {'★'.repeat(5)} <span className="text-gray-500 ml-2">(3 Reviews)</span>
        </div>
        <ul className="text-sm text-gray-700 mb-4">
          <li><strong>Availability:</strong> <span className="text-green-600">In Stock</span></li>
          <li><strong>Brand:</strong> Adidas</li>
          <li><strong>Category:</strong> Running</li>
          <li><strong>SKU:</strong> SKU123456</li>
        </ul>
        <div className="text-lg font-semibold mb-4">
          Price: <span className="line-through text-gray-500">$200.00</span>
          <span className="text-red-600 ml-2">$149.00</span>
        </div>
        <div className="flex gap-4">
          <button className="bg-pink-600 text-white px-6 py-2 rounded">Add to Cart</button>
          <button className="border border-pink-600 text-pink-600 px-6 py-2 rounded">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default App;