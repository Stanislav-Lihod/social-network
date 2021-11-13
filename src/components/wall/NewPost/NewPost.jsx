import React from "react"
import stl from "./newpost.module.css"


const NewPost = (props) => {
  const newPost = React.createRef()

  const onAddNewPost = () => props.addNewPost()
  const updateValue = () => props.updateValue(newPost.current.value)

  return (
    <div className={stl.newPost}>
      <div className={stl.newPost__title}>New post</div>
      <textarea 
        id="newPost" 
        rows="1" 
        ref={newPost} 
        onKeyDown={e => { if (e.key === 'Enter') onAddNewPost()}} 
        value={props.valueText} 
        onChange={() => updateValue()}>
      </textarea>
      <div className={stl.newPost__additions}>
        <div className={stl.newPost__prompt}>What’s on your mind?</div>
      </div>
    </div>
  )
}

export default NewPost