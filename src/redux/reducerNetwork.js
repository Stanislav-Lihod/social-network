const FOLLOWED = 'FOLLOWED',
  UNFOLLOWED = 'UNFOLLOWED',
  SET_USERS = 'SET_USERS',
  SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_ISLOADER = 'SET_ISLOADER',
  TOGGLE_IS_FOLLOWING_PROPGRESS = 'TOGGLE_IS_FOLLOWING_PROPGRESS'


const initialState = {
  users: [],
  usersPage: 12,
  totalUsersCount: 0,
  currentPage: 1,
  isLoader: true,
  followingInProgress: false
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
    case SET_TOTAL_COUNT_USERS:
      return{
        ...state,
        totalUsersCount: action.totalCount
      }
    case SET_CURRENT_PAGE:
      return{
        ...state,
        currentPage: action.currentPage
      }
    case SET_ISLOADER:
      return{
        ...state,
        isLoader: action.isLoader
      }
    case TOGGLE_IS_FOLLOWING_PROPGRESS:
      return{
        ...state,
        followingInProgress : action.isFollowing
      }
    default:
      return state
  }
}

export const setUsers = (users) => ({ type: SET_USERS,  users})
export const onFollowed = (userid) => ({ type: FOLLOWED,  userid})
export const onUnfollowed = (userid) => ({ type: UNFOLLOWED,  userid})
export const setTotalCountUsers = (totalCount) => ({ type: SET_TOTAL_COUNT_USERS,  totalCount})
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE,  currentPage})
export const setIsLoader = (isLoader) =>({ type: SET_ISLOADER,  isLoader})
export const toggleIsFollowing = (isFollowing) => ({ type: TOGGLE_IS_FOLLOWING_PROPGRESS, isFollowing})

export default reducerNetwork