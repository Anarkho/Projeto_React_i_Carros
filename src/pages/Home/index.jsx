import React from 'react'
import { Container } from './styles'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import { menuItem } from '@/Constants'
import { Header } from '@/components/Header'
import Types from '@/components/Types'
import TopOffers from '@/components/TopOffers'
import Brands from '@/components/Logos'
import Features from '@/components/Features'
import Banners from '@/components/Banners'

const Home = () => {
  return (
    <Container>
      <NavBar item={menuItem} />
      <Header />
      <main>
        <Types />
        <TopOffers />
        <Brands />
        <Features />
        <Banners />
      </main>
      <Footer />
    </Container>
  )
}

export default Home
