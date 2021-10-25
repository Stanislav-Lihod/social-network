import rss from "../img/rss.svg"
import briefcase from "../img/briefcase.svg"
import message from "../img/message.svg"
import notification from "../img/notification.svg"
import users from "../img/users.svg"
import logo from "../img/7h_xRpycDaI.jpg"

const Header = () => {
  return(
    <header>
      <div className="header-logo">
        <p>STYSIK</p>
      </div>
      <div className="header-container">
        <div className="header-page">
          <a href="#" className="header-links__page">
            <div className="header-links__page-icon"><img src={rss} alt=""></img></div>
            <div className="header-links__page-text">Feed</div>
          </a>
          <a href="#" className="header-links__page">
            <div className="header-links__page-icon"><img src={users} alt=""></img></div>
            <div class="header-links__page-text">Network</div>
          </a>
          <a href="#" className="header-links__page">
            <div className="header-links__page-icon"><img src={briefcase} alt=""></img></div>
            <div className="header-links__page-text">JObs</div>
          </a>
          <a href="#" className="header-links__page">
            <div className="header-links__page-icon"><img src={message} alt=""/></div>
            <div className="header-links__page-text">Chat</div>
          </a>
          <a href="#" className="header-links__page">
            <div className="header-links__page-icon"><img src={notification} alt=""></img></div>
            <div className="header-links__page-text">Notises</div>
          </a>
        </div>
        <div className="header-search">
          <input type="text"></input> 
        </div>
        <div className="header-profile">
          <div className="header-profile__logo"><img src={logo}></img></div>
          <div className="header-profile__text">
          <div className="header-profile__text-name">S.LiHI</div>
          <div className="header-profile__text-views">200 views today <span>+32</span></div>
          </div>
        </div>    
      </div>
    <div className="header-burger">
      <span></span>
    </div>
  </header>) 
}

export default Header;