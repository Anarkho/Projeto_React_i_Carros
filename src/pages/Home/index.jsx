import React from 'react'
import { Container } from './styles'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import { menuItem } from '@/Constants'
import { Header } from '@/components/Header'

const Home = () => {
  return (
    <Container>
      <NavBar item={menuItem} />
      <Header />
      <h1>Home</h1>
      <Footer />
    </Container>
  )
}

export default Home
