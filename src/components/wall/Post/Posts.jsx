import React from "react"
import Post from "./Post"

class Posts extends React.Component {
  render() {
    console.log(this.props);
    const renderPost = this.props.posts.map(post => <Post key={post.id} name={this.props.profile.fullName} logo={this.props.profile.photos.small} prof={post.prof} like={post.likesValue} comment={post.commentValue} post={post.post} />)
    return (<div>{renderPost}</div>)
  }
}

export default Posts