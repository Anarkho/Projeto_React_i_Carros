import React from 'react'

import NavBar from '@/components/NavBar'
import { menuItem } from '@/Constants'
import Footer from '@/components/Footer'
import { Container } from './styles'
import LastPublication from '@/components/LastPublication'

const Item = () => {
  return (
    <Container>
      <NavBar item={menuItem} />
      <main>
        <LastPublication title="Você pode estar interessado" />
      </main>
      <Footer />
    </Container>
  )
}

export default Item
