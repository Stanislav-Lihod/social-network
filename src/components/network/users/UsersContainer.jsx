import React from 'react'
import { connect } from "react-redux";
import { followedAC, setUsers, unfollowedAC, setTotalCountUsersAC, setCurrentPageAC, setIsLoaderAC} from "../../../redux/reducerNetwork";
import * as axios from 'axios'
import Users from './Users';
import Preloader from '../../common/preloader/Preloader';


class UsersContainerAPI extends React.Component {
  componentDidMount(){
    this.props.setIsLoader(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage}&page=${this.props.currentPage}`).then(response => {
        this.props.setIsLoader(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalCountUsers(response.data.totalCount)
      })
  }

  onSetCurrentPage = (page) => {
    this.props.setIsLoader(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage}&page=${page}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setIsLoader(false)
    })
    this.props.setCurrentPage(page)
  }
  render(){
    return <>
    {this.props.isLoader ? <Preloader/> : null}
    <Users users={this.props.users}
                  onFollowed={this.props.onFollowed}
                  onUnfollowed={this.props.onUnfollowed}
                  totalUsersCount={this.props.totalUsersCount}
                  usersPage={this.props.usersPage}
                  onSetCurrentPage={this.onSetCurrentPage}
                  currentPage={this.props.currentPage}/>
    </>
  }
}

const mapStateToProps = (state) =>({ 
  users: state.networkPage.users,
  usersPage: state.networkPage.usersPage,
  totalUsersCount: state.networkPage.totalUsersCount,
  currentPage: state.networkPage.currentPage,
  isLoader: state.networkPage.isLoader
})
const mapDispatchToProps = (dispatch) => ({
  onFollowed: (userid)=> dispatch(followedAC(userid)),
  onUnfollowed: (userid)=> dispatch(unfollowedAC(userid)),
  setUsers: (users)=> dispatch(setUsers(users)),
  setTotalCountUsers: (totalCount) => dispatch(setTotalCountUsersAC(totalCount)),
  setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  setIsLoader: (isLoader)=> dispatch(setIsLoaderAC(isLoader))
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)

export default UsersContainer