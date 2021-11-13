import stl from "./message.module.css"
import DialogsContainer from "./dialogs/DialogsContainer"
import ContactsContainer from "./contacts/ContactsContainer"

const Message = () => {  
  return (
    <div className={stl.messages}>
      <ContactsContainer/>
      <DialogsContainer/>
    </div>
  )
}

export default Message