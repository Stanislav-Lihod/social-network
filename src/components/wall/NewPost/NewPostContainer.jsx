import { connect } from "react-redux"
import { addPostActionCreate, updateAddPostValueActionCreate } from "../../../redux/reducerWallPage"
import NewPost from "./NewPost"


const mapStateToProps = (state) => {return { valueText: state.wallPage.postAddValue }}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => dispatch(addPostActionCreate()),
    updateValue: text => dispatch(updateAddPostValueActionCreate(text))
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer