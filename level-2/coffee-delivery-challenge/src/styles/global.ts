import { createGlobalStyle } from "styled-components"
import "./../../@types/styled.d"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Baloo 2', "sans-serif";
  }

  body{
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body,input,textarea,button{
    font-family: ${({ theme }) => theme.fonts.family.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fonts.sizes["text-regular-m"]}
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  /* remove button arrows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* custom scroll */

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-button"]}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["purple"]}
  }
`
