﻿# Projeto-Casal

# README - Nadzieja Insight

## Descrição

Este projeto é uma aplicação web chamada "Nadzieja Insight", que inclui uma interface para visualização de gráficos, gerenciamento de usuários e monitoramento de desempenho. A página é estruturada com uma barra lateral de navegação, uma área principal de conteúdo que exibe gráficos e indicadores, e uma tabela de usuários.

## Estrutura do Projeto

### 1. Estrutura do Arquivo HTML

O arquivo HTML principal define a estrutura da página e é dividido nas seguintes seções:

- **Cabeçalho (`<header>`)**
  - Contém o logo da aplicação e um botão para abrir/fechar a barra lateral.
  
- **Corpo Principal (`<main>`)**
  - **Barra Lateral de Navegação (`<nav id="sidebar">`)**
    - Inclui itens de navegação e um botão para ir ao meu github.
  
  - **Conteúdo Principal (`<div id="main-content">`)**
    - **Gráficos e Indicadores (`<div id="content-chart">`)**
      - Contém gráficos exibidos através de `<canvas>`.
      
    - **Tabela de Usuários (`<div id="div-user-table">`)**
      - Exibe uma tabela com funcionalidades de filtro e ordenação. Inclui uma seção para adicionar novos usuários.
      
    - **Indicadores de Desempenho (`<div id="performance">`)**
      - Mostra métricas de desempenho da aplicação.

### 2. Arquivos CSS

Os arquivos CSS fornecem o estilo para os diferentes componentes da página:

- **`header.css`**
  - Estiliza o cabeçalho, incluindo o logo e o botão de menu.

- **`sidebar.css`**
  - Define o estilo da barra lateral, incluindo a lista de itens e o botão de logout.

- **`main.css`**
  - Estiliza o conteúdo principal, incluindo gráficos, tabela de usuários e indicadores de desempenho.

- **`responsive.css`**
  - Fornece regras de estilo para garantir que a página seja responsiva e se adapte a diferentes tamanhos de tela, melhorando a usabilidade em dispositivos móveis e desktops.

### 3. Scripts JavaScript

Os scripts JavaScript adicionam funcionalidades interativas e dinâmicas à página:

- **`script.js`**
  - Script principal que pode incluir funcionalidades gerais e iniciais da aplicação.

- **`addUser.js`**
  - Gerencia a adição de novos usuários à tabela. Inclui lógica para validar e adicionar informações de usuário.
  - Atualizando os gráficos e métricas.

- **`openSideBar.js`**
  - Controla a abertura e o fechamento da barra lateral de navegação.

- **`dataChart.js`**
  - Fornece dados e configurações para os gráficos exibidos na página.

- **`createChart.js`**
  - Cria e atualiza os gráficos usando a biblioteca Chart.js.

- **`filters.js`**
  - Implementa funcionalidades de filtro para a tabela de usuários, permitindo busca por nome, email ou data.

- **`fillTable&Indicator.js`**
  - Preenche a tabela de usuários e atualiza os indicadores de desempenho com dados dinâmicos.

## Funcionamento

1. **Cabeçalho**: O cabeçalho inclui um botão para abrir e fechar a barra lateral. O logo é exibido na parte superior esquerda.

2. **Barra Lateral**: Contém links para diferentes seções da página. Cada item é ativado quando clicado, e a classe `active` é aplicada ao item selecionado.

3. **Conteúdo Principal**:
   - **Gráficos**: Exibidos em `<canvas>`, eles são gerenciados pelos scripts `dataChart.js` e `createChart.js`.
   - **Tabela de Usuários**: Permite ordenação e filtragem dos dados. Usuários podem ser adicionados.
   - **Indicadores de Desempenho**: Mostra métricas como tempo médio de resposta, taxa de erro, usuários ativos e registrados.

4. **Scripts**: Carregados de forma assíncrona (`defer`), garantindo que o HTML seja carregado antes dos scripts serem executados. Cada script é responsável por uma parte específica da funcionalidade da aplicação.

## Como Usar

1. **Instalação**: Certifique-se de que todos os arquivos CSS e JavaScript estão corretamente vinculados e acessíveis a partir do arquivo HTML.

2. **Testes**:
   - Teste a responsividade da página em diferentes dispositivos e tamanhos de tela.
   - Verifique a funcionalidade dos gráficos, tabelas e indicadores.

---

Este README fornece uma visão geral abrangente da página e suas funcionalidades. Ele deve servir como um guia útil para desenvolvedores que trabalham com este projeto.
