import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store";
import Bugui from "./Bugui";
const App=()=>{
  return(
    <>
    <Provider store={store}>
    <Bugui />
    </Provider>
    </>
  )
}
export default App;