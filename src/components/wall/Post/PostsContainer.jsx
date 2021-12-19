import { connect } from "react-redux"
import React from "react"
import Post from "./Post"

class Posts extends React.Component {
  render() {
    const renderPost = this.props.posts.map(post => <Post key={post.id} name={this.props.profile.fullName} logo={this.props.profile.photos.small} prof={this.props.profile.aboutMe} like={post.likesValue} comment={post.commentValue} post={post.post} />)
    return (<div>{renderPost}</div>)
  }
}

const mapStateToProps = (state) => ({  
  posts: state.wallPage.posts, 
  profile: state.wallPage.userProfile 
})

export default connect (mapStateToProps)(Posts)