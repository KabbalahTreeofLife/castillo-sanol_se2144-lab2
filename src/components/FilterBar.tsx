import React from "react";
import { useStore } from "../state/storeContext";
import { ActionType } from "../state/actions";

const FilterBar = () => {
  const { state, dispatch } = useStore();
  const { filters, products } = state;

  const categories = Array.from(new Set(products.map((p) => p.category))).sort();
  const maxProductPrice = Math.max(...products.map((p) => p.price));

  return (
    <div className="filter-bar">
      <div className="filter-bar__group">
        <label className="filter-bar__label" htmlFor="search">
          Search
        </label>
        <input
          id="search"
          className="filter-bar__input"
          type="text"
          placeholder="Search products..."
          value={filters.searchQuery}
          onChange={(e) =>
            dispatch({ type: ActionType.SET_SEARCH_QUERY, payload: e.target.value })
          }
        />
      </div>

      <div className="filter-bar__group">
        <label className="filter-bar__label" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className="filter-bar__select"
          value={filters.category}
          onChange={(e) =>
            dispatch({ type: ActionType.SET_CATEGORY, payload: e.target.value })
          }
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-bar__group">
        <label className="filter-bar__label" htmlFor="maxPrice">
          Max Price: ${(filters.maxPrice / 100).toFixed(2)}
        </label>
        <input
          id="maxPrice"
          className="filter-bar__range"
          type="range"
          min={0}
          max={maxProductPrice}
          step={100}
          value={filters.maxPrice}
          onChange={(e) =>
            dispatch({ type: ActionType.SET_MAX_PRICE, payload: Number(e.target.value) })
          }
        />
      </div>

      <div className="filter-bar__group">
        <label className="filter-bar__label" htmlFor="sort">
          Sort By
        </label>
        <select
          id="sort"
          className="filter-bar__select"
          value={filters.sortBy}
          onChange={(e) =>
            dispatch({ type: ActionType.SET_SORT, payload: e.target.value })
          }
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
