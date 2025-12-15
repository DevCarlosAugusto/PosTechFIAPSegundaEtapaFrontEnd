import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: #fff;
  padding: 1.2rem 0;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
`;

const HeaderInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Brand = styled.span`
  color: #fff;
  font-weight: 800;
  text-decoration: none;
  font-size: 1.4rem;
  letter-spacing: 0.03em;
`;

const Tagline = styled.span`
  display: block;
  font-size: 0.75rem;
  opacity: 0.8;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;

  a {
    color: #e5e7eb;
    text-decoration: none;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    transition: background 0.15s, color 0.15s;
  }
`;

const NavLink = styled.span`
  ${({ $active }) =>
    $active &&
    `
    background: rgba(15, 23, 42, 0.3);
    color: #fff;
  `}

  &:hover {
    background: rgba(15, 23, 42, 0.35);
    color: #fff;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 1.8rem 1.2rem 2.5rem;
  max-width: 960px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  border-top: 1px solid var(--border-soft);
  padding: 1rem 1.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
`;

function Layout({ children }) {
  const router = useRouter();

  return (
    <Container>
      <HeaderWrapper>
        <HeaderInner>
          <div>
            <Link href="/" passHref>
              <Brand>EducaBlog</Brand>
            </Link>
            <Tagline>Postagens dos professores para alunos</Tagline>
          </div>
          <Nav>
            <Link href="/" passHref>
              <NavLink $active={router.pathname === "/"}>
                Postagens
              </NavLink>
            </Link>
            <Link href='/posts/novo' passHref>
              <NavLink $active={router.pathname.startsWith('/posts/novo')}>
                Nova postagem
              </NavLink>
            </Link>
          </Nav>
        </HeaderInner>
      </HeaderWrapper>

      <Main>{children}</Main>

      <Footer>
        EducaBlog · Construído na fase 3 da PósTech FIAP ·{" "}
        {new Date().getFullYear()}
      </Footer>
    </Container>
  );
}

export default Layout;
