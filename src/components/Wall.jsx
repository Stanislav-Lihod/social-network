const Wall = () =>{
  return(
    <div className="wall-container">
      <div className="wall-create-post">
        <div className="wall-create-post__title">New post</div>
        <textarea name="newPost" id="newPost" rows="1"></textarea>
        <div className="wall-create-post__additions">
          <div className="wall-create-post__prompt">What’s on your mind?</div>
        </div>
      </div>
    </div>
  )
}

export default Wall