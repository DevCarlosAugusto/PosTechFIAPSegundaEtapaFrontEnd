import { useRouter } from "next/router";
import Link from "next/link";

import { useAuth } from "../../contexts/AuthContext";

import {
  Header,
  Header__Wrapper,
  WebTitle,
  Nav,
  NavLink,
  WebSubtitle,
} from "./styles";

function HeaderComponent() {
  const { isAuthenticated, logout, user } = useAuth();
  const router = useRouter();

  const isProfessor = user?.user_type === "PROFESSOR";

  const MENU = isAuthenticated
    ? [
        { path: "/", text: "Postagens" },

        ...(isProfessor ? [{ path: "/posts/add", text: "Nova Postagem" }] : []),

        { action: "logout", text: "Sair" },
      ]
    : [
        { path: "/login", text: "Login" },
        { path: "/register", text: "Cadastro" },
      ];

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

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
          {MENU.map((item) =>
            item.action === "logout" ? (
              <NavLink $active={false}
                       as="button"
                       key="logout"
                       onClick={handleLogout}
                       type="button">
                {item.text}
              </NavLink>
            ) : (
              <NavLink $active={router.pathname === item.path}
                       href={item.path}
                       key={item.path}>
                {item.text}
              </NavLink>
            )
          )}
        </Nav>
      </Header__Wrapper>
    </Header>
  );
}

export default HeaderComponent;
