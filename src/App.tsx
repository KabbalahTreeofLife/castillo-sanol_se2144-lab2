import React from "react";

// State Provider (Task 4)
import { StoreProvider } from "./state/StoreContext";

// UI Components (Person A: Tasks 5, 7, 8 | Person B: Task 10, 12)
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";

// Styles (Task 14)
import "./styles/global.css";

export default function App() {
  return (
    <StoreProvider>
      <div className="app">
        {/* Header containing title & CartIcon badge */}
        <Header />

        <div className="content-container">
          {/* Controls: search input, category select, max price slider, sort select */}
          <FilterBar />

          {/* Renders filtered/sorted list of ProductCard components */}
          <main>
            <ProductGrid />
          </main>
        </div>

        {/* Global Overlays */}
        <CartDrawer />
        <CheckoutModal />
      </div>
    </StoreProvider>
  );
}
