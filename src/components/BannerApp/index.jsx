import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import AppleStore from '@/assets/img/home/apps/app-store.png'
import GooglePlay from '@/assets/img/home/apps/google-play.png'
import Ilustration from '@/assets/img/home/apps/illustration.png'
import After from '@/assets/img/home/apps/previous.png'
import Next from '@/assets/img/home/apps/next.png'

const BannerApp = () => {
  return (
    <Container>
      <div className="container-app">
        <div className="setas">
          <img src={After} alt="anterior" width={30} height={30} />
          <img src={Next} alt="posterior" width={53} height={53} />
        </div>
        <div className="apps">
          <div>
            <h2>Baixe o nosso app</h2>
          </div>

          <div>
            <p>
              Baixe o Finder App e junte-se à comunidade de entusiastas de
              carros. Não pare sua busca de carro quando sair do computador com
              nosso aplicativo para Android e iOS!
            </p>
          </div>

          <div className="btns">
            <a
              id="app-store"
              href="https://www.apple.com/br/app-store/"
              target="_blank"
            >
              <img src={AppleStore} alt="apple store" />
            </a>

            <a id="google-play" href="https://play.google.com/" target="_blank">
              <img src={GooglePlay} alt="" />
            </a>
          </div>
        </div>

        <div className="ilustration">
          <img src={Ilustration} alt="" />
        </div>
      </div>
    </Container>
  )
}

export default BannerApp
