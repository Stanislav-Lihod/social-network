import React from "react"
import { addNewMessageActionCreate, updateMessageTextActionCreate } from "../../../redux/reducerMessagePage"
import Dialog from "./dialog/Dialog"
import stl from "./dialogs.module.css"

let newMessage = React.createRef()

const Dialogs = (props) => {
  const updateMessageText = () =>{props.despatch(updateMessageTextActionCreate(newMessage.current.value))}
  const addMessage = () => {props.despatch(addNewMessageActionCreate())}

  const messages = props.messages.messages.map(el => <Dialog name="Stanislav Lihodievski" date="31 Oct" message={el}/>)
  return (
    <div className={stl.dialogs}>
      <div className={stl.addons}>
        <div className={stl.name}></div>
        <div className={stl.last_online}></div>
        <div className={stl.call}></div>
        <div className={stl.search}></div>
        <div className={stl.settings}></div>
      </div>
      {messages}
      <div className={stl.newMessage}>
        <div className={stl.addDocs}></div>
        <input type="text" ref={newMessage} onKeyDown={e => {if (e.key === "Enter") addMessage()}} onChange={()=> updateMessageText()} value={props.messages.messageText}/>
        <button onClick={addMessage}>Отправить</button>
        <div className={stl.addPhoto}></div>
        <div className={stl.addVoice}></div>
      </div>
    </div>
  )
}

export default Dialogs