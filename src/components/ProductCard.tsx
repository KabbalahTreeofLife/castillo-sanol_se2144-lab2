import React from "react";
import { Product } from "../state/types";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useStore();

  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={product.image}
        alt={product.name}
      />
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <span className="product-card__category">{product.category}</span>
        <p className="product-card__price">
          ${(product.price / 100).toFixed(2)}
        </p>
        <button
          className="product-card__add"
          disabled={!product.inStock}
          onClick={() =>
            dispatch({ type: ActionType.ADD_TO_CART, payload: product })
          }
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
