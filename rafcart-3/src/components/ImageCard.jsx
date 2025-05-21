import React from "react";

const ImageCard = ({ image, text }) => {
  return (
    <div className="relative w-full md:w-1/3 h-64 overflow-hidden rounded-lg shadow-md">
      <img
        src={image}
        alt={text}
        className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 className="text-white text-2xl font-semibold">{text}</h2>
      </div>
    </div>
  );
};

export default ImageCard;
