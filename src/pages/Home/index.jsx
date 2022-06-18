import React from 'react'
import { Container } from './styles'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import { menuItem } from '@/Constants'

const Home = () => {
  return (
    <Container>
      <NavBar item={menuItem} />
      <h1>Home</h1>
      <Footer />
    </Container>
  )
}

export default Home
