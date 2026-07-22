import React from "react";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";

const CartIcon = () => {
  const { state, dispatch } = useStore();

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      className="cart-icon"
      onClick={() => dispatch({ type: ActionType.TOGGLE_CART, payload: true })}
    >
      Cart
      {totalCount > 0 && <span className="cart-icon__badge">{totalCount}</span>}
    </button>
  );
};

export default CartIcon;
