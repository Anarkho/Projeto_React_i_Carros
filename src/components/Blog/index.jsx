import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import Seta from '@/assets/img/home/features/seta.png'
import Fusca from '@/assets/img/home/blog/fusca.png'
import Moto from '@/assets/img/home/blog/moto.png'
import Jacob from '@/assets/img/home/blog/jacob.svg'
import Ralph from '@/assets/img/home/blog/ralph.svg'
import Annette from '@/assets/img/home/blog/annette.svg'
import Traseira from '@/assets/img/home/blog/traseira-carro.png'
import Date1 from '@/assets/img/home/blog/date1.svg'
import Date2 from '@/assets/img/home/blog/date2.svg'
import Date3 from '@/assets/img/home/blog/date3.svg'

const Blog = () => {
  return (
    <Container>
      <section class="blog">
        <div class="blog-top">
          <h2>Ultimas novidades</h2>
          <div class="pesquisa-vender">
            <span>Go to blog</span>
            <Link to="#">
              <img src={Seta} alt="seta" width={15} />
            </Link>
          </div>
        </div>

        <div class="blog-cards">
          <div class="cards-blog">
            <img class="automovel" src={Fusca} alt="fusca" />

            <div class="title">
              <h4>Dicas</h4>
              <p>Loren ipsuns</p>
            </div>

            <div class="author">
              <img src={Jacob} alt="jacob" />

              <div class="author-info">
                <div class="author-name">Jacob Jones</div>
                <img class="author-date" src={Date1} alt="data" />
              </div>
            </div>
          </div>

          <div class="cards-blog">
            <img class="automovel" src={Traseira} alt="traseira do carro" />

            <div class="title">
              <h4>OFERTAS</h4>
              <p>Loren ipsuns</p>
            </div>

            <div class="author">
              <img src={Annette} alt="annette" />

              <div class="author-info">
                <div class="author-name">Annette Black</div>
                <img class="author-date" src={Date2} alt="data" />
              </div>
            </div>
          </div>

          <div class="cards-blog">
            <img class="automovel" src={Moto} alt="moto" />

            <div class="title">
              <h4>OFERTAS</h4>
              <p>Loren ipsuns</p>
            </div>

            <div class="author">
              <img src={Ralph} alt="ralph" />

              <div class="author-info">
                <div class="author-name">Ralph Edwards</div>
                <img class="author-date" src={Date3} alt="data" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Blog
