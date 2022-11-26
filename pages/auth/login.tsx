import { TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import AuthPage from "../../Resources/Application/Auth"


const login = () => {
  return (
    <AuthPage pageTitle="Página de Login" title="Faça o Login" subtitle="Conheça nossos jogos">
      <div className="col-12 col-md-6" id="bloco-01">
        <a id="botao-login-facebook" href="/entrar/facebook/">
          <i className="fa fa-facebook"></i>
          <span className="texto">Entrar com o Facebook</span>
        </a>
        <div id="informativo-facebook" className="informativo-cadastro oculto informativo">
          Olá <span>Jogador</span>,<br />
          Infelizmente não encontramos nenhum ID Ongame vinculado à sua conta Facebook.<br /><br />


        </div>
        <a id="botao-login-google" href="/entrar/google/">
          <i className="fa fa-google"></i>
          <span className="texto">Entrar com o Google</span>
        </a>
        <div id="informativo-google" className="informativo-cadastro oculto informativo">
          Olá <span>Jogador</span>,<br />
          Infelizmente não encontramos nenhum ID Ongame vinculado à sua conta Google.<br /><br />

        </div>
      </div>
      <div className="col-12 col-md-6" id="bloco-02">
        <form method="POST" id="login-form" className="form" action="/entrar/?site=point-blank&url=https://pb.ongame.net/ascensao-da-feiticeira/">

          <div className="relative" >
            <TextField id="outlined-basic" label="Usuário" variant="outlined" fullWidth
              inputProps={{ style: { color: "#757575" } }}
              InputLabelProps={{
                style: { color: '#757575' },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: '1px solid #1C1C1C',
                }
              }}
            />
          </div>

          <div className="relative" style={{ marginTop: '15px' }}>
            <TextField id="outlined-basic" label="Senha" variant="outlined" fullWidth 
            inputProps={{ style: { color: "#757575" } }} 
            InputLabelProps={{
              style: { color: '#757575' },
            }} 
            sx={{
              "& .MuiOutlinedInput-root": {
                border: '1px solid #1C1C1C'
              }
            }}
            />
          </div>

          <section id="group-button" style={{ marginTop: '10px' }}>
            <button className="btn-common btn-bg g-recaptcha"
              id="form-button-submit"
              data-sitekey="6LdTBNMZAAAAAOGVsispVCxXenvFIeulWtnYz-U7"
              data-callback='onSubmit'>
              <i className="fa fa-arrow-right"></i>Entrar
            </button>
          </section>
          <section className="margin-top-10">
            <a className="d-block font-13" href="/esqueci-minha-senha/?site=point-blank">Esqueci minha senha</a>
            <Link className="d-block font-13" href={"/auth/register"}>Cadastrar</Link>
          </section>
        </form>
      </div>
    </AuthPage>
  )
}

export default login