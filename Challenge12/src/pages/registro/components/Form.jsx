import GenericInput from "../../../components/input/GenericInput";
import "./Form.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();


  const casa = () => {
		navigate("/");
	};
  
  return (
    <form className="form">
      <div className="form__container">
        <GenericInput label="User" type="text" id="user" />
        <GenericInput label="Correo" type="email" id="correo" />
      </div>
      <GenericInput label="Password" type="password" id="password" />
      <button className="button" onClick={casa}>Logeate</button>
    </form>
  );
};
