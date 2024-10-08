import styled from 'styled-components'

export const ItemWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  iconBg: string
}

export const IconContainer = styled.div<IconContainerProps>`
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 50%;

  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`
