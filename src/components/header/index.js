import { useRouter } from 'next/router';
import Link from 'next/link';

import { useAuth } from '../../contexts/AuthContext';

import {
  Header,
  Header__Wrapper,
  WebTitle,
  Nav, NavLink,
  WebSubtitle,
} from './styles';

function header() {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const MENU = isAuthenticated ? [{ path: '/', text: 'Postagens'}, { path: '/posts/novo', text: 'Nova Postagem'}] : [{ path: '/login', text: 'Login'}, { path: '/register', text: 'Cadastro'}];

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
          {
            MENU.map(({ path, text }) => (
              <NavLink $active={router.pathname === path} href={path} key={path}>{text}</NavLink>
            ))
          }
        </Nav>
      </Header__Wrapper>
    </Header>
  );
}

export default header;
