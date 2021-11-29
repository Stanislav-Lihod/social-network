import React from "react"
import Post from "./Post"

class Posts extends React.Component {
  render() {
    const renderPost = this.props.posts.map(post => <Post key={post.id} name={post.name} prof={post.prof} like={post.likesValue} comment={post.commentValue} post={post.post} />)
    return (<div>{renderPost}</div>)
  }
}

export default Posts