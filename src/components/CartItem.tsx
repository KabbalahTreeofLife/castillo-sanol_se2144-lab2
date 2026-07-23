import React from "react";
import { CartItem as CartItemType } from "../state/types";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { dispatch } = useStore();

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <span className="cart-item__name">{item.name}</span>
        <span className="cart-item__price">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
      <div className="cart-item__controls">
        <button
          onClick={() =>
            dispatch({
              type: ActionType.UPDATE_QUANTITY,
              payload: { id: item.id, quantity: item.quantity - 1 },
            })
          }
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() =>
            dispatch({
              type: ActionType.UPDATE_QUANTITY,
              payload: { id: item.id, quantity: item.quantity + 1 },
            })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ActionType.REMOVE_FROM_CART,
              payload: item.id,
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
