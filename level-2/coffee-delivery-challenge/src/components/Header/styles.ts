import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.fonts.sizes['text-regular-s']};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`${variant}-light`]};
    color: ${theme.colors[`${variant}-dark`]};

    span {
      background: ${theme.colors[`${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors.purple};
      }
    `}
`

export const LocationButton = styled.button`
  color: #8047f8;
  background-color: #ebe5f9;
  border-radius: 8px;
  padding: 0.5rem;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

interface CartButtonProps {
  itemCount: number
}

export const CartButton = styled.div<CartButtonProps>`
  background-color: #f1e9c9;
  padding: 0.5rem;
  border-radius: 8px;
  display: grid;
  place-items: center;
  position: relative;

  span {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    z-index: 999;
    background-color: #c47f17;
  }
`
