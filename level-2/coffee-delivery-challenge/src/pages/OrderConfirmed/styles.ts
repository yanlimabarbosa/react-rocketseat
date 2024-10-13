import styled from 'styled-components'

export const OrderConfirmerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
  padding: 0 2rem;

  h1 {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
      flex-direction: column;

      img {
        margin-top: 3rem;
        max-width: 28rem;
        flex: 1;
      }
    }
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1.5px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8) 98.76%;
  }

  @media (max-width: 992px) {
    min-width: 4rem;
  }
`
