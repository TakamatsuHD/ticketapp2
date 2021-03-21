import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ticketListReducer,
  ticketDetailsReducer,
} from "./reducers/ticketReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  ticketList: ticketListReducer,
  ticketDetails: ticketDetailsReducer,
  cart: cartReducer,
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const intialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
