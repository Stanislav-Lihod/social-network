import Contacts from "./contacts/Contacts"
import stl from "./message.module.css"
import DialogsContainer from "./dialogs/DialogsContainer"

const Message = (props) => {  
  return (
    <div className={stl.messages}>
      <Contacts data={props.state.contacts}/>
      <DialogsContainer store={props}/>
    </div>
  )
}

export default Message