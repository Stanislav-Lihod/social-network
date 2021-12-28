import stl from './userProfile.module.css'

const AddPhoto = (props) =>{
  
const uploadPhoto = (e) => e.target.files.length && props.uploadPhoto(e.target.files[0])

  return (
    <>
      <label className={stl.profileLogo_add} htmlFor="appPhoto">Add Photo</label>
      <input type='file' id='appPhoto' onChange={uploadPhoto}></input>
    </>
  )
}

export default AddPhoto