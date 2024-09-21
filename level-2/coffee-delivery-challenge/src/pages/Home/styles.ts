import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  }

  h4 {
    flex-wrap: nowrap;
    font-weight: lighter;
    color: #403937;
  }
`

export const IconsContainer = styled.div`
  display: grid;

  gap: 1.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`
