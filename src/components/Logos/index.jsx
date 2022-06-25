import React from 'react'
import { Link } from 'react-router-dom'
import Opel from '@/assets/img/home/logos/opel-logo.svg'
import Audi from '@/assets/img/home/logos/audi-logo.svg'
import Mercedez from '@/assets/img/home/logos/mercedes-benz-logo.svg'
import Toyota from '@/assets/img/home/logos/toyota-logo.svg'
import Mazda from '@/assets/img/home/logos/mazda-logo.svg'
import Nissan from '@/assets/img/home/logos/nissan-logo.svg'
import Hyundai from '@/assets/img/home/logos/hyundai-logo.svg'
import Lexus from '@/assets/img/home/logos/lexus-logo.svg'
import Honda from '@/assets/img/home/logos/honda-logo.svg'
import Renault from '@/assets/img/home/logos/renault-logo.svg'
import Infinity from '@/assets/img/home/logos/infiniti-logo.svg'
import Mitsubishi from '@/assets/img/home/logos/mitsubishi-logo.svg'
import { Container } from './styles'

const Brands = () => {
  return (
    <Container className="logos">
      <Link to="">
        <img src={Opel} alt="logo opel" />
      </Link>

      <Link to="">
        <img src={Audi} alt="logo audi" />
      </Link>

      <Link to="">
        <img src={Mercedez} alt="logo mercedes-bens" />
      </Link>

      <Link to="">
        <img src={Toyota} alt="logo toyota" />
      </Link>

      <Link to="">
        <img src={Mazda} alt="logo mazda" />
      </Link>

      <Link to="">
        <img src={Nissan} alt="nissan" />
      </Link>

      <Link to="">
        <img src={Hyundai} alt="logo hyundai" />
      </Link>

      <Link to="">
        <img src={Lexus} alt="logo lexus" />
      </Link>

      <Link to="">
        <img src={Honda} alt="logo honda" />
      </Link>

      <Link to="">
        <img src={Renault} alt="logo renault" />
      </Link>

      <Link to="">
        <img src={Infinity} alt="logo infiniti" />
      </Link>

      <Link to="">
        <img src={Mitsubishi} alt="logo mitsubishi" />
      </Link>
    </Container>
  )
}

export default Brands
