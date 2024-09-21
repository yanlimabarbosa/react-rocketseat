import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Container,
  HomeContainer,
  IconsContainer,
  ImageContainer,
} from './styles'
import coffeHomeImage from '../../assets/coffe-home-bg.svg'
import { Intro } from './components/Intro'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
    </HomeContainer>

    // <Container>
    //   <section>
    //     <div className="text-container">Z
    //       <h1>Encontre o cafké perfeito para qualquer hora do dia</h1>
    //       <h4>
    //         Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
    //         hora
    //       </h4>
    //     </div>
    //     <IconsContainer>
    //       <div>
    //         <ShoppingCart size={32} weight="fill" />
    //         <h4>Compra e simples e segura</h4>
    //       </div>
    //       <div>
    //         <Package size={32} weight="fill" />
    //         <h4>Embalagem mantém o café intacto</h4>
    //       </div>
    //       <div>
    //         <Timer size={32} weight="fill" />
    //         <h4>Entrega rápida e rastreada</h4>
    //       </div>
    //       <div>
    //         <Coffee size={32} weight="fill" />
    //         <h4>O café chega fresquinho até você</h4>
    //       </div>
    //     </IconsContainer>
    //   </section>
    //   <ImageContainer>
    //     <img src={coffeHomeImage} />
    //   </ImageContainer>
    // </Container>
  )
}
