import { addNewMessageActionCreate, updateMessageTextActionCreate } from "../../../redux/reducerMessagePage"
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {
  const updateMessageText = (text) =>props.store.dispatch(updateMessageTextActionCreate(text))
  const addNewMessage = () => props.store.dispatch(addNewMessageActionCreate())

  return <Dialogs addNewMessage={addNewMessage} updateMessageText={updateMessageText} valueText={props.store.state.messageText} messages={props.store.state.messages}/>
}

export default DialogsContainer