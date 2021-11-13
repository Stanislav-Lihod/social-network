import stl from './network.module.css'
import UsersContainer from './users/UsersContainer'

const Network = () =>{
  return(
    <div className={stl.network}>
      <UsersContainer/>
    </div>
  )
}

export default Network