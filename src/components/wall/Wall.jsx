import stl from "./wall.module.css"
import NewPost from "./NewPost/NewPost"
import Post from "./Post/Post"
const Wall = (props) =>{ 
  const renderPost = props.state.posts.map( post => <Post name={post.name} prof={post.prof} like={post.likesValue} comment={post.commentValue} post={post.post}/>)
  
  return(
    <div className={stl.container}>
      <NewPost state={props.state} despatch={props.despatch}/>
      {renderPost}
    </div>
  )
}

export default Wall