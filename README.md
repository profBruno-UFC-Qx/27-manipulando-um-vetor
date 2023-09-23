# Descrição

Neste exercício, você irá criar funções para adicionar, editar e excluir tarefas em um vetor. 

Objetivo desse exercício é praticar a manipulação de vetores em JavaScript. 

**Todas as alterações devem ser feitas nos arquivos já existentes**

* src/main.js -> quando for necessário alterar JavaScript

## Instruções:

Cada tarefa é representada por um objeto que possui as seguintes propriedades como mostra o exemplo abaixo: título, concluida e prioridade.

Exemplos de tarefas:

```js
const tarefas = [
  { titulo: "Estudar JavaScript", concluida: false, prioridade: 2 };
  { titulo: "Estudar HTML e CSS", concluida: true, prioridade: 1 }
]
```


1. Implemente três funções:
  1. `adicionarTarefa`: Recebe o vetor onde a nova tarefa deve ser adicionada e um objeto de tarefa.
     - Deve retornar alterado com a nova tarefa no final do vetor
  2. `editarTarefa`: Recebe o vetor, o índice de uma tarefa existente e um objeto contendo os novos detalhes da tarefa.
     - Deve retornar o veter alterado
     - Caso índice informado não existir, o vetor inalterado deve ser retornado  
  3. `excluirTarefa`: Recebo o vetor e o índice no qual uma tarefa está armazenada e a remove do vetor.
     - Caso índice informado não existir, o vetor inalterado deve ser retornado
2. Teste cada função chamando-as e exibindo o resultado.

