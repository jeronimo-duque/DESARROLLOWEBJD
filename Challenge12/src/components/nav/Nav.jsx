import { Logo } from "../logo/Logo";
import "./Nav.css";
import mango from "../../assets/mango.png";
import buscar from "../../assets/lupa.png";
import chat from "../../assets/chat.png";
import corazon from "../../assets/corazon.png";
import persona from "../../assets/persona.png";

export const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <img src={mango} />
        <img src={buscar} />
        <img src={chat} />
        <img src={corazon} />
        <img src={persona} />
      </nav>
      <Logo></Logo>

     
    </div>
  );
};
