import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import authReducer from "./auth-reducer"
import reducerMessagePage from "./reducerMessagePage"
import reducerNavLink from "./reducerNavLink"
import reducerNetwork from "./reducerNetwork"
import redicerWallPage from "./reducerWallPage"
import thunkMiddleware from 'redux-thunk'
import reducerFeed from "./reducerFeed"
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer"

const reducers = combineReducers ({
  messagePage: reducerMessagePage,
  wallPage: redicerWallPage,
  navLinks: reducerNavLink,
  networkPage: reducerNetwork,
  auth: authReducer,
  feed: reducerFeed,
  form: formReducer,
  app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store