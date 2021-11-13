import logo1 from '../img/users/1.jpg';
import logo2 from '../img/users/2.jpg';
import logo3 from '../img/users/3.jpg';
import logo4 from '../img/users/4.jpg';
import bgLogo from '../img/bg-profile.png';

const FOLLOWED = 'FOLLOWED',
  UNFOLLOWED = 'UNFOLLOWED'

const initialState = {
  users: [{
      id: 1,
      name: "Ihar Siatkouski",
      prof: "Front-end Developer",
      logo: logo1,
      bg: bgLogo,
      followed: true,
    },
    {
      id: 2,
      name: "Natalie Tolstaya",
      prof: "Account/Project Manager",
      logo: logo2,
      bg: bgLogo,
      followed: true,
    },
    {
      id: 3,
      name: "Alisa Tarnovskaya",
      prof: "Front-end Developer",
      logo: logo3,
      bg: bgLogo,
      followed: false,
    }, {
      id: 4,
      name: "Kate Zaprudskaya",
      prof: "Project Manager/Account Manager",
      logo: logo4,
      bg: bgLogo,
      followed: true,
    },
  ]
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
        default:
          return state
  }
}



export const followedAC = (userid) => ({
  type: FOLLOWED,
  userid
})
export const unfollowedAC = (userid) => ({
  type: UNFOLLOWED,
  userid
})

export default reducerNetwork