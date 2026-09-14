import React from "react";
import useProducts from "../hooks/useProducts";

const DispayProducts = () => {
  const { products, error } = useProducts();

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="bg-gray-700 my-2 py-10 rounded-xl">
            {product.title}: <span className="text-green-500">¥{product.price}</span>
          </li>
        ))}
      </ul>
      <p>{error}</p>
    </div>
  );
};

export default DispayProducts;
