import { connect } from "react-redux";
import { followedAC, setUsers, unfollowedAC } from "../../../redux/reducerNetwork";
import Users from "./Users";

const mapStateToProps = (state) =>({ users: state.networkPage.users })
const mapDispatchToProps = (dispatch) => ({
  onFollowed: (userid)=> dispatch(followedAC(userid)),
  onUnfollowed: (userid)=> dispatch(unfollowedAC(userid)),
  setUsers: (users)=> dispatch(setUsers(users))
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer