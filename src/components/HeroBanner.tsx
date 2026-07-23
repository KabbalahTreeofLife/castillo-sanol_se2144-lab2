import React from "react";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";

const HeroBanner = () => {
  const { dispatch } = useStore();

  return (
    <div className="hero-banner">
      <div className="hero-banner__content">
        <h2 className="hero-banner__title">Gear Up for greatness</h2>
        <p className="hero-banner__subtitle">
          Quality tech accessories for work, play, and everything in between.
        </p>
        <button
          className="hero-banner__cta"
          onClick={() =>
            dispatch({ type: ActionType.SET_BROWSING, payload: true })
          }
        >
          Browse All Products
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
