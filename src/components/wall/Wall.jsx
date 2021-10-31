import stl from "./wall.module.css"
import NewPost from "./NewPost/NewPost"
const Wall = () =>{
  return(
    <div className={stl.container}>
      <NewPost />
    </div>
  )
}

export default Wall