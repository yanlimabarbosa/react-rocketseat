import styled, { css } from "styled-components"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  transition: 0.4s;

  > p {
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.4s;
  overflow: hidden;

  /* if the input within it focus, this div will active the border */
  &:focus-within {
    border-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors["base-error"]};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;

  background: none;
  border: none;

  font-size: 0.75rem;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors["base-label"]};
`
