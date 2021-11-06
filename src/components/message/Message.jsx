import Contacts from "./contacts/Contacts"
import Dialogs from "./dialogs/Dialogs"
import stl from "./message.module.css"

const Message = (props) => {  
  return (
    <div className={stl.messages}>
      <Contacts data={props.state.contacts}/>
      <Dialogs messages={props.state} despatch={props.despatch}/>
    </div>
  )
}

export default Message