import styled from 'styled-components';

export const ButtonBox = styled.button`
  background-color: #0070f3;
  border-radius: .25rem;
  cursor: pointer;
  color: var(--white);
  font-weight: 400;
  min-width: 8rem;
  padding: .5rem .75rem;

  &:hover:not(:disabled) {
    background-color: #005bc1;
    box-shadow: 0 0 .5rem rgba(119, 119, 119, 0.15);
  }

  &:active:not(:disabled) {
    transform: scale(.98);
  }

  &:disabled {
    background-color: var(--text-muted);
    cursor: not-allowed;
    opacity: .75;
  }

  &.button--loading {
    cursor: wait;
    opacity: .5;
  }
`;
