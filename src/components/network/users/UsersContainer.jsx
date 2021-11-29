import React from 'react'
import { connect } from "react-redux";
import { onFollowed, setUsers, onUnfollowed, setTotalCountUsers, setCurrentPage, setIsLoader} from "../../../redux/reducerNetwork";
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
    <Users {...this.props} onSetCurrentPage={this.onSetCurrentPage}/>
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

const UsersContainer = connect(mapStateToProps, 
  {setUsers, setTotalCountUsers, setCurrentPage, setIsLoader, onUnfollowed, onFollowed})(UsersContainerAPI)

export default UsersContainer