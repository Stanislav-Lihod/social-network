import {applyMiddleware, combineReducers, createStore} from "redux"
import authReducer from "./auth-reducer"
import reducerMessagePage from "./reducerMessagePage"
import reducerNavLink from "./reducerNavLink"
import reducerNetwork from "./reducerNetwork"
import redicerWallPage from "./reducerWallPage"
import thunkMiddleware from 'redux-thunk'
import reducerFeed from "./reducerFeed"

const reducers = combineReducers ({
  messagePage: reducerMessagePage,
  wallPage: redicerWallPage,
  navLinks: reducerNavLink,
  networkPage: reducerNetwork,
  auth: authReducer,
  feed: reducerFeed
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store