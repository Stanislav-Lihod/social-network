import { connect } from "react-redux"
import { addNewMessageActionCreate, updateMessageTextActionCreate } from "../../../redux/reducerMessagePage"
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
  return { valueText: state.messagePage.messageText, messages: state.messagePage.messages }
}
const mapDispatchToProps = (dispatch) => {
  return { 
    updateMessageText: (text) => dispatch(updateMessageTextActionCreate(text)),
    addNewMessage: () => dispatch(addNewMessageActionCreate())
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer