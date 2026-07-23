import React, { useMemo } from "react";
import { useStore } from "../state/storeContext";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { state } = useStore();
  const { products, filters } = state;

  const filtered = useMemo(() => {
    let result = products;

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(query));
    }

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    result = result.filter((p) => p.price <= filters.maxPrice);

    if (filters.sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, filters]);

  return (
    <div className="product-grid">
      {filtered.length === 0 ? (
        <p className="product-grid__empty">No products found.</p>
      ) : (
        <div className="product-grid__list">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
