import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import authReducer from "./store/reducers/auth";
import cartReducer from "./store/reducers/cart";
import channelReducer from "./store/reducers/channel";
import userReducer from "./store/reducers/user";



import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

import store2 from './app/store';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  app: channelReducer,
  user: userReducer,
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

const app = (
  <React.StrictMode>
      <Provider store={store}>
          
              <StateProvider initialState={initialState} reducer={reducer}>
                <App />
              </StateProvider>
          
      </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
