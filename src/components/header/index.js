import { useRouter } from 'next/router';
import Link from 'next/link';

import {
  Header,
  Header__Wrapper,
  WebTitle,
  Nav, NavLink,
  WebSubtitle,
} from './styles';

function header() {
  const router = useRouter();

  return (
    <Header>
      <Header__Wrapper>
        <div className="Header__boxtitle">
          <Link href="/" passHref>
            <WebTitle>EducaBlog</WebTitle>
          </Link>
          <WebSubtitle>Postagens dos professores para alunos</WebSubtitle>
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
      </Header__Wrapper>
    </Header>
  );
}

export default header;
