## Primeira pagina

- Ter um botão de novo churrasco
- Quando clicar no botão deve mandar para uma nova tela
- Ter uma tabela (Data, Quantidade de Pessoas, Carne, Pão de alho, Carvão,Refri, Cerveja  e uma coluna de Ação)
- Na coluna ação teremos 2 botões 
- Um botão de Editar (Quando clicado vai para tela de editar)
- Um botão de excluir (Quando clicado deve remover a linha)

## Pagina de Criar um churrasco

- Um campo para indicar a quantidade de homens
- Um campo para indicar a quantidade de mulheres
- Um campo para indicar a quantidade de crianças
- Um botão de criar
- Quando clicar no botão deve fazer o calculo: 
  | Por Pessoa: | Carne   | Pão de alho | Carvão | Cerveja             |
  | ----------- | ------- | ----------- | ------ | ------------------- |
  | **homem**   | 0,4 KG  | 2           | 1 KG   | 3 garrafas de 600ml |
  | **mulher**  | 0,32 KG | 2           | 1 KG   | 3 garrafas de 600ml |
  | **criança** | 0,20 KG | 1           | 1 KG   |                     |
- **Obs:** Refrigerante - 1 garrafa de 2L a cada 5 pessoas
- Assim que fizer o calculo deve chamar o endpoint para criar e salvar no json as informações e voltar na tabela.

## Pagina de Editar um churrasco

- Um campo para indicar a quantidade de homens
- Um campo para indicar a quantidade de mulheres
- Um campo para indicar a quantidade de crianças
- Um botão de Salvar 
- Quando clicado deve refazer os cálculos, depois salvar usando o endpoint e voltar para tela inicial

## Critérios

- A calculadora deve funcionar corretamente e atender aos requisitos especificados;
- O código deve fazer uso de seletores e métodos para manipulação do DOM;
- O código deve fazer uso de adição e remoção de classes e estilização através do Javascript;
- O código deve fazer uso de eventos ligados aos elementos da página;
- O código deve fazer uso da API JSON (json-server)
- O código deve fazer uso de chamadas assíncronas e seus derivados.

## 👷 Autores
- <a href='https://github.com/Raphaell-Alves'>Raphael Moura</a>
- <a href='https://github.com/LucasDev9645'>Lucas Freitas</a>
- <a href='https://github.com/dalanmarinho'>Dalan Marinho</a>
- <a href='https://github.com/Rvssa'>Larissa Vasconcelos</a>
- <a href='https://github.com/BR-Darkness'>Vitor Galindo</a>
- <a href='https://github.com/Profleide '>Leidiane Silva</a>

---
>  **Json-server:** https://www.npmjs.com/package/json-server