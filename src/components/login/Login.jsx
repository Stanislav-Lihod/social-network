import stl from './login.module.css'
import {Field} from 'redux-form';

const LoginForm = (props) =>{
  return(
    <form onSubmit={props.handleSubmit} action="" className={stl.formLogin}>
      <Field type="text" placeholder={'Email'} name={'email'} component={'input'}/>
      <Field type="password" placeholder={'Password'} name={'password'} component={'input'}/>
      <div className={stl.checkRemember}><Field name={'remember'} className={stl.checkboxLogin} component={"checkbox"}/><div>Remember me</div></div>
      <button>sign in</button>      
      <div className={`${stl.error} ${props.error ? stl.errorTrue : ''}`}>{props.error}</div>
    </form>
  )
}

export default LoginForm