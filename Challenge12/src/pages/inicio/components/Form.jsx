import GenericInput from "../../../components/input/GenericInput";
import { Logo } from "../../../components/logo/Logo";
import "./Form.css";

export const Form = () => {
  return (
    <div className="inicio__form-container">
      <Logo></Logo>
      <form className="inicio__form-container__form">
        <GenericInput label="User" type="text" id="user" />
        <GenericInput label="Password" type="password" id="password" />
        <button className="button">Get in!</button>
      </form>
      <button className="button button--small">Registrate</button>
      <p>Forgot your password?</p>
    </div>
  );
};
