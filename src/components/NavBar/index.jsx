import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

import Logo from '@/assets/img/home/nav-bar/logo-dark.png'
import User from '@/assets/img/home/nav-bar/user.png'

const NavBar = ({ item }) => {
  return (
    <Container>
      <Link to="/" className="link-logo">
        <img src={Logo} alt="logo car-finder-nav" />
      </Link>
      <div className="container-menu">
        <div>
          {item?.map((item, index) => (
            <Link className="links-menu" key={index} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="container-entrar-vender">
          <img src={User} alt="icone usuario" height="25px" />
          <Link to="#">Entrar</Link>
          <button>+ Vender</button>
        </div>
      </div>
    </Container>
  )
}

export default NavBar
