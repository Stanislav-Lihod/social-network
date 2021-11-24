const FOLLOWED = 'FOLLOWED',
  UNFOLLOWED = 'UNFOLLOWED',
  SET_USERS = 'SET_USERS'

const initialState = {
  users: []
}

const reducerNetwork = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userid) {
            return {
              ...user,
              followed: false
            }
          }
          return user
        })
      }
    case UNFOLLOWED:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userid) {
            return {
              ...user,
              followed: true
            }
          }
          return user
        })
      }
    case SET_USERS:
      return{
        ...state,
        users: [...action.users]
      }
    default:
      return state
  }
}

export const setUsers = (users) => ({
  type: SET_USERS,
  users
})

export const followedAC = (userid) => ({
  type: FOLLOWED,
  userid
})
export const unfollowedAC = (userid) => ({
  type: UNFOLLOWED,
  userid
})

export default reducerNetwork