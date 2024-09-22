import { TitleText } from '../../../../components/Typography'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

export function OurCoffes() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
