import React from "react"
import Dialog from "./dialog/Dialog"
import stl from "./dialogs.module.css"

let newMessage = React.createRef()

class Dialogs extends React.Component {

  onUpdateMessageText = () => this.props.updateMessageText(newMessage.current.value)
  onAddMessage = () => newMessage.current.value.length > 0 && this.props.addNewMessage()       
  render() {
    
  const messages = this.props.messages.map(el => <Dialog key={el.id} name="Stanislav Lihodievski" date="31 Oct" message={el} />)

    return <div className={stl.dialogs}>
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
        <input type="text" ref={newMessage} onKeyDown={e => { if (e.key === "Enter") this.onAddMessage() }} onChange={() => this.onUpdateMessageText()} value={this.props.valueText} />
        <button onClick={this.onAddMessage}>Отправить</button>
        <div className={stl.addPhoto}></div>
        <div className={stl.addVoice}></div>
      </div>
    </div>
  }
}
export default Dialogs