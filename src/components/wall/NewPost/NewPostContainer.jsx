import { addPostActionCreate, updateAddPostValueActionCreate } from "../../../redux/reducerWallPage"
import NewPost from "./NewPost"

const NewPostContainer = (props) => {
  const addNewPost = () => props.store.dispatch(addPostActionCreate())
  const updateValue = (text) => props.store.dispatch(updateAddPostValueActionCreate(text))

  return <NewPost addNewPost={addNewPost} updateAddPostValue={updateValue} valueText={props.store.state.postAddValue}/>
}

export default NewPostContainer