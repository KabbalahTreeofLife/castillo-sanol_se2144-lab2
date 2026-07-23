import { State } from "./types";
import { Action, ActionType } from "./actions";

const appStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      const existing = state.cart.find((item) => item.id === action.payload.id);

      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case ActionType.UPDATE_QUANTITY: {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    }
    case ActionType.CLEAR_CART:
      return { ...state, cart: [] };
    case ActionType.SET_SEARCH_QUERY:
      return {
        ...state,
        filters: { ...state.filters, searchQuery: action.payload },
      };
    case ActionType.SET_CATEGORY:
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    case ActionType.SET_SORT:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload as "default" | "price-asc" | "price-desc",
        },
      };
    case ActionType.SET_MAX_PRICE:
      return {
        ...state,
        filters: { ...state.filters, maxPrice: action.payload },
      };
    case ActionType.TOGGLE_CART:
      return {
        ...state,
        isCartOpen:
          action.payload !== undefined ? action.payload : !state.isCartOpen,
      };
    default:
      return state;
  }
};

export default appStateReducer;
