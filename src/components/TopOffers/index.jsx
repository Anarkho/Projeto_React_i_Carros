import React, { useEffect, useState, useRef } from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router'
import Arrow from '@/assets/img/home/types/arrow.svg'
import {
  mercedes,
  raptor,
  c300,
} from '../../assets/img/home/top-offers/automoveis'
import Dashboard from '@/assets/img/home/top-offers/dashboard.svg'
import Transmission from '@/assets/img/home/top-offers/transmission.svg'
import Fuel from '@/assets/img/home/top-offers/fuel.svg'
import Core from '@/assets/img/home/top-offers/core.svg'
import Pin from '@/assets/img/home/footer/pin.svg'
import After from '@/assets/img/home/apps/previous.png'

const TopOffers = () => {
  const navigate = useNavigate()
  const [carWhite, setCarWhite] = useState([])
  const [carBrown, setCarBrown] = useState([])
  const [carGray, setCarGray] = useState([])
  const carrosel = useRef(null)
  const carroselRightUp = useRef(null)
  const carroselRightDown = useRef(null)

  useEffect(() => {
    setCarWhite(mercedes)
  }, [carWhite.length > 0])

  useEffect(() => {
    setCarBrown(raptor)
  }, [carBrown.length > 0])

  useEffect(() => {
    setCarGray(c300)
  }, [carGray.length > 0])

  const handleLeftClick = (e) => {
    e.preventDefault()
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carrosel.current.scrollLeft += carrosel.current.offsetWidth
  }

  const handleLeftClick2 = (e) => {
    e.preventDefault()
    carroselRightUp.current.scrollLeft -= carroselRightUp.current.offsetWidth
  }

  const handleRightClick2 = (e) => {
    e.preventDefault()
    carroselRightUp.current.scrollLeft += carroselRightUp.current.offsetWidth
  }

  const handleLeftClick3 = (e) => {
    e.preventDefault()
    carroselRightDown.current.scrollLeft -=
      carroselRightDown.current.offsetWidth
  }

  const handleRightClick3 = (e) => {
    e.preventDefault()
    carroselRightDown.current.scrollLeft +=
      carroselRightDown.current.offsetWidth
  }

  if (!carWhite || !carWhite.length) return null
  if (!carBrown || !carBrown.length) return null
  if (!carGray || !carGray.length) return null

  return (
    <Container>
      <div className="top-offers-top">
        <h2>Ofertas</h2>
        <div onClick={() => navigate('/catalog')} className="view-all">
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
          <div className="carrosel-left" ref={carrosel}>
            <p className="p-left">Usado</p>
            {carWhite.map((item, index) => {
              return (
                <img
                  onClick={() => navigate('/item')}
                  key={index}
                  src={item}
                  alt="white car"
                />
              )
            })}
          </div>

          <div className="card-left-down-infos">
            <div className="ano-compare">
              <p>2018</p>
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
            <img
              onClick={handleLeftClick2}
              className="setas2"
              src={After}
              alt="seta esquerda"
            />
            <img
              onClick={handleRightClick2}
              className="setas2"
              src={After}
              alt="seta direita"
            />
            <div className="carrosel-right-up" ref={carroselRightUp}>
              <p className="p-right-up">Usado</p>
              <img className="core" src={Core} alt="curtida" />
              {carBrown.map((item, index) => {
                return (
                  <img
                    onClick={() => navigate('/item')}
                    key={index}
                    src={item}
                    alt="brown car"
                  />
                )
              })}
            </div>

            <div className="card-right-up-infos">
              <div className="ano-compare">
                <p>2019</p>
                <label className="check">
                  <p>Compare</p>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="especification">
                <h3>F-250R</h3>
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
            <img
              onClick={handleLeftClick3}
              className="setas3"
              src={After}
              alt="seta esquerda"
            />
            <img
              onClick={handleRightClick3}
              className="setas3"
              src={After}
              alt="seta direita"
            />
            <div className="carrosel-right-down" ref={carroselRightDown}>
              <p className="p-right-down">Novo</p>
              <img className="core" src={Core} alt="curtida" />
              {carGray.map((item, index) => {
                return (
                  <img
                    onClick={() => navigate('/item')}
                    key={index}
                    src={item}
                    alt="gray car"
                  />
                )
              })}
            </div>
            <div className="card-right-down-infos">
              <div className="ano-compare">
                <p>2021</p>
                <label className="check">
                  <p>Compare</p>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="especification">
                <h3>Mercedes Classe C</h3>
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
