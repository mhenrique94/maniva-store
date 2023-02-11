# Maniva Store!
## e-commerce made easy

<br>

![enter image description here](https://i.ibb.co/YQzJwmt/ezgif-5-e26150d6c4.gif)

<br>
Esse é um projeto desenvolvido em Vue.js + Django Rest Framework + PostgreSQL para o Busertech @ Buser.
Por se tratar de um projeto fullstack, ou seja, com operações de banckend e banco de dados, não há (ainda) um site estático para demonstração. Para conferir o projeto, pode baixá-lo em sua máquina e rodá-lo a partir das instruções baixo.
<br>

![enter image description here](https://i.ibb.co/tCJmHqp/ezgif-com-optimize.gif)
<br>

### Instruções

Para rodar o projeto localmente (use um terminal e git clone <este_repositorio>):

Use os seguintes comandos:
<br>
back-end:
```
cd maniva-store
docker compose up
```
front-end:
```
cd store_frontend
npm install
npm run serve
```

### Tecnologias e ferramentas utilizadas:
Front-end
- Vue (Framework Javascript)
- Vuetify (Biblioteca de componentes)
- Material Design Icons (Biblioteca de ícone)
- Axios (Pacote para chamadas API/comunicação com back-end)

Back-end
- Django (Framework python)
- Django Rest Framework (Pacote para construção de API REST)
- PostgreSQL (banco de dados relacional)

### Mais detalhes:

1. Cadastro de produtos, categorias, tamanhos, imagens, e possibilidade de expansão de cada uma das tabelas;
2. Possibilidade de filtrar produtos, incluir na lista de desejos, adicionar ao carrinho, etc;
3. Relação usuário x pedido x carrinho x lista de desejos já criada, pendente apenas formulário de cadastro no front-end;
4. Front-end acessível pelo endereço `https:/localhost:8080`;
5. Back-end acessível pelo endereço `https:/localhost:8000`;
6. Para gestão de conteúdo, acessar o endereço `https:/localhost:8000/admin`
7. Para requisições API REST, utilizar endpoint `https:/localhost:8000/api`

#### Banco de dados
A seguir relação entre tabelas do banco de dados:

![enter image description here](https://i.ibb.co/n6fhfR6/storedb-public.png)

### Em breve

1. Possibilidade de cadastro e login;
2. API mock (dados fictícios para prévia)

Demonstrando o projeto:
https://youtu.be/HMbSQdgX-bI

#### Se gostou deixe uma estrela :)
