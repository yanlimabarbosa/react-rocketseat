import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.png'
import { rgba } from 'polished'
import { TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.section`
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors.white} 0%,
        ${rgba(theme.colors.white, 1)} 100%,
        ${theme.colors.white} 100%
      )`};
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    height: auto;
    flex-direction: column;
  }
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 1rem 0;

    .img {
      width: 100%;
    }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 2.5rem;
  }
`
