import React from 'react'
import { Link } from 'react-router-dom'

import Arrow from '@/assets/img/home/types/arrow.svg'
import Sedan from '@/assets/img/home/types/sedan.png'
import Suv from '@/assets/img/home/types/suv.png'
import Wagon from '@/assets/img/home/types/wagon.png'
import CrossOver from '@/assets/img/home/types/crossover.png'
import Coupe from '@/assets/img/home/types/crossover.png'
import Pickup from '@/assets/img/home/types/pickup.png'
import Sport from '@/assets/img/home/types/sport_coupe.png'
import Compact from '@/assets/img/home/types/compact.png'
import Conversible from '@/assets/img/home/types/conversible.png'
import FamilyMvp from '@/assets/img/home/types/family.png'

import { Container } from './styles'
const Types = () => {
  return (
    <Container className="types">
      <div className="types-top">
        <h2>Mais procurados</h2>

        <div className="view-all">
          <Link to="">
            <p>Ver todos</p>
          </Link>
          <Link to="">
            <img className="arrow" src={Arrow} alt="arrow" />
          </Link>
        </div>
      </div>

      <div className="car-lines">
        <div className="cards-line1">
          <Link to="">
            <img src={Sedan} alt="card sedan" />
            <p>Sedan</p>
          </Link>

          <Link to="">
            <img src={Suv} alt="card suv" />
            <p>Suv</p>
          </Link>

          <Link to="">
            <img src={Wagon} alt="card wagon" />
            <p>Wagnon</p>
          </Link>

          <Link to="">
            <img src={CrossOver} alt="card crossover" />
            <p>Crossover</p>
          </Link>

          <Link to="">
            <img src={Coupe} alt="card coupe" />
            <p>Coupe</p>
          </Link>
        </div>

        <div className="card-line2">
          <Link to="">
            <img src={Pickup} alt="card pickup" />
            <p>Pickup</p>
          </Link>

          <Link to="">
            <img src={Sport} alt="card sport coupe" />
            <p>Sport Coupe</p>
          </Link>

          <Link to="">
            <img src={Compact} alt="card compact" />
            <p>Compact</p>
          </Link>

          <Link to="">
            <img src={Conversible} alt="card conversible" />
            <p>Convertible</p>
          </Link>

          <Link to="">
            <img src={FamilyMvp} alt="card family mpv" />
            <p>Family MPV</p>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Types
