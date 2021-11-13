import stl from "./wall.module.css"
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Post/PostsContainer";
const Wall = () =>{   
  return(
    <div className={stl.container}>
      <NewPostContainer/>
      <PostsContainer/>      
    </div>
  )
}

export default Wall