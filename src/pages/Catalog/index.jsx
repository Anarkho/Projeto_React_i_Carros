import React from 'react'
import { Container } from './styles'

import NavBar from '@/components/NavBar'
import { menuItem } from '@/Constants'
import Footer from '@/components/Footer'
import Caminhos from '@/components/Caminhos'

const Catalog = () => {
  return (
    <Container>
      <NavBar item={menuItem} />
      <main>
        <Caminhos use="Usados" />
      </main>
      <Footer />
    </Container>
  )
}

export default Catalog
