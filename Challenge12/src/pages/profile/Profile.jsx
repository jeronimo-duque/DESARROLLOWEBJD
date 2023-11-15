import { Nav } from "../../components/nav/Nav";
import mango from "../../assets/mango.png";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <Nav></Nav>
      <div>
        <div className="profile-header">
          <div className="column image-column">
            <img src="https://yt3.googleusercontent.com/ytc/APkrFKYcmHngTBVH369WWXSGe1FoniCDs41wQp8PWJEeow=s176-c-k-c0x00ffffff-no-rj" />
          </div>
          <div className="buttons-column">
            <div className="buttons">
              <button>Siguiendo</button>
              <button>Enviar mensaje</button>
            </div>
            <div className="list">
              <p>-SKELLY FISTRON</p>
              <p>-ARTISTA</p>
            </div>
          </div>
          <div className="column info-column">
            <div className="info-header">
              <img
                src="https://s3-alpha-sig.figma.com/img/2b9b/6640/7e9380f7191cf4101b4b25a993c3923a?Expires=1698019200&Signature=XQyY-15oBE-qUfGJqfRCktQZYYFDL9UehrcfQ19Dwaj9FUaQITHcIBzt54ZweKdS16SW6FCw-0r2xdTCsrzsx59SjuDS1ytWQOa7GV9scbkfH4Z5DejIlVcmoD1I6mOVevty9h89DjwqhZlu6NvC~dSt~GIwEH98~E1~IZEppcM346uCH9rKWd357VQOLWTnMIrUAMORXO7oExjyWH9DIo00Zv0fosZZ6CkUM4RYZHZ7rZwJz8KfUcY4ZkHNLE~7XQHkUPmVYqenJQ9bTbBg4OuYBK1NXlPKYu5ZMULwmMCYP7Q7qc4vpKoCmob06pG8Z7crTIsiGlZi2N4UwIjKCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Additional info"
              />
              <h2>Mangofía</h2>
            </div>
            <p>
              El arte de vivir en medio de las sombras, sombras que rodean
              nuestro mundo, y un mundo que prefiere vivir en la falsa luz de un
              día nublado.
            </p>
            <div className="info-column__extend">
              <p>Olivia.Rodrigo</p>
              <img src={mango} />
              <ul>
                <li>Public</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-posts">
          <img src="https://i.pinimg.com/550x/6b/37/22/6b37229d354fc3124ffece1cf200ac7d.jpg" />
          <img src="https://i.ytimg.com/vi/Hg469wSrZhI/hqdefault.jpg" />
          <img src="https://i.ytimg.com/vi/fcmYrba9ZXY/hqdefault.jpg" />
          <img src="https://i.ytimg.com/vi/h9jdCrX9Otk/maxresdefault.jpg" />
          <img src="https://i.ytimg.com/vi/gbutI32F030/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCyoqFFxTQ9eI5biJQLX5KRvLlmnA" />
          <img src="https://i.ytimg.com/vi/dG3niF2GgHM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD-jgmAYr3g5Vjue-ZGzWyIbaMjfA" />
        </div>
      </div>
    </div>
  );
};
