import { connect } from "react-redux";
import Menu from "./Menu"

const mapStateToProps = (state) => {return{links: state.navLinks.links}}
const mapDispatchToProps = (dispatch) => {return{}}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer