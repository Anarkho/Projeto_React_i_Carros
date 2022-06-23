import React from 'react'
import { Container } from './styles'
import Arrow from '@/assets/img/home/types/arrow.svg'
import WhiteCar from '@/assets/img/home/top-offers/white-car.png'
import GreenCar from '@/assets/img/home/top-offers/green-car.png'
import BlueCar from '@/assets/img/home/top-offers/blue-car.png'
import Dashboard from '@/assets/img/home/top-offers/dashboard.svg'
import Transmission from '@/assets/img/home/top-offers/transmission.svg'
import Fuel from '@/assets/img/home/top-offers/fuel.svg'
import Core from '@/assets/img/home/top-offers/core.svg'
import Pin from '@/assets/img/home/footer/pin.svg'

const TopOffers = () => {
  return (
    <Container>
      <div class="top-offers-top">
        <h2>Ofertas</h2>

        <div class="view-all">
          <p>Veja todas as ofertas</p>
          <img class="arrow" src={Arrow} alt="arrow" />
        </div>
      </div>

      <div class="top-offers-down">
        <div class="card-vertical-left card-horizontal-hover">
          <img src={WhiteCar} alt="car" />

          <div class="info">
            <div class="ano-compare">
              <span>2014</span>
              <div>
                <input type="checkbox" />
                <span>Compare</span>
              </div>
            </div>
            <p>Mercedes Benz Convertible Coupe</p>
            <p class="price">$ 25,880</p>
            <img class="pin-offers" src={Pin} alt="ponteiro localização" />
            <span class="region">São Paulo</span>
          </div>
          <hr />
          <div class="especification">
            <div class="dash">
              <img
                class="dashboard"
                src={Dashboard}
                alt="painel de kilometragem"
              />
              <p>48k mi</p>
            </div>
            <div class="dash">
              <img
                class="dashboard"
                src={Transmission}
                alt="painel de kilometragem"
              />
              <p>Automatic</p>
            </div>
            <div class="dash">
              <img class="dashboard" src={Fuel} alt="painel de kilometragem" />
              <p>Petrol</p>
            </div>
          </div>
        </div>

        <div class="cards-right">
          <div class="card-horizontal-up card-horizontal-hover">
            <div class="card-right">
              <img src={GreenCar} alt="car green" width={243} />
              <span style={{ backgroundColor: '#3c76f3' }}>Usado</span>
              <div class="right-info">
                <img class="img-coracao" src={Core} alt="a" />
                <div class="compare-info">
                  <p>1994</p>
                  <input type="checkbox" />
                  <span>Compare</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card-horizontal-down card-horizontal-hover">
            <div class="card-right">
              <img src={BlueCar} alt="car green" width={243} />
              <span style={{ backgroundColor: '#feba33' }}>Novo</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default TopOffers
