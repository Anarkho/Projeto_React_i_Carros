import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import Logo from '@/assets/img/home/footer/logo-finder.png'
import Pin from '@/assets/img/home/footer/pin.svg'
import Word from '@/assets/img/home/footer/world.svg'
import BotaoEnviar from '@/assets/img/home/footer/btn.svg'
import IconeTelefone from '@/assets/img/home/footer/phone.svg'
import IconeEmail from '@/assets/img/home/footer/mail.svg'
import LogoFacebook from '@/assets/img/home/footer/facebook.svg'
import LogoTwitter from '@/assets/img/home/footer/twitter.svg'
import LogoTelegram from '@/assets/img/home/footer/telegram.svg'
import LogoMesseger from '@/assets/img/home/footer/messeger.svg'

const Footer = () => {
  return (
    <Container>
      <div className="container-footer-header">
        <div>
          <Link to="/" className="link-logo">
            <img src={Logo} alt="logo car-finder-nav" />
          </Link>
        </div>
        <div className="location-footer">
          <img src={Word} alt="ponteiro localização" />
          <p>pt-BR</p>
          <img src={Pin} alt="ponteiro localização" />
          <p>São Paulo</p>
        </div>
      </div>
      <hr />
      <div class="footer-informations">
        <div class="subscribe">
          <h2>Cadastre-se na newsletter</h2>

          <p>Não perca nenhuma oferta relevante!</p>

          <div class="input-group">
            <input type="text" placeholder="Informe seu email" />

            <button>
              <img src={BotaoEnviar} alt="icone enviar" />
            </button>
          </div>
        </div>

        <section class="buy-sell">
          <h3>Comprar ou Vender</h3>

          <div class="menu">
            <ul>
              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>
            </ul>
          </div>
        </section>

        <section class="about">
          <h3>Sobre</h3>

          <div class="menu">
            <ul>
              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>
            </ul>
          </div>
        </section>

        <section class="profile">
          <h3>Perfil</h3>

          <div class="menu">
            <ul>
              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>

              <li>
                <Link to="#">Loren ipsum</Link>
              </li>
            </ul>
          </div>
        </section>

        <section class="contacts-social">
          <div class="contacts">
            <Link id="phone" to="fone:+551111111111">
              <img src={IconeTelefone} alt="icone telefone" />
              (11) 1111-1111
            </Link>

            <Link id="email" to="mailto:email@example.com.br">
              <img src={IconeEmail} alt="icone email" />
              email@example.com.br
            </Link>
          </div>

          <div class="social">
            <Link id="facebook" to="#">
              <img src={LogoFacebook} alt="logo facebook" />
            </Link>

            <Link id="twitter" to="#">
              <img src={LogoTwitter} alt="logo twitter" />
            </Link>

            <Link id="telegram" to="#">
              <img src={LogoTelegram} alt="logo telegram" />
            </Link>

            <Link id="telegram" to="#">
              <img src={LogoMesseger} alt="logo messeger" />
            </Link>
          </div>
        </section>
      </div>
      <div class="footer-bottom">
        <p>
          Copyright © Finder | Gama Academy. Todos os direitos reservados - Este
          é um projeto acadêmico.
        </p>

        <div class="menu-secondary">
          <Link to="#">Termos de uso</Link>
          <Link to="#">Política de privacidade</Link>
        </div>
      </div>
    </Container>
  )
}

export default Footer
