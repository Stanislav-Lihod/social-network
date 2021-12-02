import stl from "./post.module.css"
import logo from "../../../img/users/notUser.png"
import Assesment from "./Assesment/Assesment"

const Post = (props) => {
  return (
    <div className={stl.postItem}>
      <div className='upButton'></div>
      <div className={stl.post}>
        <div className={stl.postProfile}>
          <img src={!props.logo ? logo : props.logo} alt="Logo" />
          <div className={stl.postProfile__info}>
            <div className={stl.postProfile__name}>{!props.name ? 'Stanislaw Lihodievski' : props.name}</div>
            <div className={stl.postProfile__prof}>{props.prof}</div>
          </div>
        </div>
        <div className={stl.postText}>{props.post}</div>
        <div className={stl.postMore} id="readMore"><span>Read MOre</span></div>
      </div>
      <div className={stl.bottomButton}>
        <div className={stl.bottomButton__assesments}>
          <Assesment icon='far fa-thumbs-up' value={props.like}/>
          <Assesment icon='far fa-comment' value={props.comment}/>
        </div>
        <div className={stl.bottomButton__share}><i class="fas fa-share-alt"></i>Share</div>

      </div>
    </div>
  )
}

export default Post