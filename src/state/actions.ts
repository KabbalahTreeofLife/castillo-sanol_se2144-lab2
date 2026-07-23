import { Product } from "./types";

export enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_QUANTITY = "UPDATE_QUANTITY",
  CLEAR_CART = "CLEAR_CART",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  SET_CATEGORY = "SET_CATEGORY",
  SET_SORT = "SET_SORT",
  SET_MAX_PRICE = "SET_MAX_PRICE",
  TOGGLE_CART = "TOGGLE_CART",
}

export type Action =
  | {
      type: ActionType.ADD_TO_CART;
      payload: Product;
    }
  | {
      type: ActionType.REMOVE_FROM_CART;
      payload: string;
    }
  | {
      type: ActionType.UPDATE_QUANTITY;
      payload: { id: string; quantity: number };
    }
  | {
      type: ActionType.CLEAR_CART;
    }
  | {
      type: ActionType.SET_SEARCH_QUERY;
      payload: string;
    }
  | {
      type: ActionType.SET_CATEGORY;
      payload: string;
    }
  | {
      type: ActionType.SET_SORT;
      payload: string;
    }
  | {
      type: ActionType.SET_MAX_PRICE;
      payload: number;
    }
  | {
      type: ActionType.TOGGLE_CART;
      payload?: boolean;
    };
