import { connect } from "react-redux"
import Contacts from "./Contacts"

const mapStateToProps = (state) => { return { contacts: state.messagePage.contacts } }
const mapDispatchToProps = (dispatch) => { return {} }

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts)

export default ContactsContainer