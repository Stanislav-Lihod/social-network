import Contacts from "./contacts/Contacts"
import Dialogs from "./dialogs/Dialogs"
import stl from "./message.module.css"

const Message = () => {
  return (
    <div className={stl.messages}>
      <Contacts/>
      <Dialogs/>
    </div>
  )
}

export default Message