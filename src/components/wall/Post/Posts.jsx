import React from "react"
import Post from "./Post"

// const Posts = (props) => {
//   const renderPost = props.posts.map(post => <Post name={post.name} prof={post.prof} like={post.likesValue} comment={post.commentValue} post={post.post} />)
//   return (<div>{renderPost}</div>)
// }

class Posts extends React.Component {
  renderPost = this.props.posts.map(post => <Post key={post.id} name={post.name} prof={post.prof} like={post.likesValue} comment={post.commentValue} post={post.post} />)
  render() {return (<div>{this.renderPost}</div>)}
}

export default Posts