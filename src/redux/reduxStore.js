import {combineReducers, createStore} from "redux"
import reducerMessagePage from "./reducerMessagePage"
import reducerNavLink from "./reducerNavLink"
import reducerNetwork from "./reducerNetwork"
import redicerWallPage from "./reducerWallPage"

const reducers = combineReducers ({
  messagePage: reducerMessagePage,
  wallPage: redicerWallPage,
  navLinks: reducerNavLink,
  networkPage: reducerNetwork,
})

const store = createStore(reducers)

export default store