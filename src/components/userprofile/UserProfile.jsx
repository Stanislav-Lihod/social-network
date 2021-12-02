import Preloader from '../common/preloader/Preloader'
import PostsContainer from '../wall/Post/PostsContainer';
import stl from './userProfile.module.css'
import notLogo from "../../img/users/notUser.png"
import NewPostContainer from '../wall/NewPost/NewPostContainer';

const UserProfile = (props) => {
  const user = props.profile
  if (!props.profile) return <Preloader />
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
        
        <img src={user.photos.large != null ?user.photos.large : notLogo} alt="logo" className={stl.profileLogo} />
      </div>
      <NewPostContainer/> 
      <PostsContainer/>
    </div>


  )
}

export default UserProfile