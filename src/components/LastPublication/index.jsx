import React, { useRef } from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import Seta from '@/assets/img/home/features/seta.png'
import Rectangle from '@/assets/img/home/latest-cars/rectangle.png'
import RectangleGray from '@/assets/img/home/latest-cars/rectangle_gray.png'
import CardCar from '@/components/CardCar'
import Mazda from '@/assets/img/home/latest-cars/mazda.png'
import Nissan from '@/assets/img/home/latest-cars/nissan.png'
import Bmw from '@/assets/img/home/latest-cars/bmw.png'
import After from '@/assets/img/home/apps/previous.png'

const LastPublication = ({ title }) => {
  const carrosel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carrosel.current.scrollLeft += carrosel.current.offsetWidth
  }
  return (
    <Container>
      <div className="top-info">
        <h2>{title}</h2>
        <div className="top-info-right">
          <p className="novo">Novo</p>
          <p className="usado">Usado</p>

          <Link to="/catalog">
            <span>Ver todos</span>
            <img src={Seta} alt="seta" width={15} />
          </Link>
        </div>
      </div>
      <img
        onClick={handleLeftClick}
        className="setas-left"
        src={After}
        alt="seta left"
      />
      <img
        onClick={handleRightClick}
        className="setas-rigth"
        src={After}
        alt="seta right"
      />
      <div className="cards" ref={carrosel}>
        <CardCar
          use="Novo"
          color="#ffc107"
          imagem={Mazda}
          ano={2019}
          modelo="Mazda MX-5 Miata Convertible"
          price="38,500"
          location="Los Angeles"
          mileage="18K mi"
          transmission="Manual"
          fuel="Gasoline"
        />
        <CardCar
          use="Usado"
          color="#3c76f3"
          imagem={Bmw}
          ano={2019}
          modelo="BMW 640 XI Gran Turismo"
          price="44,920"
          location="New Jersey"
          mileage="10K mi"
          transmission="Automatic"
          fuel="Gasoline"
        />
        <CardCar
          use="Usado"
          color="#3c76f3"
          imagem={Nissan}
          ano={2019}
          modelo="Nissan 370Z Nismo"
          price="37,900"
          location="New York"
          mileage="16K mi"
          transmission="Automatic"
          fuel="Gasoline"
        />
        <CardCar
          use="Novo"
          color="#ffc107"
          imagem={Mazda}
          ano={2019}
          modelo="Mazda MX-5 Miata Convertible"
          price="38,500"
          location="Los Angeles"
          mileage="18K mi"
          transmission="Manual"
          fuel="Gasoline"
        />
        <CardCar
          use="Usado"
          color="#3c76f3"
          imagem={Bmw}
          ano={2019}
          modelo="BMW 640 XI Gran Turismo"
          price="44,920"
          location="New Jersey"
          mileage="10K mi"
          transmission="Automatic"
          fuel="Gasoline"
        />
      </div>
      <div className="status-carrosel">
        <img src={RectangleGray} alt="retangulo" />
        <img className="meio" src={Rectangle} alt="retangulo" />
        <img src={RectangleGray} alt="retangulo" />
      </div>
    </Container>
  )
}

export default LastPublication
