import styled from 'styled-components';

export const Header = styled.header`
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  box-shadow: 0 .625rem 1.5rem rgba(15, 23, 42, .15);
  color: #fff;
  padding: .5rem 0;
  
  .Header__boxtitle {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const WebTitle = styled.h1`
  color: #fff;
  display: inline-block;
  font-weight: 800;
  line-height: 1rem;
  margin: 0 0 .5rem;
  text-decoration: none;
  font-size: 1.4rem;
  letter-spacing: .25rem;
`;

export const WebSubtitle = styled.h4`
  display: inline-block;
  font-size: .75rem;
  line-height: .5rem;
  margin: 0;
  opacity: .8;
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
    padding: .75rem 1rem;
    text-align: left;

    .Header__boxtitle {
      width: auto;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: .75rem;
  font-size: .9rem;

  a {
    color: #e5e7eb;
    text-decoration: none;
    padding: .35rem .75rem;
    border-radius: 999px;
    transition: background .15s, color .15s;
  }
`;

export const NavLink = styled.a`
  ${({ $active }) =>
  $active &&
  `
    background: rgba(15, 23, 42, .3);
    color: #fff;
  `}

  &:hover {
    background: rgba(15, 23, 42, .35);
    color: #fff;
  }
`;

