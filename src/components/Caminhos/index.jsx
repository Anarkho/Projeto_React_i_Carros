import React from 'react'

const Caminhos = ({ use, modelo = '' }) => {
  return (
    <span>
      Home {'>'} {use} {'>'} {modelo}
    </span>
  )
}

export default Caminhos
