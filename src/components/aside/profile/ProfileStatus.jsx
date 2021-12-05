import React from "react"
import stl from "./profile.module.css"

class ProfileStatus extends React.Component{
  state ={
    editMode: false,
    status: this.props.status
  }

  activeEditMode = () => {this.setState({editMode: true})}
  deactiveEditMode = (event) => {
    this.setState({
    editMode:false,
    status: event.target.value
  })}
  handleFocus = (event) => event.target.select()

  render(){
    return(   
      <>   
        {!this.state.editMode && <div onClick={this.activeEditMode} className={stl.profileText__profession}>{this.state.status}</div>}
        {this.state.editMode && <div><input autoFocus={true} onFocus={this.handleFocus} onBlur={this.deactiveEditMode} defaultValue={this.state.status} /></div>}
      </>
    )
  }
}

export default ProfileStatus