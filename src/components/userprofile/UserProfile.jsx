import Preloader from '../common/preloader/Preloader'
import PostsContainer from '../wall/Post/PostsContainer';
import stl from './userProfile.module.css'
import notLogo from "../../img/users/notUser.png"
import NewPostContainer from '../wall/NewPost/NewPostContainer';
import AddPhoto from './AddPhoto';

const UserProfile = (props) => {
  const user = props.profile
  if (!user) return <Preloader />
  const socialLinks = []
  for (let contact in user.contacts) if (user.contacts[contact]) socialLinks.push(user.contacts[contact])

  return (
    <div>
      <div className={stl.container}>
        <div className={stl.profileBg}></div>
        <div className={stl.profile__info}>
          <div className={stl.profileText}>
            <div className={stl.profileText__name}>{user.fullName}</div>
            <div className={stl.profileText__description}>{user.aboutMe}</div>
          </div>
          <div className={stl.profile__social}>      
            {socialLinks.map(link=> <a href={link} target="_blank" rel="noreferrer">{link}</a>)}    
          </div>
        </div>        
        <div className={stl.profileLogo}>
          <img src={user.photos.large ? user.photos.large : notLogo} alt="logo"/>           
          {props.isOwner && <AddPhoto uploadPhoto={props.uploadPhoto}/>}          
        </div>
      </div>
      <NewPostContainer/> 
      <PostsContainer/>
    </div>


  )
}

export default UserProfile