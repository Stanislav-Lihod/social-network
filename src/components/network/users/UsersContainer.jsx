import React from 'react'
import { connect } from "react-redux";
import { followedThunk, unfollowedThunk, setCurrentPage, toggleIsFollowing, getUsersThunkCreator} from "../../../redux/reducerNetwork";
import Users from './Users';
import Preloader from '../../common/preloader/Preloader';


class UsersContainerAPI extends React.Component {
  componentDidMount(){
    this.props.getUsersThunkCreator(this.props.usersPage, this.props.currentPage)
  }

  onSetCurrentPage = (page) => {
    this.props.getUsersThunkCreator(this.props.usersPage, page)
  }
  render(){
    return <>
    {this.props.isLoader ? <Preloader/> : null}
    <Users {...this.props} onSetCurrentPage={this.onSetCurrentPage}/>
    </>
  }
}

const mapStateToProps = (state) =>({ 
  users: state.networkPage.users,
  usersPage: state.networkPage.usersPage,
  totalUsersCount: state.networkPage.totalUsersCount,
  currentPage: state.networkPage.currentPage,
  isLoader: state.networkPage.isLoader,
  followingInProgress: state.networkPage.followingInProgress
})

const UsersContainer = connect(mapStateToProps, 
  {setCurrentPage, unfollowedThunk, followedThunk, toggleIsFollowing, getUsersThunkCreator})(UsersContainerAPI)

export default UsersContainer