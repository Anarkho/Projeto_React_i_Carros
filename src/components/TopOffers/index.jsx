import React, { useEffect, useState, useRef } from 'react'
import { Container } from './styles'
import Arrow from '@/assets/img/home/types/arrow.svg'
import { mercedes } from '../../assets/img/home/top-offers/automoveis'
import GreenCar from '@/assets/img/home/top-offers/green-car.png'
import BlueCar from '@/assets/img/home/top-offers/blue-car.png'
import Dashboard from '@/assets/img/home/top-offers/dashboard.svg'
import Transmission from '@/assets/img/home/top-offers/transmission.svg'
import Fuel from '@/assets/img/home/top-offers/fuel.svg'
import Core from '@/assets/img/home/top-offers/core.svg'
import Pin from '@/assets/img/home/footer/pin.svg'
import After from '@/assets/img/home/apps/previous.png'

const TopOffers = () => {
  const [carWhite, setCarWhite] = useState([])
  const carrosel = useRef(null)

  useEffect(() => {
    setCarWhite(mercedes)
  }, [carWhite.length > 0])

  const handleLeftClick = (e) => {
    e.preventDefault()
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carrosel.current.scrollLeft += carrosel.current.offsetWidth
  }

  if (!carWhite || !carWhite.length) return null

  return (
    <Container>
      <div className="top-offers-top">
        <h2>Ofertas</h2>
        <div className="view-all">
          <p>Veja todas as ofertas</p>
          <img className="arrow" src={Arrow} alt="arrow" />
        </div>
      </div>

      <div className="top-offers-down">
        <div className="card-left-vertical">
          <img
            onClick={handleLeftClick}
            className="setas"
            src={After}
            alt="seta esquerda"
          />
          <img
            onClick={handleRightClick}
            className="setas"
            src={After}
            alt="seta direita"
          />
          <div className="carrosel" ref={carrosel}>
            {carWhite.map((item, index) => {
              return <img key={index} src={item} alt="white car" />
            })}
          </div>

          <div className="card-left-down-infos">
            <div className="ano-compare">
              <p>1994</p>
              <label className="check">
                <p>Compare</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="especification">
              <h3>Mercedes-Benz Classe S</h3>
              <p className="price">$25,880</p>
              <div className="location">
                <img src={Pin} alt="ponteiro" />
                <p>São paulo</p>
              </div>
              <hr />
              <div className="info-car">
                <div>
                  <img src={Dashboard} alt="" />
                  <p>48k mi</p>
                </div>
                <div>
                  <img src={Transmission} alt="" />
                  <p>Automatic</p>
                </div>
                <div>
                  <img src={Fuel} alt="" />
                  <p>Petrol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-right-vertical">
          <div className="card-right-up">
            <img src={GreenCar} alt="green car" />
            <div className="card-right-up-infos">
              <div className="ano-compare">
                <p>1995</p>
                <label className="check">
                  <p>Compare</p>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="especification">
                <h3>Ford Truck Lifted</h3>
                <p className="price">$24,000</p>
                <div className="location">
                  <img src={Pin} alt="ponteiro" />
                  <p>Chicago</p>
                </div>
                <hr />
                <div className="info-car">
                  <div>
                    <img src={Dashboard} alt="" />
                    <p>275k mi</p>
                  </div>
                  <div>
                    <img src={Transmission} alt="" />
                    <p>Manual</p>
                  </div>
                  <div>
                    <img src={Fuel} alt="" />
                    <p>Diesel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-right-down">
            <img src={BlueCar} alt=" blue car" />
            <div className="card-right-down-infos">
              <div className="ano-compare">
                <p>2020</p>
                <label className="check">
                  <p>Compare</p>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="especification">
                <h3>Mercedes Benz C300 Sport</h3>
                <p className="price">$54,420</p>
                <div className="location">
                  <img src={Pin} alt="ponteiro" />
                  <p>San Francisco</p>
                </div>
                <hr />
                <div className="info-car">
                  <div>
                    <img src={Dashboard} alt="" />
                    <p>No mileage</p>
                  </div>
                  <div>
                    <img src={Transmission} alt="" />
                    <p>Automatic</p>
                  </div>
                  <div>
                    <img src={Fuel} alt="" />
                    <p>Hybrid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default TopOffers
