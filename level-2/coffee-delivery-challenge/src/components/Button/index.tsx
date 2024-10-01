import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

export function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
