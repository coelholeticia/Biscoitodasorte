# 🥠 Biscoito da Sorte com IA

Este projeto é uma aplicação web que simula um biscoito da sorte virtual, utilizando Inteligência Artificial para gerar mensagens dinâmicas, criativas e personalizadas.
O objetivo do projeto é praticar a integração entre Front-end, Back-end em Node.js e a API da OpenAI, além de servir como item de portfólio.

#### ✨ Funcionalidades

Geração de mensagens de biscoito da sorte usando IA

Backend em Node.js com Express

Integração com a API da OpenAI

Comunicação entre Front-end e Back-end via requisição HTTP

Estrutura simples e organizada para facilitar manutenção e evolução

#### 🛠️ Tecnologias Utilizadas

- [✓] Node.js

- [✓] Express

- [✓] JavaScript

- [✓] API OpenAI

- [✓] HTML / CSS / JavaScript (Front-end)

- [✓] dotenv (para variáveis de ambiente)
```
📁 Estrutura do Projeto
backend-biscoito/
│
├── node_modules/
├── .env
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
#### 🚀 Como Executar o Projeto Localmente
1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2️⃣ Acesse a pasta do projeto
cd backend-biscoito

3️⃣ Instale as dependências
npm install

4️⃣ Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto e adicione:

OPENAI_API_KEY= SUA_CHAVE_DA_OPENAI


### ⚠️ Nunca suba sua chave da OpenAI para o GitHub.

5️⃣ Inicie o servidor
node index.js


Ou, se estiver usando nodemon:

nodemon index.js


O servidor estará rodando em:

http://localhost:3000

#### 🍪 Exemplo de Uso

Ao acessar a aplicação ou clicar no botão “Abrir Biscoito”, o sistema faz uma requisição ao backend, que consulta a IA da OpenAI e retorna uma mensagem de sorte única para o usuário.

🎯 Objetivo do Projeto

Praticar integração com APIs externas

Aprender consumo da OpenAI API

Reforçar conceitos de backend com Node.js

Criar um projeto simples, criativo e aplicável ao portfólio

#### 🚧 Melhorias Futuras

Adicionar temas (motivacional, espiritual, humor, sarcasmo)

Criar histórico de mensagens

Deploy da aplicação (Vercel / Render / Railway)

Interface mais interativa

Internacionalização (PT / EN)

👩‍💻 Autora

Letícia Paiva Coelho
Estudante de Análise e Desenvolvimento de Sistemas
Foco em Front-end, Cloud e Inteligência Artificial
