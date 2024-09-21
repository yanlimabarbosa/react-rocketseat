import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.png'
import { rgba } from 'polished'
import { TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.section`
  width: 100%;
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
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: '1rem';
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
