import {
  API
} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  allViews: 200,
  todayViews: 33
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
          isAuth: true
      }
      default:
        return state
  }
}

export const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    login,
    email
  }
})

export const authenticator = () => {
  return (dispatch) => {
    API.login().then(data => {
      !data.resultCode && dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email))
    })
  }
}

export default authReducer