import React from 'react'

import NavBar from '@/components/NavBar'
import { menuItem } from '@/Constants'
import Footer from '@/components/Footer'
import { Container } from './styles'
import LastPublication from '@/components/LastPublication'
import Caminhos from '@/components/Caminhos'
import iconCoracao from '@/assets/img/home/Item/icones/icon-coracao.png'
import iconShared from '@/assets/img/home/Item/icones/icon-shared.png'
import Video from '@/assets/img/home/Item/icones/video.png'

import { mercedes } from '../../assets/img/home/top-offers/automoveis'

const Item = () => {
  return (
    <Container>
      <NavBar item={menuItem} />
      <main>
        <Caminhos use="Usados" modelo="Mercedes-Benz E 400 Cabriolet" />
        <div className="top-info">
          <h3>Mercedes-Benz Classe S</h3>
          <div className="top-icones">
            <img src={iconCoracao} alt="icone coração" />
            <img src={iconShared} alt="icone compartilhar" />
          </div>
        </div>
        <div className="colunas">
          <div className="coluna-left">
            <div className="carrosel">
              <img className="img-principal" src={mercedes[0]} alt="mercedes" />
            </div>
            <div className="mini-imagens">
              {mercedes.map((item) => (
                <img src={item} alt="miniatura carros" />
              ))}
              <img src={Video} alt="video demostrativo" />
            </div>
          </div>
          <div className="coluna-right">right</div>
        </div>
        <LastPublication title="Você pode estar interessado" />
      </main>
      <Footer />
    </Container>
  )
}

export default Item
