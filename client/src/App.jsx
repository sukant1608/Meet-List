import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import decode from 'jwt-decode'
import { Provider } from 'react-redux'

import { store } from "./store/index";
import { setCurrentUser, addError, setToken } from './store/actions'
import RouteViews from "./components/RouteViews"
import NavBar from "./components/NavBar";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken)
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)))
  } catch (err) {
    store.dispatch(setCurrentUser({}))
    store.dispatch(addError(err))
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <RouteViews />
      </Router>
    </Provider>
  );
}

export default App;
