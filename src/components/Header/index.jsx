import React from 'react'
import { Container } from './styles'

import OrangeCar from '@/assets/img/home/header/orange-car.png'

export const Header = () => {
  return (
    <Container>
      <section className="header">
        <div className="text-img">
          <div className="h1-p">
            <h1>Compre e venda com facilidade. </h1>

            <p>
              O Finder é um mercado digital líder para a indústria automotiva
              que conecta compradores de carros a vendedores.
            </p>
          </div>

          <img id="orange-car" src={OrangeCar} alt="um carro laranja" />
        </div>

        <div className="tabs">
          <button id="new">Novo</button>
          <button id="used">Usado</button>
        </div>

        <section className="input-group">
          <form>
            <input type="text" id="search" placeholder="Pesquisar por ..." />
            <input type="text" id="make" placeholder="Marca" />
            <input type="text" id="model" placeholder="Modelo" />
            <input type="text" id="type" placeholder="Tipo" />
            <input type="text" id="location" placeholder="Local" />
            <input type="submit" id="submit" value="Pesquisar" />
          </form>
        </section>
      </section>
    </Container>
  )
}
