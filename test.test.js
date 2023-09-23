const funcs = require('./src/main.js');

test('As funções existem', () => {
  expect(funcs.adicionarTarefa).toBeDefined();
  expect(typeof funcs.adicionarTarefa).toBe("function");

  expect(funcs.editarTarefa).toBeDefined();
  expect(typeof funcs.editarTarefa).toBe("function");

  expect(funcs.excluirTarefa).toBeDefined();
  expect(typeof funcs.excluirTarefa).toBe("function");
});

test('Adicionando uma nova tarefa em um vetor vazio', () => {
  const v = []
  const novaTarefa = {
    titulo: "Tarefa 1",
    concluida: false,
    priodade: 0
  }
  v.push(novaTarefa)
  expect(funcs.adicionarTarefa([], novaTarefa)).toEqual(v)
});

test('Adicionando uma nova tarefa em um vetor previamente preenchido', () => {
  const v = [{
    titulo: "Tarefa 1",
    concluida: false,
    priodade: 0
  }]

  const novaTarefa = {
    titulo: "Tarefa 2",
    concluida: true,
    priodade: 1
  }

  const resultado = funcs.adicionarTarefa([...v], novaTarefa)
  v.push(novaTarefa)
  expect(resultado).toEqual(v)
});


test('Editando uma tarefa', () => {
  const v = [{
    titulo: "Tarefa 1",
    concluida: false,
    priodade: 0
  }]

  const novaTarefa = {
    titulo: "Tarefa 2",
    concluida: true,
    priodade: 1
  }

  const resultado = funcs.editarTarefa([...v], 0, novaTarefa)
  v[0] = {
    titulo: "Tarefa 2",
    concluida: true,
    priodade: 1
  }
  expect(resultado).toEqual(v)
});

test('Editando uma tarefa inexistente', () => {
  const v = []

  const novaTarefa = {
    titulo: "Tarefa 2",
    concluida: true,
    priodade: 1
  }

  const resultado = funcs.editarTarefa([], 1, novaTarefa)
  expect(resultado).toEqual(v)
});

test('Excluindo uma tarefa', () => {
  const v = [{
    titulo: "Tarefa 1",
    concluida: false,
    priodade: 0
  }]
  const resultado = funcs.excluirTarefa([...v], 0)
  v.splice(0)
  expect(resultado).toEqual(v)
});

test('Excluindo uma tarefa inexistente', () => {
  const v = [{
    titulo: "Tarefa 2",
    concluida: true,
    priodade: 1
  }]

  const resultado = funcs.editarTarefa([...v], 1)
  expect(resultado).toEqual(v)
});