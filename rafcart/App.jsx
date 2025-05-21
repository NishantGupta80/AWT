import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "HP Pavilion 15",
    image: "https://themes.programmingkit.xyz/rafcart/assets/images/laptop-3.png",
    price: 45.00,
    discount: null,
    isFavorite: true
  },
  {
    id: 2,
    name: "COWIN E7 Active",
    image: "https://themes.programmingkit.xyz/rafcart/assets/images/headphone-3.png",
    price: 45.00,
    discount: null,
    isFavorite: true
  },
  {
    id: 3,
    name: "Red Casual Shoes",
    image: "https://themes.programmingkit.xyz/rafcart/assets/images/shoes-1.png",
    price: 45.00,
    discount: 50,
    isFavorite: true
  }
];

function App() {
  return (
    <div className="bg-gray-100 p-10 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
