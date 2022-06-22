import React from 'react'
import { Link } from 'react-router-dom'
import Auto from '@/assets/img/home/features/auto.png'
import Roadline from '@/assets/img/home/features/road-line.svg'
import { Container } from './styles'

const Features = () => {
  return (
    <Container class="features">
      <h2>O que temos de diferente</h2>

      <div class="features-left">
        <div class="features-column-left">
          <div class="features-left">
            <h3>Loren ipsun</h3>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>

          <div class="features-left">
            <h3>Loren ipsun</h3>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>

          <div class="features-left">
            <h3>Loren ipsun</h3>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>
        </div>
      </div>

      <div class="auto-road">
        <img src={Auto} alt="auto" />
        <img src={Roadline} alt="" />
      </div>

      <div class=".features-column-right">
        <div class="features-column-right">
          <Link to="#">Como vender carros no Finder</Link>
          <div class="features-right">
            <h3>Loren ipsun</h3>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>

          <div class="features-right">
            <h3>Loren ipsun</h3>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>

          <div class="features-right">
            <h3>Loren ipsun</h3>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Features
