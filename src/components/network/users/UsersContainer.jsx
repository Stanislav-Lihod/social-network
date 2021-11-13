import { connect } from "react-redux";
import { followedAC, unfollowedAC } from "../../../redux/reducerNetwork";
import Users from "./Users";

const mapStateToProps = (state) => { return { users: state.networkPage.users } }
const mapDispatchToProps = (dispatch) => { return {
  onFollowed: (userid)=> dispatch(followedAC(userid)),
  onUnfollowed: (userid)=> dispatch(unfollowedAC(userid))
} }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer