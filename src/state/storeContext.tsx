import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { State, Product } from "./types";
import appStateReducer from "./reducer";
import products from "../data/products.json";
import { Action } from "./actions";

interface StoreContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const productsList = products as Product[];
const StoreContext = createContext<StoreContextValue | undefined>(undefined);
const initialState: State = {
  products: productsList,
  cart: [],
  filters: {
    searchQuery: "",
    category: "",
    maxPrice: Math.max(...productsList.map((p) => p.price)),
    sortBy: "default",
  },
  isCartOpen: false,
  isBrowsing: false,
};
const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
const useStore = (): StoreContextValue => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export { StoreProvider, useStore };
