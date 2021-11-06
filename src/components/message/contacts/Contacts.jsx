import Contact from "./contact/Contact"
import stl from "./contacts.module.css"



const Contacts = (props) => {
  
  const contactItem = props.data.map(el =><Contact name={el.name} url={el.id} date={el.date} message={el.lastMessage}/>)
  return (
    <div className={stl.contacts}>
      <div className={stl.addons}>
        <div className={stl.search}></div>
        <div className={stl.call}></div>
        <div className={stl.groups}></div>
      </div>
      {contactItem}
    </div>
  )
}

export default Contacts