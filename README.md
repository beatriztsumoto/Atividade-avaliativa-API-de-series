# Atividade Avaliativa: API de Séries

Este projeto é uma **API** desenvolvida para gerenciar informações de séries de TV. A arquitetura da aplicação segue o padrão **MVC (Model-View-Controller)**, o que organiza o código de forma clara e escalável, separando a lógica de negócio da interação com os dados e das rotas da API.

---

## Tecnologias

* **Node.js**: O ambiente de execução JavaScript no servidor.
* **Express.js**: Um framework web minimalista e flexível para construir a API.
* **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## Instalação

Para configurar e rodar a API em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/beatriztsumoto/Atividade-avaliativa-API-de-series.git](https://github.com/beatriztsumoto/Atividade-avaliativa-API-de-series.git)
    ```

2.  **Entre no diretório do projeto:**
    ```bash
    cd Atividade-avaliativa-API-de-series
    ```

3.  **Instale as dependências:**
    ```bash
    npm i express dotenv nodemon
    ```

---

## Como Usar

Para iniciar a API, execute o seguinte comando no terminal:

```bash
npm run dev
```

### Endpoints da API

A API oferece os seguintes endpoints para realizar operações **CRUD** (Create, Read, Update, Delete) em séries de TV:

* `GET /series`: Retorna uma lista com todas as séries.
* `GET /series/:id`: Retorna os detalhes de uma série específica usando seu ID.
* `POST /series`: Adiciona uma nova série à base de dados.
* `PUT /series/:id`: Atualiza as informações de uma série existente.
* `DELETE /series/:id`: Remove uma série da coleção.

---

### Estrutura do Projeto

A organização do código segue o padrão **MVC** para facilitar a manutenção e o desenvolvimento:

* **`src/`**: Pasta principal do código-fonte.
* **`controllers/`**: Contém a lógica de negócio da aplicação. Cada arquivo de controller lida com as requisições HTTP para uma entidade.
* **`models/`**: Define a estrutura dos dados.
* **`routes/`**: Define as rotas da API, direcionando cada requisição para o controller correspondente.
* **`server.js`**: O ponto de entrada da aplicação, onde o servidor Express é configurado e iniciado.