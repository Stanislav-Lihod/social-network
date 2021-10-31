import stl from "./newpost.module.css"
const NewPost = () => {
  return (
    <div className={stl.newPost}>
      <div className={stl.newPost__title}>New post</div>
      <textarea id="newPost" rows="1"></textarea>
      <div className={stl.newPost__additions}>
        <div className={stl.newPost__prompt}>What’s on your mind?</div>
      </div>
    </div>
  )
}

export default NewPost