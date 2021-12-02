import preloader from '../../../img/preloader/preloader.svg'
import stl from './preloader.module.css'

const Preloader = () =>{
  return(
    <div className={stl.preloader}>
      <img src={preloader} alt='preloader'/>
    </div>
  )
}

export default Preloader