# 📚 Visão Geral - EducaBlog

O EducaBlog é uma plataforma de publicações acadêmicas onde professores podem criar, editar e gerenciar posts, enquanto alunos têm acesso à leitura e navegação pelos conteúdos publicados.

Este repositório contém o Front-End da aplicação, desenvolvido em Next.js, seguindo os requisitos funcionais e técnicos da Fase 3 da Pós-Tech da FIAP.

## 🚀 Passos para rodar
```bash
    # Instalar dependências
    npm install
    
    # Rodar em ambiente de desenvolvimento
    npm run dev
```

## 🏗️ Arquitetura

* Next.js → Framework React com suporte a SSR e rotas dinâmicas.

* Axios → Cliente HTTP para comunicação com a API.

* Styled-components → Biblioteca para estilização com CSS-in-JS.

* React Hooks → Gerenciamento de estado e ciclo de vida.

## 🔗 Integração com a API

O frontend consome dados de uma API backend.

* Repositório backend: https://github.com/DevCarlosAugusto/PosTechFIAPSegundaEtapa

* Base URL: http://localhost:3000

* Exemplo de chamada:
```bash
    import api from "../services/api";

    const { data } = await api.get("/posts");
```
📌 Para detalhes dos endpoints, consulte o Swagger da API através do readme do repositório.

## Fluxos principais da aplicação

### 📝 Cadastro de usuário
- **Rota Frontend:** `/register`
- **Descrição:** Tela onde novos usuários (alunos) podem se registrar.  
- **Informações exibidas:**
  - Formulário com campos: nome, e-mail e senha.
  - Botão de envio que integra com a API (`POST /users/register`).

---

### 🔐 Login
- **Rota:** `/login`
- **Descrição:** Tela de autenticação para acesso às demais funcionalidades.  
- **Informações exibidas:**
  - Formulário com campos: e-mail e senha.
  - Botão de login que integra com a API (`POST /auth/login`).
  - Mensagens de erro em caso de credenciais inválidas.

---

### 📚 Listagem de posts
- **Rota:** `/posts`
- **Descrição:** Tela principal de navegação.  
- **Permissão por tipo de usuário:**: 
- * Professor (admin): Visualização, edição e exclusão de posts.
- * Aluno: Visualização de posts.
- **Informações exibidas:**
  - Lista de postagens criadas pelos professores.
  - Cada item mostra: título, autor, data de publicação e resumo do conteúdo.
  - Integração com a API (`GET /posts`).

---

### ➕ Nova postagem
- **Rota:** `/posts/novo`
- **Descrição:** Tela exclusiva para professores criarem novas publicações.  
- **Informações exibidas:**
  - Formulário com campos: título, autor e conteúdo. A data da publicação é gerada automaticamente.
  - Botão de salvar que integra com a API (`POST /posts`).

---

### ✏️ Edição de postagem
- **Rota:** `/posts/[id]/editar`
- **Descrição:** Tela para professores editarem uma postagem existente.  
- **Informações exibidas:**
  - Formulário pré-preenchido com dados da postagem.
  - Botão de atualizar que integra com a API (`PUT /posts/:id`).
