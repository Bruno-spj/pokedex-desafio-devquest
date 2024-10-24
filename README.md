# Pokédex App

## Descrição

Este projeto é uma aplicação de busca de Pokémons que consome a [PokeAPI](https://pokeapi.co/). O propósito da aplicação é permitir que o usuário visualize uma lista de Pokémons e carregue mais Pokémons ao clicar em um botão de "Carregar mais".

## Funcionalidades

- Exibição inicial de uma lista com 10 Pokémons.
- Carregamento de mais 30 Pokémons ao clicar no botão "Carregar mais".
- Visualização dos dados detalhados de cada Pokémon (nome, imagem, etc.).
- Estilização personalizada utilizando `styled-components` para adaptar o tema da aplicação.

## Ferramentas Utilizadas

- **React.js**: Biblioteca JavaScript para criação de interfaces de usuário. Escolhida por sua modularidade e facilidade no gerenciamento de componentes.
- **Styled-components**: Biblioteca para aplicar estilos em componentes React utilizando CSS-in-JS. Foi escolhida para facilitar a estilização dinâmica e baseada em temas.
- **Axios**: Biblioteca para realizar requisições HTTP, escolhida por sua simplicidade e maior controle sobre o tratamento de requisições em comparação com `fetch`.
- **PokeAPI**: API utilizada para fornecer dados dos Pokémons, como nome, habilidades e sprites. Escolhida por ser uma API pública e fácil de usar.

## Decisões Adotadas

- **Modularização dos componentes**: Os componentes da aplicação foram divididos em arquivos separados para manter o código mais organizado e escalável. Isso facilita a manutenção e possíveis expansões futuras.
- **Uso de `styled-components`**: A decisão de utilizar `styled-components` foi feita para permitir a aplicação de temas e manter a coesão dos estilos em todos os componentes de forma mais eficiente.
- **Paginação de Pokémons**: O carregamento de Pokémons foi limitado inicialmente a 10 para otimizar o tempo de resposta e evitar sobrecarga de dados no carregamento inicial.
  
## Passo a Passo para Rodar o Projeto

### Pré-requisitos:

- Node.js instalado (versão >= 14).
- NPM ou Yarn instalado.

### Passos:

1. Clone este repositório:
   ```bash
   git clone https://github.com/Bruno-spj/pokedex-desafio-devquest.git

2. Navegue até a pasta do projeto:
   ```bash
   cd nome-do-projeto

3. Instale as dependências:
  ```bash
npm install

4. Inicie o servidor de desenvolvimento:
  ```bash
npm run dev

5. Abra o navegador e acesse:
  ```bash
http://localhost:3000


