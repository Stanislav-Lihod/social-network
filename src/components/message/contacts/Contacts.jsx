import Contact from "./contact/Contact"
import stl from "./contacts.module.css"

const Contacts = () => {
  return (
    <div className={stl.contacts}>
      <div className={stl.addons}>
        <div className={stl.search}></div>
        <div className={stl.call}></div>
        <div className={stl.groups}></div>
      </div>
      <Contact name="Michail Issacow" url="/message/1" date="31 Oct" message="On voluptate velit esse cillum dolore eu fugiat nulla"/>
      <Contact name="Oleg Maslow" url="/message/2" date="31 Oct" message="Sed ut perspiciatis unde omnis iste natus error sit voluptatem a"/>
      <Contact name="Katia Veras" url="/message/3" date="29 Oct" message="Ut enim ad minima veniam, quis nostrum exercitationem"/>
      <Contact name="Aliona Volkova" url="/message/4" date="28 Oct" message="But I must explain to you how all this mistaken idea"/>
      <Contact name="Masha Kitiva" url="/message/5" date="19 Oct" message="because it is pleasure, but because those who"/>
    </div>
  )
}

export default Contacts