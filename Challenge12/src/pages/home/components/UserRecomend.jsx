import user from "../../../assets/perfil.png";
import "./UserRecomend.css";

const people = [
  { name: "Alice", image: user },
  { name: "Bob", image: user },
  { name: "Charlie", image: user },
  { name: "Alice", image: user },
  { name: "Bob", image: user },
  { name: "Charlie", image: user },
];

export const UserRecomend = () => {
  return (
    <div className="flex-container">
      {people.map((person, index) => (
        <div key={index} className="flex-item">
          <img src={person.image} alt={person.name} className="item-image" />
          <span className="item-name">{person.name}</span>
        </div>
      ))}
    </div>
  );
};
