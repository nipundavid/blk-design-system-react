import { createStore } from "redux";

import projectReducer from "./project/projectReducer";

const store = createStore(
  projectReducer /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
