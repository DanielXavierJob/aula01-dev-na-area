import React from 'react'
import { TextField } from '@mui/material'
import Link from 'next/link'
import {Login} from "Resources/Components/Button";
const LayoutLogin = () => {
  return (
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
      <Login />
    </section>
    <section className="margin-top-10">
      <a className="d-block font-13" href="/esqueci-minha-senha/?site=point-blank">Esqueci minha senha</a>
      <Link className="d-block font-13" href={"/auth/register"}>Cadastrar</Link>
    </section>
  </form>
  )
}

export default LayoutLogin