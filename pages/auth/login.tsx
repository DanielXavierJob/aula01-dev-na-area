
import Link from 'next/link';
import React from 'react'
import AuthPage from "Resources/Application/Auth"
import LayoutLogin from 'Resources/Application/Auth/Login/Layout1';
import SocialButtons from 'Resources/Components/Social';

const login = () => {
  return (
    <AuthPage pageTitle="Página de Login" title="Faça o Login" subtitle="Conheça nossos jogos">
      <div className="col-12 col-md-6" id="bloco-01">
      <SocialButtons  facebookName='Entre com o Facebook' facebookHref='/auth/login'  googleName='Entre com o Google' googleHref='/auth/login'/>
      </div>
      <div className="col-12 col-md-6" id="bloco-02">
      <LayoutLogin />
      </div>
    </AuthPage>
  )
}

export default login