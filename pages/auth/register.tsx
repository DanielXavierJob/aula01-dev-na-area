import { TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import LayoutCadaster from 'Resources/Application/Auth/Cadaster/Layout1'
import SocialButtons from 'Resources/Components/Social'
import AuthPage from "../../Resources/Application/Auth"

const register = () => {
  return (
    <AuthPage pageTitle="Página de Registro" title="Conecte-se com o mundo gamer" subtitle="Conheça nossos jogos">
      <div className="col-12 col-md-6" id="bloco-01">
        <SocialButtons facebookName='Registre-se com o Facebook' facebookHref='/auth/login' googleName='Cadastre-se com o Google' googleHref='/auth/login'/>
      </div>
      <div className="col-12 col-md-6" id="bloco-02">
       <LayoutCadaster />
      </div>
    </AuthPage>
  )
}

export default register