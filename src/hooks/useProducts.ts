import { useEffect, useState } from "react";
import type { Product } from "../types/ProductType";

const useProducts = (): {
  products: Product[];
  error: string | null;
} => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};

export default useProducts;
