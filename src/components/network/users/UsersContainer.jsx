import React from 'react'
import { connect } from "react-redux";
import { onFollowed, setUsers, onUnfollowed, setTotalCountUsers, setCurrentPage, setIsLoader, toggleIsFollowing} from "../../../redux/reducerNetwork";
import Users from './Users';
import Preloader from '../../common/preloader/Preloader';
import { API } from '../../../api/api';


class UsersContainerAPI extends React.Component {
  componentDidMount(){
    this.props.setIsLoader(true)
    API.getUsers(this.props.usersPage,this.props.currentPage).then(data => {
        this.props.setIsLoader(false)
        this.props.setUsers(data.items)
        this.props.setTotalCountUsers(data.totalCount)
      })
  }

  onSetCurrentPage = (page) => {
    this.props.setIsLoader(true)
    API.getUsers(this.props.usersPage,page).then(data => {
      this.props.setUsers(data.items)
      this.props.setIsLoader(false)
    })
    this.props.setCurrentPage(page)
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
  {setUsers, setTotalCountUsers, setCurrentPage, setIsLoader, onUnfollowed, onFollowed, toggleIsFollowing})(UsersContainerAPI)

export default UsersContainer