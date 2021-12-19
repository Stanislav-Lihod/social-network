import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import stl from "./profile.module.css"

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)
  useEffect(()=>{setStatus(props.status)},[props.status])


  const activeEditMode = () => {setEditMode(true)}
  const deactiveEditMode = (e) => {
    props.updateStatus(e.target.value)
      setEditMode(false)  
      setStatus(e.target.value)
  }
  const onChangeUpdate = (e) => setStatus(e.target.value)
  return (
    <>
      {!editMode && <div onClick={activeEditMode} className={stl.profileText__profession}>{props.status || '----'}</div>}
      {editMode && <div><input onBlur={deactiveEditMode} onFocus={e => e.target.select()} onChange={onChangeUpdate} autoFocus={true} value={status}/></div>}
    </>
  )
}


export default ProfileStatusWithHooks