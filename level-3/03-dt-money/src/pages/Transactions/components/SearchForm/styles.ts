import styled from "styled-components"

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  button {
    font-weight: bold;
    color: ${(props) => props.theme["green-300"]};
    background: ${(props) => props.theme["gray-800"]};
    border: solid ${(props) => props.theme["green-300"]} 2px;
    border-radius: 6px;
    padding: 0 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      transition: 0.2s;
    }

    span {
      line-height: 0px;
    }
  }
`
