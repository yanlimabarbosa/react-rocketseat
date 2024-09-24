import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.yellow};
  font-weight: 700;
  border: none;
  font-size: ${({ theme }) => theme.fonts.sizes['components-button-g']};
  border-radius: 6px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
