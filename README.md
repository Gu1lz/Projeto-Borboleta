

Este repositório representa a versão em Next.js do projeto GR Soluções Gráficas, uma iniciativa desenvolvida com o propósito de contribuir com a comunidade, apoiando a empresa GR Gráfica na criação de um site moderno, funcional e acessível.

O objetivo principal deste projeto é oferecer uma experiência de navegação fluida, responsiva e interativa, unindo a estética visual de um site institucional com a praticidade de um sistema de orçamentos e checkout totalmente funcional. Além disso, o projeto serve como exemplo técnico e didático para estudantes e desenvolvedores que desejam compreender na prática a estruturação de um site completo em Next.js.

link do git: https://github.com/Gu1lz/Projeto-Borboleta/tree/main

---

### Estrutura do Projeto

#### 1. RootLayout (globals.css e layout.js)

Define a estrutura global da aplicação, configurando a fonte, estilos base e o título da página:
**“GR Soluções Gráficas - 25 Anos de Experiência”**.
O layout mantém o padrão de cores, tipografia e espaçamento, garantindo uniformidade em todas as páginas.

#### 2. Página Principal (Home.js)

A página principal foi reescrita utilizando componentes modulares do Next.js, permitindo manutenção e escalabilidade.
Ela é composta por:

* **Header:** Barra de navegação construída com a tag `<nav>`, contendo os links para *Comunicação Visual*, *Copiadora*, *Impressão Digital*, *Sobre Nós* e *Contato*.
Além disso, um botão para fazer Orçamento

* **Destaque:** Primeira seção do site, apresentando o banner principal e um botão para solicitar orçamento, voltado principalmente ao público corporativo (B2B).

* **Serviços:** Área dedicada às soluções gráficas oferecidas para empresas, com ícones organizados em uma *grade de serviços* para visualização clara e moderna.

* **Produtos:** Seção voltada ao público final (B2C), com *cartões de produtos* exibidos dinamicamente.
  Cada item inclui a opção **“Adicionar ao Carrinho”**, integrando-se ao componente de **Checkout**.

* **Sobre:** Apresenta a trajetória da gráfica e seus valores.
  Nesta seção, o conteúdo foi estruturado em containers centralizados, com destaque para a tipografia e espaçamento equilibrado.

* **Footer:** Rodapé com links úteis de contato e acesso rápido às demais seções.

---

### Funcionalidades Dinâmicas (React/Next.js)

#### Menu de Orçamento (`MenuOrcamento.js`)

* Exibe um formulário para envio de orçamento sem recarregar a página.
* Contém campos de nome, e-mail, empresa, serviço e mensagem.
* Após envio, exibe uma mensagem de sucesso e fecha automaticamente após alguns segundos.
* Gerenciado pelos hooks `useState` e callbacks `abrirMenu` / `fecharMenu`.

Claro! Aqui está o trecho prontinho para você **copiar e colar no seu README.md** 👇

---
#### Página de Checkout (`Produtos.js`)

* Responsável pela etapa de **finalização de compra**, exibindo as informações do produto selecionado e o resumo do pedido.
* Permite ajustar a quantidade, calcular automaticamente o total e preencher os dados do cliente.
* Estrutura dividida em seções para **dados pessoais**, **endereço de entrega** e **forma de pagamento**.
* Inclui botão para retornar à página inicial (`Home`).
* Funções principais:

  * `adicionar()` — incrementa a quantidade de produtos.
  * `remover()` — reduz a quantidade, respeitando o mínimo de 1 item.
  * `voltarParaHome()` — redireciona o usuário para a página principal.
  * Cálculo dinâmico do **subtotal** e **total** baseado na quantidade selecionada.
  * Utilização de **React Hooks (useState)** e **Next/Image** para performance e interatividade.


#### Header Responsivo

* CSS modularizado com media queries para até **480px**, **768px** e **1024px**.

---

### Estilo e Responsividade (globals.css)

O CSS foi reestruturado para o padrão Next.js, garantindo:

* Layout fluido com *grid* e *flexbox*.
* Padrões de espaçamento e fontes consistentes.
* Media queries que ajustam tamanhos de fonte, espaçamento e exibição de elementos conforme a tela

---

### Tecnologias Utilizadas

* Next.js (App Router + Client Components)
* React Hooks (useState, props controlados)
* CSS Modular (importação por componente)
* Imagens otimizadas via Next/Image
* JavaScript funcional e reutilizável
* Responsividade total (mobile-first)

---

### Conclusão

O projeto **GR Soluções Gráficas em Next.js** representa a modernização completa de um site estático para uma aplicação web dinâmica e responsiva.
Ele alia **design profissional, usabilidade aprimorada e performance otimizada**, mantendo a identidade visual da gráfica e ampliando suas possibilidades digitais.
Essa nova versão é ideal para atender tanto empresas quanto consumidores, oferecendo uma experiência prática, fluida e moderna em qualquer dispositivo.
