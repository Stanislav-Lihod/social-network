import stl from "./wall.module.css"
import NewPostContainer from "./NewPost/NewPostContainer";
const Wall = () =>{   
  return(
    <div className={stl.container}>
      <NewPostContainer/>      
    </div>
  )
}

export default Wall