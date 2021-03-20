import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ticketListReducer } from "./reducers/ticketReducers";

const reducer = combineReducers({
  ticketList: ticketListReducer,
});
const intialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;