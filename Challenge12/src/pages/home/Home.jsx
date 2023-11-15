import { Nav } from "../../components/nav/Nav";
import { UserRecomend } from "./components/UserRecomend";
import "./Home.css";

import sendIcon from "../../assets/send.png";
import corazonIcon from "../../assets/corazon.png";
import commentIcon from "../../assets/Comments.png";
import saveIcon from "../../assets/save.png";
import user from "../../assets/perfil.png";

export const Home = () => {
  return (
    <div className="home">
      <Nav></Nav>
      <div className="column home-item__post">
        <UserRecomend></UserRecomend>
        <div className="home-item">
          <div className="home-post__user">
            <img src={user} />
            <p>Maria Antonela</p>
          </div>
          <div className="home-post">
            <img
              src="https://www.univalle.edu.co/media/k2/items/cache/dd54670ad03d5d96f73ad543c8576241_XL.jpg"
              className="main-image"
            />
            <div className="home-post__info">
              <div>
                <img src={corazonIcon} />
                <img src={commentIcon} />
                <img src={sendIcon} />
              </div>
              <img src={saveIcon} />
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stats-text">
            <p>12k likes</p>
            <p>10k comments</p>
            <p>120 shares</p>
          </div>
          <div className="comments-text">
            <p>@elpicnic: So cool!</p>
            <p>@jero.duque: Mango:p</p>
            <p>@est1975: yess</p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="item-user">
          <img src={user} className="item-image" />
          <div>
            <p>@elpicnic</p>
            <p>Elpicnicerayer</p>
          </div>
        </div>
        <div className="item-user">
          <p>Suggestions</p>
          <p>See all</p>
        </div>
        <div className="item-user">
          <img src={user} className="item-image" />
          <div>
            <p>@elpicnic</p>
            <p>Follow</p>
          </div>
        </div>
        <div className="item-user">
          <img src={user} className="item-image" />
          <div>
            <p>@elpicnic</p>
            <p>Follow</p>
          </div>
        </div>
        <div className="item-user">
          <img src={user} className="item-image" />
          <div>
            <p>@elpicnic</p>
            <p>Follow</p>
          </div>
        </div>
        <div className="item-user">
          <img src={user} className="item-image" />
          <div>
            <p>@elpicnic</p>
            <p>Follow</p>
          </div>
        </div>
      </div>
    </div>
  );
};
