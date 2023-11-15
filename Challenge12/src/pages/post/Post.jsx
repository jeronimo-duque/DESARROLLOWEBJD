import { Nav } from "../../components/nav/Nav";
import image from "../../assets/1.png";
import comment from "../../assets/Comments.png";
import perfil from "../../assets/perfil.png";
import "./Post.css";
import { ChatComment } from "./components/ChatComment";

const ejemplos = [
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "Nice!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "lol!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "jero is the best omg!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "juan omg llegate!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "tiagito el mejor!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "Nice!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "Nice!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "Nice!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "Nice!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "Nice!!",
  },
  {
    imgUsuario: perfil,
    user: "@elpicnic",
    message: "Nice!!",
  },
];

export const Post = () => {
  return (
    <div className="post">
      <Nav></Nav>
      <div className="post-content">
        <div className="image-container">
          <img src={image} className="image-container__image" />
        </div>
        <div className="post-chat">
          <img src={comment} className="post-chat__image" />
          <br />
          {ejemplos.map((comentario, index) => (
            <ChatComment
              key={index}
              usuario={comentario?.imgUsuario}
              nombre={comentario?.user}
              mensaje={comentario?.message}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
