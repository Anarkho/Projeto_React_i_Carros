import React from 'react'
import { Container, Use } from './styles'
import { useNavigate } from 'react-router-dom'

import Dashboard from '@/assets/img/home/top-offers/dashboard.svg'
import Transmission from '@/assets/img/home/top-offers/transmission.svg'
import Fuel from '@/assets/img/home/top-offers/fuel.svg'
import Pin from '@/assets/img/home/footer/pin.svg'
export const CardCar = ({
  imagem,
  ano,
  modelo,
  price,
  location,
  mileage = 'No mileage',
  transmission,
  fuel,
  use,
  color,
}) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Use bgColor={color}>{use}</Use>
      <img onClick={() => navigate('/item')} src={imagem} alt="mazda" />
      <div className="ano-compare">
        <p>{ano}</p>
        <label className="check">
          <p>Compare</p>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="especification">
        <h3>{modelo}</h3>
        <p className="price">${price}</p>
        <div className="location">
          <img src={Pin} alt="ponteiro" />
          <p>{location}</p>
        </div>
        <hr />
        <div className="info-car">
          <div>
            <img src={Dashboard} alt="" />
            <p>{mileage}</p>
          </div>
          <div>
            <img src={Transmission} alt="" />
            <p>{transmission}</p>
          </div>
          <div>
            <img src={Fuel} alt="" />
            <p>{fuel}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default CardCar
