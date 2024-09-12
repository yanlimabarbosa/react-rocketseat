import { Play } from 'phosphor-react'
import {} from '../../components/Header/styles'
import {
  Button,
  CountContainer,
  FormContainer,
  HomeContainer,
  TimeSeparator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>

        <CountContainer>
          <span>0</span>
          <span>0</span>
          <TimeSeparator>:</TimeSeparator>
          <span>0</span>
          <span>0</span>
        </CountContainer>

        <Button type="submit">
          <Play size={24} />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
