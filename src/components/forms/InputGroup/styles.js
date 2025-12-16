import styled from 'styled-components';


export const InputGroupBlock__container = styled.div`
  padding-bottom: .5rem;
  position: relative;
`;

export const Input__label = styled.label`
  color: var(--text-muted);
  display: block;
  font-weight: 600;
  left: 1.5rem;
  transition: all .2s ease-out;
  margin-bottom: .5rem;
  margin-top: -.25rem;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  &.Input__label--active {
    left: .5rem;
    top: -.5rem;
  }
`;

export const Input__element = styled.input`
  width: 100%;
  padding: .75rem 1rem;
  border: 1px solid var(--white-01);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color .2s, box-shadow .2s;
  box-sizing: border-box;

  &:focus {
    border-color: #0070f3;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, .2);
    outline: none;
  }

  &:focus-within {
    & + ${Input__label}:not(.Input__label--active) {
      left: .5rem;
      top: -.5rem;
    }
  }

  &:not(:focus-within) {
    &::placeholder {
      color: transparent;
    }
  }
`;

export const Input__error__message_element = styled.p`
  color: var(--error);
  font-size: .75rem;
  margin-top: 0;
  padding-left: .25rem;
  position: absolute;
`;

const InputGroupBlock = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;

  &.InputGroupBlock--error {
    ${Input__element} {
      border-color: var(--error);
      box-shadow: 0 0 0 3px rgb(204, 0, 0, .5);
    }

    ${Input__label} {
      color: var(--error);
    }
  }
`;

export default InputGroupBlock;
