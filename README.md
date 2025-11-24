

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

---
#### Página de Checkout (`Produtos.js`)

* Responsável pela etapa de **finalização de compra**, exibindo as informações do produto selecionado e o resumo do pedido.
* Permite ajustar a quantidade, calcular automaticamente o total e preencher os dados do cliente.
* Estrutura dividida em seções para **dados pessoais**, **endereço de entrega** e **forma de pagamento**.
* Inclui botão para retornar à página inicial (`Home`).
* Funções principais:
  * `adicionar()` — incrementa a quantidade de produtos
  * `remover()` — reduz a quantidade, respeitando o mínimo de 1 item.
  * `voltarParaHome()` — redireciona o usuário para a página principal.
  * `extrairValores(itens)` - Captura os dados do formulário, identifica o método de pagamento selecionado e abre o popup de confirmação.
  * `closePopup()` - Fecha o popup de confirmação de pagamento.
  * useEffect para gerar dinamicamente a imagem de Pix (QR Code) ou Boleto (código de barras) quando o pedido é finalizado.
  * Cálculo dinâmico do **subtotal** e **total** baseado na quantidade selecionada.
  * Utilização de **React Hooks (useState)** e **Next/Image** para performance e interatividade.

* Hooks:
  * quantidade → quantidade de produtos.
  * valorPopUp → controla se o popup está aberto.
  * pagamentoSelecionado → armazena o método de pagamento escolhido.
  * imagemPagamento → guarda a URL da imagem do QR Code ou Boleto.

* useEffect - > gerar a imagem de pagamento sempre que o popup é aberto. Dependência valorPopUp garante que o efeito só rode quando o usuário finaliza o pedido e o popup é exibido.

### Estilo e Responsividade (globals.css)

O CSS foi reestruturado para o padrão Next.js, garantindo:

* Layout fluido com *grid* e *flexbox*.
* Padrões de espaçamento e fontes consistentes.
* CSS modularizado com media queries para até **480px**, **768px** e **1024px**.

---

### Tecnologias Utilizadas

* Next.js (App Router + Client Components)
* React Hooks (useState, props controlados)
* CSS Modular (importação por componente)
* Imagens otimizadas via Next/Image
* Api para gerar boleto e Qr-Code

---

### Conclusão

Com o projeto GR Soluções Gráficas em Next.js aprendemos a construir um site completo e funcional utilizando Next.js, colocando em prática os conceitos estudados em aula. Conseguimos compreender melhor como dividir a aplicação em componentes reutilizáveis, gerenciar estados dinâmicos com hooks como useState e useEffect, e lidar com rotas dinâmicas para exibir conteúdos específicos conforme a interação do usuário. Também adquirimos experiência na integração de APIs externas, como para a geração de QR Codes e boletos, além de criar um layout responsivo e otimizado em React/Next.js. Vivenciamos todo o fluxo de um sistema de e-commerce, desde a exibição de produtos até o checkout, e desenvolvemos o site inteiro do zero, aumentando nossa capacidade de planejar, implementar e organizar um projeto web completo.
