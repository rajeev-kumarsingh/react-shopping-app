import React from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

function HomePage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Home Page</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={(product) => dispatch(addToCart(product))}
        />
      ))}
    </div>
  );
}

export default HomePage;
