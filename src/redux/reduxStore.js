import {combineReducers, createStore} from "redux"
import reducerMessagePage from "./reducerMessagePage"
import redicerWallPage from "./reducerWallPage"

const reducers = combineReducers ({
  messagePage: reducerMessagePage,
  wallPage: redicerWallPage,
})

const store = createStore(reducers)

export default store