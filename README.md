O EducaBlog é uma plataforma de publicações acadêmicas onde professores podem criar, editar e gerenciar posts, enquanto alunos têm acesso à leitura e navegação pelos conteúdos publicados.

Este repositório contém o Front-End da aplicação, desenvolvido em React + Vite, seguindo os requisitos funcionais e técnicos da Fase 2 da Pós-Tech da FIAP.



**Tecnologias utilizadas**

React (componentes funcionais e hooks)

Vite (ambiente de build / dev server)

Styled Components (estilização moderna e componentizada)

React Router DOM (navegação entre páginas)

Integração com API REST (backend desenvolvido na fase anterior)


**Página principal — Lista de Posts**

Exibe uma lista de todos os posts cadastrados

Cada card contém:

Título

Autor

Data de publicação

Resumo do conteúdo

Campo de busca para filtrar posts por:

título

palavra chave

autor

Responsiva e organizada em layout de cards

Teste local disponível via MOCK_MODE



**Página de leitura do post**

Exibe o conteúdo completo de um post selecionado

Mostra:

Título

Autor

Data

Conteúdo na íntegra



**Página de criação de postagens**

Formulário para professores publicarem novos posts

Campos:

Título

Autor

Conteúdo

Data da postagem é gerada automaticamente

Integração com backend via createPost() *não lembro se temos isso no nosso back*

Versão mockada disponível para testes sem backend


**Página de edição de postagens**

Permite que professores editem posts existentes

Carrega automaticamente os dados atuais do post

Reutiliza o mesmo componente PostForm

Integração com backend via updatePost()

Também possui modo demonstração com dados mockados (MOCK_MODE)


**Instalação e execução**

npm install
mpm run dev