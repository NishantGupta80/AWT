import React from "react";
import ImageCard from "./components/ImageCard";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-6">
      <ImageCard
        image="https://via.placeholder.com/300x200?text=Bedroom"
        text="Bedroom"
      />
      <ImageCard
        image="https://via.placeholder.com/300x200?text=Mattress"
        text="Mattress"
      />
      <ImageCard
        image="https://via.placeholder.com/300x200?text=Office"
        text="Office"
      />
    </div>
  );
};

export default App;
