import React from 'react'
import { Link } from 'react-router-dom'
import Bancos from '@/assets/img/home/banners/bancos.png'
import Pneus from '@/assets/img/home/banners/pneus.png'
import Rodas from '@/assets/img/home/banners/rodas.png'
import Acessorios from '@/assets/img/home/banners/acessorios.png'
import { Container } from './styles'

const Banners = () => {
  return (
    <Container>
      <section class="banner">
        <div class="banner-top">
          <div class="banner-top-right">
            <h2>Loren ipsun</h2>
            <p>Loren ipsun site amet</p>
            <button>Ir para loja</button>
          </div>

          <div class="products">
            <Link to="#">
              <img src={Bancos} alt="bancos" />
              <p class="product-items">Bancos</p>
            </Link>

            <Link to="#">
              <img src={Pneus} alt="pneus" />
              <p class="product-items">Pneus</p>
            </Link>

            <Link to="#">
              <img src={Rodas} alt="rodas" />
              <p class="product-items">Rodas</p>
            </Link>

            <Link to="#">
              <img src={Acessorios} alt="acessorios" />
              <p class="product-items">Acessorios</p>
            </Link>
          </div>
        </div>

        <div class="banner-bottom"></div>
      </section>
    </Container>
  )
}

export default Banners
