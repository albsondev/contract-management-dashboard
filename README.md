# 📊 Dashboard de Gerenciamento de Contratos

## 📌 Visão Geral
Este projeto é um **dashboard interativo** para gerenciar contratos, fornecendo métricas, gráficos e uma tabela detalhada. Ele permite **visualizar, filtrar e analisar contratos**, ajudando na **tomada de decisões** sobre contratos ativos, expirados e pendentes de renovação.

🔗 **Demonstração:** _(Adicionar link do deploy, se disponível)_  
📂 **Repositório:** _(Adicionar link do GitHub/GitLab)_

---

## 🚀 Tecnologias Utilizadas
✅ **React.js** – Biblioteca principal para desenvolvimento do frontend  
✅ **TypeScript** – Tipagem estática para maior segurança do código  
✅ **React Router** – Gerenciamento de rotas  
✅ **Tailwind CSS** – Estilização moderna e responsiva  
✅ **Chart.js** – Geração de gráficos interativos  
✅ **React Data Table Component** – Exibição da tabela de contratos  
✅ **LocalStorage** – Persistência dos dados localmente  

---

## 📂 Estrutura do Projeto
📦 `src/`  
┣ 📂 `components/` – Componentes reutilizáveis (Tabelas, Charts, Filtros, Modal)  
┣ 📂 `pages/` – Páginas principais da aplicação  
┣ 📂 `assets/` – Arquivos JSON mockados  
┣ 📂 `utils/` – Funções utilitárias (ex.: formatação de datas)  
┣ 📄 `App.tsx` – Configuração principal da aplicação  
┣ 📄 `main.tsx` – Ponto de entrada do projeto  
┗ 📄 `README.md` – Documentação  

---

## 🔧 Instalação e Configuração

### 🛠️ **Pré-requisitos**
- **Node.js** instalado (versão 16+ recomendada)
- **Gerenciador de pacotes**: `npm` ou `yarn`

### 📥 **Passo a Passo**
1️⃣ Clone o repositório:
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
2️⃣ Instale as dependências:

```sh
yarn install  # ou npm install
```

3️⃣ Inicie o projeto:

```sh
yarn dev  # ou npm run dev
```

4️⃣ Acesse no navegador:

```sh
👉 http://localhost:5173/ (ou outra porta definida)
```


## 🎯 Funcionalidades Implementadas

### 📌 Dashboard Principal

✅ Resumo em Cards – Total de contratos, contratos ativos, próximos ao vencimento e valor total

✅ Tabela Interativa – Filtros, ordenação e paginação de contratos

✅ Gráficos Dinâmicos – Distribuição de contratos por status e tipo


### 📊 Gráficos

✅ Expiração de Contratos – Exibe a quantidade de contratos vencendo nos próximos meses

✅ Distribuição por Status – Mostra contratos ativos, expirados e pendentes de renovação

✅ Distribuição por Tipo – Agrupa contratos por tipo (Serviços, Fornecimento, etc.)

✅ Filtros Dinâmicos – Intervalo de datas e status


### 📑 Tabela de Contratos

✅ Exibição de Detalhes – Modal com informações do contrato ao clicar na tabela

✅ Filtros – Permite filtrar contratos por status, tipo e data

✅ Paginação – Suporte para grandes volumes de dados


### ➕ Cadastro de Contratos

✅ Formulário para Adicionar Contratos

✅ Persistência com LocalStorage

✅ Redirecionamento automático para o Dashboard

<hr>

## 📌 Decisões Técnicas e Justificativas

### 📌 Framework e Bibliotecas

- React.js + TypeScript: Escalabilidade e segurança com tipagem estática
- Tailwind CSS: Facilidade na estilização e responsividade
- React Router: Gerenciamento eficiente de páginas
- Chart.js: Visualizações interativas
- React Data Table Component: Gerenciamento de tabelas com filtros avançados


### 📌 Gerenciamento de Estado

Foi utilizado useState e useEffect para controle de estados e sincronização dos contratos.

📌 Motivo: O escopo do projeto não exige Redux, já que os dados são armazenados localmente.

<hr>


## 🧪 Testes

O projeto atualmente não inclui testes automatizados, mas recomenda-se o uso de:

- Jest + React Testing Library – Testes unitários para componentes
- Cypress – Testes de integração (fluxo de usuário)

<hr>


## 🏆 Desafios e Soluções


### 1️⃣ Persistência dos Contratos

    🔴 Problema: Após adicionar um contrato, ele não era salvo corretamente.

    ✅ Solução: Implementação de LocalStorage para armazenar contratos e exibir corretamente no dashboard.

### 2️⃣ Filtros nos Gráficos

    🔴 Problema: Ao alterar um filtro, os gráficos não eram atualizados imediatamente.

    ✅ Solução: Uso do useEffect para monitorar mudanças no estado e atualizar os gráficos dinamicamente.

### 3️⃣ Exibição do Status no Modal

    🔴 Problema: Status aparecia como texto simples.

    ✅ Solução: Implementação de badges coloridas para melhor visualização.

  <hr>

  ## 🏗️ Melhorias Futuras

🔹 API Real – Integrar com backend para buscar contratos dinamicamente

🔹 Testes Automatizados – Implementar Jest e Cypress

🔹 Exportação de Dados – Permitir exportação dos contratos para CSV

<hr>

## 📌 Como a IA foi Utilizada no Desenvolvimento?

Para acelerar o desenvolvimento, foram utilizados modelos de IA para:

    - Auxílio na estruturação do projeto e boas práticas de código
    - Correções de bugs e melhorias de performance
    - Geração de trechos de código repetitivos e otimizações
    - No entanto, toda a lógica e estrutura do sistema foram validadas e refinadas manualmente.


  <hr>

  

