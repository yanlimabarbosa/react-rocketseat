import logo from '../../assets/coffe-delivery-logo.svg'
import { CartButton, HeaderContainer, LocationButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <LocationButton>
          <MapPin size={24} weight="fill" /> Porto Alegre, RS
        </LocationButton>
        <CartButton itemCount={1}>
          <ShoppingCart color="#c47f17" weight="fill" size={24} />
          <span>1</span>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
