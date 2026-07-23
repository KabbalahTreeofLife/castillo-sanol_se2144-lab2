import React from "react";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";
import cartIcon from "../assets/shopping-cart.svg";

const CartIcon = () => {
  const { state, dispatch } = useStore();

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      className="cart-icon"
      onClick={() => dispatch({ type: ActionType.TOGGLE_CART, payload: true })}
    >
      <img src={cartIcon} alt="Cart" className="cart-icon__img"></img>
      {totalCount > 0 && <span className="cart-icon__badge">{totalCount}</span>}
    </button>
  );
};

export default CartIcon;
