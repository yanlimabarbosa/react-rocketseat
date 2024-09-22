import {
  CoffeeCardContainer,
  CoffeeList,
  Description,
  Name,
  Tags,
} from './styles'
import ExpressoTradicional from '../../../../assets/coffees/expresso-tradicional.png'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={ExpressoTradicional} />
      <Tags>
        <span>Tradicional</span>
        <span>com leite</span>
      </Tags>
      <Name>Café tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
    </CoffeeCardContainer>
  )
}
