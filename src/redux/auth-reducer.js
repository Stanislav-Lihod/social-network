import { stopSubmit } from "redux-form"
import { authAPI, profileAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA',
      SET_STATUS = 'SET_STATUS'

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  allViews: 200,
  todayViews: 33,
  status : '',
  photos: null,
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case SET_STATUS:
      return{
        ...state,
        status: action.status
      }
    default:
      return state
  }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    login,
    email,
    isAuth
  }
})

export const setStatus = (status) =>({type: SET_STATUS, status})


export const updateStatus = (status) => (dispatch) =>{
  return profileAPI.updateStatus(status).then(response=>{
    if (response.data.resultCode === 0){
      dispatch(setStatus(status))
    }
  })
}

export const getUserStatus = () => (dispatch) =>{
  return profileAPI.getStatus().then(response => {
    dispatch(setStatus(response.data))
  })
}

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then(data => {
    !data.resultCode && dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email, true))
  })
}


export const logIn = (email, password) => (dispatch) => {
  authAPI.logIn(email, password).then(data => {
    data.resultCode === 0 ? dispatch(getAuthUserData()) : dispatch(stopSubmit('login', { _error: data.messages }))
  })
}

export const logOut = () => (dispatch) => {
  authAPI.logOut().then(data => {
    if (data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false))
  })
}


export default authReducer