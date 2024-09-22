import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { OurCoffes } from './components/OurCoffees'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffes />
    </HomeContainer>
  )
}
