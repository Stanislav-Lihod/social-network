
import { getAuthUserData } from "./auth-reducer"

const INITIALIZATION_APP = 'INITIALIZATION_APP'

const initialState = {
  initialization: false,
}


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_APP:
      return {
        ...state,
        initialization: true,
      }
      default:
        return state
  }
}

export const initializationSuccess = () => ({type: INITIALIZATION_APP})

export const initializationApp = () => (dispatch) =>{
  // Вместо dispatch(getAuthUserData()) можно использовать переменную, и перечислять через запятую промисы
  // Promise.all([dispatch(getAuthUserData())])
  dispatch(getAuthUserData()).then(()=>{
    dispatch(initializationSuccess())
  })
}

export default appReducer