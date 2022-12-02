import React from 'react'
import LoginButton from "./Layouts/Login";
import RegisterButton from "./Layouts/Register";
import LinkComponent from "./Layouts/Link";
type Button = {
name : string,
icon ?: JSX.Element | JSX.Element[],
className ?: string,
id ?: string
};

const Button = (props: Button) => {
  return (
    <button className={`btn-common btn-bg ${props.className ?? ''}`} id={`form-button-submit ${props.id ?? ''}`}>
              {props.icon ?? ''} {props.name}
    </button>
  )
}

export const Login = LoginButton;
export const Register = RegisterButton;
export const Link = LinkComponent
export default Button