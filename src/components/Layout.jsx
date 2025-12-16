import styled from 'styled-components';

import Header from './header';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  return (
    <Container>
      <Header />

      <Main>{children}</Main>

      <Footer>
        EducaBlog · Construído na fase 3 da PósTech FIAP ·{" "}
        {new Date().getFullYear()}
      </Footer>
    </Container>
  );
}

export default Layout;
