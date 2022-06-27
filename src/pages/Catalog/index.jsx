import React from 'react'
import { Container } from './styles'

import NavBar from '@/components/NavBar'
import { menuItem } from '@/Constants'
import Footer from '@/components/Footer'

const Catalog = () => {
  return (
    <Container>
      <NavBar item={menuItem} />
      <main></main>
      <Footer />
    </Container>
  )
}

export default Catalog
