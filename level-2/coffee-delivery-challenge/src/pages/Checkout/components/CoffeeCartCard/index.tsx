import {
  ActionsContainer,
  CoffeeCartCartContainer,
  RemoveButton,
} from './styles'
import coffeImage from '../../../../assets/coffees/expresso-tradicional.png'
import { RegularText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCartContainer>
      <div>
        <img src={coffeImage} alt="" />

        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCartContainer>
  )
}
