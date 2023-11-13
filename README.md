# Desafio MKS

Esta aplicação é uma loja online desenvolvida como parte de um desafio técnico. O objetivo principal é consumir uma API REST de produtos para exibir a lista de produtos da loja e gerenciar um carrinho de compras.

## Funcionalidades

- **Loja**: Apresenta uma lista de produtos obtidos da API, com um shimmer/skeleton implementado durante o carregamento dos dados.
- **Carrinho**: Permite aos usuários adicionar produtos, ajustar quantidades e visualizar o total.
- **Modo Escuro (Dark Mode)**: Oferece suporte para um tema escuro, melhorando a acessibilidade e a experiência do usuário durante o uso noturno ou em ambientes com baixa luminosidade.

## Tecnologias Utilizadas

- **Next.js 13**: Framework baseado em React para uma construção otimizada e eficiente.
- **React Query**: Gerenciamento eficiente de estados e cache de dados assíncronos.
- **Styled-Components**: Uso de CSS-in-JS para estilos dinâmicos e reutilizáveis.
- **Jest e Testing Library**: Para testes unitários confiáveis e manutenção de um código limpo e funcional.
- **Context API**: Gerenciamento de estado global para o carrinho de compras.
- **React Toastify**: Para notificações interativas e feedback do usuário.
- **TypeScript**: Linguagem de programação para adicionar tipagem estática ao JavaScript, aumentando a legibilidade e confiabilidade do código.

## Estrutura da Aplicação

- `ProductList`: Componente que gerencia a exibição da lista de produtos.
- `ProductCard`: Componente para exibir informações individuais do produto.
- `ProductSkeleton`: Componente de UI para estado de carregamento.
- `CartContext`: Contexto para gerenciamento do estado do carrinho.
- `CartProvider`: Provider do contexto para encapsular a aplicação.
- `useCart`: Hook personalizado para acessar e manipular o estado do carrinho.

## Executando o Projeto

Para rodar o projeto localmente, siga os seguintes passos:

1. Clone o repositório.
2. Instale as dependências com `npm install` ou `yarn`.
3. Inicie o servidor de desenvolvimento com `npm run dev` ou `yarn dev`.
4. Acesse `http://localhost:3000` no seu navegador.

## Testes

Execute os testes unitários com `npm test` ou `yarn test`. A cobertura de testes inclui componentes chave e lógica de negócios.

## Deployment

A aplicação está hospedada na Vercel e pode ser acessada através deste link: [Desafio MKS na Vercel](https://desafio-mbghyavqo-cinthia3301andrad.vercel.app/). Sinta-se à vontade para visitar e explorar a versão online da loja.
