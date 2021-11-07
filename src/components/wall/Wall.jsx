import stl from "./wall.module.css"
import Post from "./Post/Post"
import NewPostContainer from "./NewPost/NewPostContainer";
const Wall = (props) =>{ 
  const renderPost = props.state.posts.map( post => <Post name={post.name} prof={post.prof} like={post.likesValue} comment={post.commentValue} post={post.post}/>)
  
  return(
    <div className={stl.container}>
      <NewPostContainer store={props}/>
      {renderPost}
    </div>
  )
}

export default Wall