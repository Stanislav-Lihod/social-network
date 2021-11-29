import {combineReducers, createStore} from "redux"
import authReducer from "./auth-reducer"
import reducerMessagePage from "./reducerMessagePage"
import reducerNavLink from "./reducerNavLink"
import reducerNetwork from "./reducerNetwork"
import redicerWallPage from "./reducerWallPage"

const reducers = combineReducers ({
  messagePage: reducerMessagePage,
  wallPage: redicerWallPage,
  navLinks: reducerNavLink,
  networkPage: reducerNetwork,
  auth: authReducer,
})

const store = createStore(reducers)

export default store