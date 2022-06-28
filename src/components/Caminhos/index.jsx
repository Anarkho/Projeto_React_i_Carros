import React from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

const Caminhos = ({ use, modelo = '' }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <span onClick={() => navigate('/')}>Home</span> {'>'}
      <span onClick={() => navigate('/catalog')}>{use}</span> {'>'}{' '}
      <span>{modelo}</span>
    </Container>
  )
}

export default Caminhos
