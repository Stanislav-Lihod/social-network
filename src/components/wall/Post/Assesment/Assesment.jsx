import stl from './assesment.module.css'

const Assesment = (props) =>{
  return <div className={stl.bottomButton__assesment}><i class={props.icon}></i>{props.value}</div>
}

export default Assesment