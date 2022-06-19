import React from 'react'
import { Container } from './styles'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import { menuItem } from '@/Constants'
import { Header } from '@/components/Header'
import Types from '@/components/Types'

const Home = () => {
  return (
    <Container>
      <NavBar item={menuItem} />
      <Header />
      <main>
        <Types />
      </main>
      <Footer />
    </Container>
  )
}

export default Home
