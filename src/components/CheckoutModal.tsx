import React from "react";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";

interface CheckoutModalProps {
  onClose: () => void;
}

const CheckoutModal = ({ onClose }: CheckoutModalProps) => {
  const { state, dispatch } = useStore();

  const grandTotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = () => {
    dispatch({ type: ActionType.CLEAR_CART });
    onClose();
  };

  return (
    <div className="checkout-modal__backdrop">
      <div className="checkout-modal">
        <h2>Order Summary</h2>
        {state.cart.length === 0 ? (
          <p>No items to order.</p>
        ) : (
          <ul className="checkout-modal__list">
            {state.cart.map((item) => (
              <li key={item.id}>
                {item.name} x{item.quantity} — $
                {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <p className="checkout-modal__total">
          Grand Total: ${grandTotal.toFixed(2)}
        </p>
        <div className="checkout-modal__actions">
          <button onClick={handlePlaceOrder} disabled={state.cart.length === 0}>
            Place Order
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
