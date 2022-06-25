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
      <section className="blog">
        <div className="blog-top">
          <h2>Ultimas novidades</h2>
          <div className="pesquisa-vender">
            <span>Go to blog</span>
            <Link to="#">
              <img src={Seta} alt="seta" width={15} />
            </Link>
          </div>
        </div>

        <div className="blog-cards">
          <div className="cards-blog">
            <img className="automovel" src={Fusca} alt="fusca" />

            <div className="title">
              <h4>Dicas</h4>
              <p>Loren ipsuns</p>
            </div>

            <div className="author">
              <img src={Jacob} alt="jacob" />

              <div className="author-info">
                <div className="author-name">Jacob Jones</div>
                <img className="author-date" src={Date1} alt="data" />
              </div>
            </div>
          </div>

          <div className="cards-blog">
            <img className="automovel" src={Traseira} alt="traseira do carro" />

            <div className="title">
              <h4>OFERTAS</h4>
              <p>Loren ipsuns</p>
            </div>

            <div className="author">
              <img src={Annette} alt="annette" />

              <div className="author-info">
                <div className="author-name">Annette Black</div>
                <img className="author-date" src={Date2} alt="data" />
              </div>
            </div>
          </div>

          <div className="cards-blog">
            <img className="automovel" src={Moto} alt="moto" />

            <div className="title">
              <h4>OFERTAS</h4>
              <p>Loren ipsuns</p>
            </div>

            <div className="author">
              <img src={Ralph} alt="ralph" />

              <div className="author-info">
                <div className="author-name">Ralph Edwards</div>
                <img className="author-date" src={Date3} alt="data" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Blog
