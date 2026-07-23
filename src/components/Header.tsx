import React from "react";
import CartIcon from "./CartIcon";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";

const Header = () => {
  const { dispatch } = useStore();

  return (
    <header className="header">
      <button
        className="header__title"
        onClick={() =>
          dispatch({ type: ActionType.SET_BROWSING, payload: false })
        }
      >
        GearHub
      </button>
      <CartIcon />
    </header>
  );
};

export default Header;
