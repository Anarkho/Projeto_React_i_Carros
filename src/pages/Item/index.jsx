import React, { useRef, useState, useEffect } from 'react'

import NavBar from '@/components/NavBar'
import { menuItem } from '@/Constants'
import Footer from '@/components/Footer'
import { Container } from './styles'
import LastPublication from '@/components/LastPublication'
import Caminhos from '@/components/Caminhos'
import iconCoracao from '@/assets/img/home/Item/icones/icon-coracao.png'
import iconShared from '@/assets/img/home/Item/icones/icon-shared.png'
import Estrela from '@/assets/img/home/Item/icones/estrela.png'
import Vendedor from '@/assets/img/home/Item/icones/vendedor.png'
import Video from '@/assets/img/home/Item/icones/video.png'
import Telefone from '@/assets/img/home/Item/icones/telefone.png'
import Email from '@/assets/img/home/Item/icones/email.png'
import After from '@/assets/img/home/apps/previous.png'
import Verificado from '@/assets/img/home/Item/qualidade/verificado.png'
import Acidente from '@/assets/img/home/Item/qualidade/acidente.png'
import Equipado from '@/assets/img/home/Item/qualidade/equipado.png'
import UnicoDono from '@/assets/img/home/Item/qualidade/unico_dono.png'
import Pin from '@/assets/img/home/footer/pin.svg'
import Dashboard from '@/assets/img/home/top-offers/dashboard.svg'

import { mercedes } from '../../assets/img/home/top-offers/automoveis'

const Item = () => {
  const carrosel = useRef(null)
  const [carWhite, setCarWhite] = useState([])

  useEffect(() => {
    setCarWhite(mercedes)
  }, [carWhite.length > 0])

  const handleLeftClick = (e) => {
    e.preventDefault()
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carrosel.current.scrollLeft += carrosel.current.offsetWidth
  }
  if (!carWhite || !carWhite.length) return null

  return (
    <Container>
      <NavBar item={menuItem} />
      <main>
        <Caminhos use="Usados" modelo="Mercedes-Benz Classe S" />
        <div className="top-info">
          <h2>Mercedes-Benz Classe S</h2>
          <div className="top-icones">
            <img src={iconCoracao} alt="icone coração" />
            <img src={iconShared} alt="icone compartilhar" />
          </div>
        </div>
        <div className="colunas">
          <div className="coluna-left">
            <img
              onClick={handleLeftClick}
              className="setas"
              src={After}
              alt="seta esquerda"
            />
            <img
              onClick={handleRightClick}
              className="setas"
              src={After}
              alt="seta direita"
            />
            <div className="carrosel" ref={carrosel}>
              {carWhite.map((item, index) => {
                return (
                  <img
                    className="img-principal"
                    key={index}
                    src={item}
                    alt="white car"
                  />
                )
              })}
            </div>
            <div className="mini-imagens">
              {mercedes.map((item) => (
                <img src={item} alt="miniatura carros" />
              ))}
              <img src={Video} alt="video demostrativo" />
            </div>
            <div className="especification">
              <h3>Especificações</h3>
              <div className="espec">
                <h5>Ano:</h5>
                <p>2018</p>
              </div>
              <div className="espec">
                <h5>Kilome:</h5>
                <p>48k miles</p>
              </div>
              <div className="espec">
                <h5>Tipo:</h5>
                <p>Conversivel</p>
              </div>
              <div className="espec">
                <h5>Transmissão:</h5>
                <p>Automatica</p>
              </div>
            </div>
            <div className="qualidade">
              <div className="div-qualidade">
                <img src={Verificado} alt="certificado" />
                <p>verificado e</p>
                <p>certificado pelo finder</p>
              </div>
              <div className="div-qualidade">
                <img src={UnicoDono} alt="unico dono" />
                <p>Único dono</p>
                <br />
              </div>
              <div className="div-qualidade">
                <img src={Equipado} alt="bem equipado" />
                <p>Bem equipado</p>
                <br />
              </div>
              <div className="div-qualidade">
                <img src={Acidente} alt="nem um acidente" width={65} />
                <p>Nenhum acidente/</p>
                <p>dano relatado</p>
              </div>
            </div>
            <h3>Descrição do vendedor</h3>
            <p className="lorem">
              Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non
              scelerisque turpis sed etiam ultrices. Blandit mollis dignissim
              egestas consectetur porttitor. Vulputate dolor pretium, dignissim
              eu augue sit ut convallis. Lectus est, magna urna feugiat sed
              ultricies sed in lacinia. Fusce potenti sit id pharetra vel
              ornare. Vestibulum sed tellus ullamcorper arcu.{' '}
            </p>
            <a href="">ver mais</a>
            <hr />
            <div className="referencias">
              <div className="ref-info">
                <p>Publicado: Abril, </p>
                <p className="p-bold">2020</p>
              </div>
              <hr />
              <div className="ref-info">
                <p>Numero do anuncio: </p>
                <p className="p-bold">681013232</p>
              </div>
              <hr />
              <div className="ref-info">
                <p>Visualizações: </p>
                <p className="p-bold">48</p>
              </div>
            </div>
          </div>

          <div className="coluna-right">
            <h2>R$60,990</h2>
            <div className="kilo-location">
              <img src={Dashboard} alt="dashboard" />
              <p>25.000 km</p>
              <hr />
              <img src={Pin} alt="localização" />
              <a href="">
                <p>São Paulo</p>
              </a>
            </div>
            <div className="container">
              <p>Vendedor Particular</p>
              <div className="caracteristicas">
                <div>
                  <img src={Vendedor} alt="vendedor" />
                </div>
                <div>
                  <p>Usuario</p>
                  <img src={Estrela} alt="estrela" />{' '}
                  <img src={Estrela} alt="estrela" />
                  <img src={Estrela} alt="estrela" />
                  <img src={Estrela} alt="estrela" />
                  <img src={Estrela} alt="estrela" />
                  <span>{'( 5 reviews)'}</span>
                </div>
              </div>
              <a href="">Other ads by this seller</a>
              <div className="container-tel">
                <img src={Telefone} alt="telefone" />
                <p>(11) *** ****</p>
              </div>
              <a className="email" href="mailto:email@example.com.br">
                <div className="container-email">
                  <img src={Email} alt="email" />
                  <p>Enviar email</p>
                </div>
              </a>
            </div>

            <div className="container-down">
              <h3>
                Envie-me por e-mail quedas de preços e novas listagens para
                estes resultados de pesquisa:
              </h3>
              <div className="input-group">
                <img src={Email} alt="email" />
                <span>Email</span>
                <input type="text" placeholder="Email" />
                <button>Subscribe</button>
              </div>
              <label className="check">
                <p>
                  Concordo em receber alertas de queda de preço neste veículo e
                  informações úteis sobre compras.
                </p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <LastPublication title="Você pode estar interessado" />
      </main>
      <Footer />
    </Container>
  )
}

export default Item
