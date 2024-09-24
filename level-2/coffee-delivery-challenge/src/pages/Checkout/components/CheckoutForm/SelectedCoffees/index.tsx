import { TitleText } from '../../../../../components/Typography'
import { CoffeeCartCard } from '../../CoffeeCartCard'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
