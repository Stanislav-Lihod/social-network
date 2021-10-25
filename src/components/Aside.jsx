import logo from "../img/7h_xRpycDaI.jpg"

const Aside = () =>{
  return(
    <div className="aside-container">
      <div className="aside-profile">
        <div className="aside-profile__bg"></div>
        <div className="aside-profile__text">
            <div className="aside-profile__text-name">Stanislav</div>
            <div className="aside-profile__text-profession">Front-end Developer</div>
        </div>
        <img src={logo} alt="logo" className="aside-profile__logo"/>
      </div>
    </div>
  )
}

export default Aside