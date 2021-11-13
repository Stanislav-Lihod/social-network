import Post from "./Post"

const Posts = (props) => {
  const renderPost = props.posts.map(post => <Post name={post.name} prof={post.prof} like={post.likesValue} comment={post.commentValue} post={post.post} />)
  return (<div>{renderPost}</div>)
}

export default Posts