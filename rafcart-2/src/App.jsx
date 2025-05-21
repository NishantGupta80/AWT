
import React from "react";
import ProductCard from "./components/ProductCard";

const products = [
  {
    name: "COWIN E7 Active",
    price: "45.00",
    originalPrice: "55.45",
    rating: 4,
    reviews: 120,
    image: "/cowin-e7.png"
  },
  {
    name: "Apple iPhone XR",
    price: "45.00",
    originalPrice: "66.45",
    rating: 4,
    reviews: 110,
    image: "/iphone-xr.png"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
}

export default App;
