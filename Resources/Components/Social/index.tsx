import React from 'react'
import { Link } from 'Resources/Components/Button'

type SocialButtons = {
    facebookName?: string,
    facebookHref?: string ,
    googleName?: string  ,
    googleHref?: string 
}
const SocialButtons = (props: SocialButtons) => {
  return (
   <>
 {props.facebookName ? <Link name={  <span className="texto">{props.facebookName}</span>} id="botao-login-facebook" href={props.facebookHref ?? ''} icon={ <i className="fa fa-facebook"></i>} /> : ''}
 {props.googleName ?  <Link name={ <span className="texto">{props.googleName}</span>} id="botao-login-google" href={props.googleHref ?? ''} icon={ <i className="fa fa-google"></i>} />: ''}
   </>
    )
}

export default SocialButtons