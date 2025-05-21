import { useEffect, useState } from "react";
import { Product } from "../types/Product";

const STORAGE_KEY = "electronicsProducts";

const useElectronicsProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = null;
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: Product[]) => {
          const electronics = data.filter(
            (product) => product.category === "electronics"
          );
          setProducts(electronics);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(electronics));
        });
    }
  }, []);

  const handleRemove = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
  };

  return { products, handleRemove };
};

export default useElectronicsProducts;