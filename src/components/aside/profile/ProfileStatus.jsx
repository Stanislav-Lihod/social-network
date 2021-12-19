import React from "react"
import { connect } from "react-redux"
import {getUserStatus, updateStatus} from "../../../redux/auth-reducer"
import stl from "./profile.module.css"

class ProfileStatus extends React.Component{
  componentDidMount(){
    this.props.getUserStatus()
  }

  componentDidUpdate(prevProps, prevState){
     if (prevProps.status !== this.props.status) {
       this.setState({
         status: this.props.status
       })
     }
  }

  state ={
    editMode: false,
    status: this.props.status
  }

  activeEditMode = () => {this.setState({editMode: true})}
  deactiveEditMode = (e) => {
    this.props.updateStatus(e.target.value)
      this.setState({
      editMode:false,
      status: e.target.value
    })  
  }
  handleFocus = (e) => e.target.select()
  onChangeUpdate = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render(){
    return(   
      <>   
        {!this.state.editMode && <div onClick={this.activeEditMode} className={stl.profileText__profession}>{this.props.status || '----'}</div>}
        {this.state.editMode && <div><input autoFocus={true} onChange={this.onChangeUpdate} onFocus={this.handleFocus} onBlur={this.deactiveEditMode} value={this.state.status} /></div>}
      </>
    )
  }
}
const mapStateToProps = (state) =>({
  status: state.auth.status
})

export default connect(mapStateToProps, {getUserStatus, updateStatus})(ProfileStatus)