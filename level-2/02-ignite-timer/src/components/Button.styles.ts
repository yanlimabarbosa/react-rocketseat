import styled, { css } from "styled-components"

export type ButtonVariantColor = "primary" | "secondary" | "danger" | "success"

interface ButtonContainerProps {
  variant: ButtonVariantColor
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${({ theme }) => theme.primary};
  color:${({ theme }) => theme.white}

  /* ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }} */
`

