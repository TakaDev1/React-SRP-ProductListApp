import React from "react";
import useProducts from "../hooks/useProducts";

const DispayProducts = () => {
  const { products, error } = useProducts();

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}: ¥{product.price}
          </li>
        ))}
      </ul>
      <p>{error}</p>
    </div>
  );
};

export default DispayProducts;
