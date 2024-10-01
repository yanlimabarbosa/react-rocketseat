import styled from 'styled-components'

export const OurCoffeesContainer = styled.section`
  margin-top: 2rem;
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 2.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1.5rem;
  }
`
