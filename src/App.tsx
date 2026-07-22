import React from "react";
import { StoreProvider } from "./state/storeContext";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import "./styles/global.css";

const App = () => {
  return (
    <StoreProvider>
      <div className="app">
        <Header />
        <CartDrawer />
      </div>
    </StoreProvider>
  );
};

export default App;
