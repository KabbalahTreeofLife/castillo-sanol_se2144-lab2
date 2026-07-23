import React, { useMemo } from "react";
import { useStore } from "../state/storeContext";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { state } = useStore();

  const featured = useMemo(() => {
    const shuffled = [...state.products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [state.products]);

  return (
    <div className="featured-products">
      <h2 className="featured-products__title">Featured Products</h2>
      <div className="featured-products__grid">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
