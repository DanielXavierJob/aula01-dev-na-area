import React from 'react'
import Head from "next/head"
import Image from 'next/image'
import FooterPage from '../../Components/Footer'
import { ToastContainer } from 'react-nextjs-toast'

type AuthPage = {
  pageTitle: string,
  title?: string,
  subtitle?: string,
  children: JSX.Element | JSX.Element[]
}

const AuthPage = ({ pageTitle, title, subtitle, children }: AuthPage) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link href="https://minhaconta.ongame.net/static/CACHE/css/01ef4de1c2cf.css" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=optional" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
      </Head>
      <div className="wrapper">

        <div id="conteudo-pag-cadastro">
          <div className="container">
            <header className="header-cadastro text-center">

              <div id="logo-header">

                <a className="logo-size pb-logo" href="https://pb.ongame.net/?ref=minha-conta" title="Acessar Home - Point Blank">
                  <Image src="https://pb.ongame.net/static/img/pb/logo-pt-br-1140.png" alt="Point Blank" width={1080} height={200} quality={75}/>
                </a>
              </div>

              <h1 className=" mb-3">
                {title ?? "Pb"}
              </h1>
              <h2 className="padding-15 bg-lt-black main-color-lt">
                {subtitle ?? "conheça nossa franquia"}
              </h2>
            </header>

            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                <div className="row">
               {children}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    </div>
  )
}

export default AuthPage