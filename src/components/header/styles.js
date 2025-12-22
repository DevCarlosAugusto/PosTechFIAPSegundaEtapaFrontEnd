import styled from "styled-components";

export const Header = styled.header`
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  box-shadow: 0 0.625rem 1.5rem rgba(15, 23, 42, 0.15);
  color: #fff;
  padding: 0.5rem 0;

  .Header__boxtitle {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const WebTitle = styled.h1`
  color: #fff;
  display: inline-block;
  font-weight: 600;
  line-height: 1rem;
  margin: 0 0 0.75rem;
  text-decoration: none;
  font-size: 1.4rem;
  letter-spacing: 0.25rem;
`;

export const WebSubtitle = styled.h4`
  display: inline-block;
  font-size: 0.75rem;
  line-height: 0.5rem;
  margin: 0;
  opacity: 0.8;
`;

export const Header__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  width: 100%;

  ${WebTitle} {
    position: relative;
  }

  ${WebSubtitle} {
    position: relative;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0.75rem 1rem;
    text-align: left;

    .Header__boxtitle {
      width: auto;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;

  a {
    color: #e5e7eb;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    transition: background 0.15s, color 0.15s;
  }
`;

export const NavLink = styled.a`
  appearance: none;
  border: 0;
  background: transparent;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  font-family: inherit;
  font-size: 0.9rem;

  padding: 0.5rem 1rem;
  border-radius: 1.5rem;

  color: #e5e7eb;
  text-decoration: none;

  transition: background 0.15s ease, color 0.15s ease, opacity 0.15s ease;

  ${({ $active }) =>
    $active &&
    `
      background: rgba(15, 23, 42, .30);
      color: #fff;
      font-weight: 600;
    `}

  &:hover {
    background: rgba(15, 23, 42, .35);
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;