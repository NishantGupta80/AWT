const ProductCard = ({ image, name, price, discount, isFavorite }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
        {discount && (
          <span className="absolute top-2 left-2 bg-yellow-600 text-white text-sm px-2 py-1 rounded">
            {discount}%
          </span>
        )}
  
        {isFavorite && (
          <img
            src="./images/heart.png"
            alt="Favorite"
            className="absolute w-5 top-2 right-2 border rounded-xl border-red-500"
          />
        )}
  
        <img className="w-full p-4" src={image} alt={name} />
  
        <div className="p-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-red-600 text-lg font-bold">
            ${price}{" "}
            {discount && (
              <span className="text-gray-400 line-through text-sm">${(price * (100 + discount)) / 100}</span>
            )}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  