import stl from "./hashtag.module.css"

const Hashtag = () => {
  return (
    <div className={stl.hashtags}>
      <p>Followed hashtags</p>
      <div className={stl.hashtag}>#work</div>
    </div>
  )
}

export default Hashtag