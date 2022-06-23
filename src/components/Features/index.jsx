import React from 'react'
import { Link } from 'react-router-dom'
import Auto from '@/assets/img/home/features/auto.png'
import Roadline from '@/assets/img/home/features/road-line.png'
import Seta from '@/assets/img/home/features/seta.png'
import File from '@/assets/img/home/features/file.svg'
import Search from '@/assets/img/home/features/search.svg'
import Settings from '@/assets/img/home/features/setting.svg'
import Info from '@/assets/img/home/features/circle.svg'
import User from '@/assets/img/home/features/user.svg'
import Calculator from '@/assets/img/home/features/calculator.svg'
import { Container } from './styles'

const Features = () => {
  return (
    <Container>
      <div class="top-info">
        <h2>O que temos de diferente</h2>
        <div class="pesquisa-vender">
          <span>Como vender carros no Finder</span>
          <Link to="#">
            <img src={Seta} alt="seta" width={15} />
          </Link>
        </div>
      </div>

      <div class="features-container">
        <div class="features-column-left">
          <div class="feature-left">
            <div class="title-left">
              <h3>Loren ipsun</h3>
              <img src={File} alt="file" />
            </div>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>

          <div class="feature-left">
            <div class="title-left">
              <h3>Loren ipsun</h3>
              <img src={Search} alt="search" />
            </div>
            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>

          <div class="feature-left">
            <div class="title-left">
              <h3>Loren ipsun</h3>
              <img src={Settings} alt="settings" />
            </div>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>
        </div>

        <div class="auto-road">
          <img src={Auto} alt="auto" />
          <img src={Roadline} alt="roadline" />
        </div>

        <div class="features-column-right">
          <div class="feature-right">
            <div class="title-right">
              <img src={Info} alt="info" />
              <h3>Loren ipsun</h3>
            </div>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>

          <div class="feature-right">
            <div class="title-right">
              <img src={User} alt="user" />
              <h3>Loren ipsun</h3>
            </div>

            <p>
              That’s more than you’ll find on any other major online automotive
              marketplace in the USA.
            </p>
          </div>

          <div class="feature-right">
            <div class="title-right">
              <img src={Calculator} alt="calculator" />
              <h3>Loren ipsun</h3>
            </div>

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
