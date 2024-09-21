import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0rem;
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
