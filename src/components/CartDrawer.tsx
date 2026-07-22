import React, { useState } from "react";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";
import CheckoutModal from "./CheckoutModal";

const CartDrawer = () => {
  const { state, dispatch } = useStore();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      {state.isCartOpen && (
        <div
          className="cart-drawer__backdrop"
          onClick={() =>
            dispatch({ type: ActionType.TOGGLE_CART, payload: false })
          }
        />
      )}

      <div
        className={`cart-drawer ${state.isCartOpen ? "cart-drawer--open" : ""}`}
      >
        <div className="cart-drawer__header">
          <h2>Your Cart</h2>
          <button
            className="cart-drawer__close"
            onClick={() =>
              dispatch({ type: ActionType.TOGGLE_CART, payload: false })
            }
          >
            ×
          </button>
        </div>

        <div className="cart-drawer__items">
          {state.cart.length === 0 && <p>Your cart is empty.</p>}
          {state.cart.map((item) => (
            <div key={item.id} className="cart-item">
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
          ))}
        </div>

        <div className="cart-drawer__footer">
          <p className="cart-drawer__total">Total: ${subtotal.toFixed(2)}</p>
          <button
            className="cart-drawer__checkout"
            disabled={state.cart.length === 0}
            onClick={() => setIsCheckoutOpen(true)}
          >
            Checkout
          </button>
          <button
            className="cart-drawer__clear"
            disabled={state.cart.length === 0}
            onClick={() => dispatch({ type: ActionType.CLEAR_CART })}
          >
            Clear Cart
          </button>
        </div>
      </div>

      {isCheckoutOpen && (
        <CheckoutModal onClose={() => setIsCheckoutOpen(false)} />
      )}
    </>
  );
};

export default CartDrawer;
