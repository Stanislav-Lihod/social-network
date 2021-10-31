import Dialog from "./dialog/Dialog"
import stl from "./dialogs.module.css"

const Dialogs = () => {
  return (
    <div className={stl.dialogs}>
      <div className={stl.addons}>
        <div className={stl.name}></div>
        <div className={stl.last_online}></div>
        <div className={stl.call}></div>
        <div className={stl.search}></div>
        <div className={stl.settings}></div>
      </div>
      <Dialog name="Michail Issacow" date="31 Oct" message="On voluptate velit esse cillum dolore eu fugiat nulla"/>
      <Dialog name="Stanislav Lihodievski" date="31 Oct" message="Sed ut perspiciatis unde omnis iste natus error sit voluptatem aSed ut perspiciatis unde omnis iste natus error sit voluptatem aSed ut perspiciatis unde omnis iste natus error sit voluptatem a"/>
      <div className={stl.new_message}>
        <div className={stl.add_docs}></div>
        <input type="text" />
        <div className={stl.add_photo}></div>
        <div className={stl.add_voice}></div>
      </div>
    </div>
  )
}

export default Dialogs