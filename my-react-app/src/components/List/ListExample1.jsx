import React, { useState } from "react";

// Componente funcional React
const ListExample1 = (props) => {
  // Estado que armazena a lista de tarefas
  const [task, setTask] = useState([]);

  // Estado para armazenar o valor digitado no input de nova tarefa
  const [InputTask, SetInputTask] = useState('');

  // Estado para armazenar o valor do novo título quando estiver alterando uma tarefa
  const [InputNewTile, SetInputNewTitle] = useState('');

  // Estado que controla qual índice da lista está em modo de edição
  const [editIndex, setEditIndex] = useState(null);

  // Função para adicionar uma nova tarefa à lista
  const handleAddTask = () => {
    if (InputTask === "") return; // Impede adicionar tarefa vazia
    setTask([...task, InputTask]); // Adiciona a nova tarefa ao array existente
    SetInputTask(''); // Limpa o campo de input
  };

  // Função para remover uma tarefa da lista pelo índice
  const handleDelTask = (indexToRemove) => {
    setTask(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
    // Se o item removido estiver em edição, fecha o modo de edição
    if (editIndex === indexToRemove) setEditIndex(null);
  };

  // Função para atualizar o conteúdo da tarefa
  const handleUpdateTask = (index) => {
    if (InputNewTile === "") return; // Impede atualizar com valor vazio
    const updatedTasks = [...task]; // Clona a lista de tarefas
    updatedTasks[index] = InputNewTile; // Substitui o item pelo novo título
    setTask(updatedTasks); // Atualiza o estado com a nova lista
    SetInputNewTitle(''); // Limpa o campo de input de alteração
    setEditIndex(null); // Fecha o modo de edição
  };

  return (
    <>
      {/* Exibe o título passado como prop */}
      <h1>{props.titulo}</h1>

      {/* Exibe qualquer conteúdo filho passado como prop */}
      <p>{props.children}</p>

      {/* Campo de input para digitar uma nova tarefa */}
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        value={InputTask}
        onChange={(e) => SetInputTask(e.target.value)} // Atualiza o estado conforme o usuário digita
      />
      <button onClick={handleAddTask}>Salvar</button> {/* Botão para adicionar nova tarefa */}

      {/* Lista de tarefas renderizada dinamicamente */}
      <ul>
        {task.map((taskItem, index) => (
          <li key={index}>
            {/* Exibe o título da tarefa */}
            {taskItem}

            {/* Botão para remover a tarefa */}
            <button onClick={() => handleDelTask(index)}>Remover</button>

            {/* Botão para ativar o modo de edição dessa tarefa */}
            <button onClick={() => setEditIndex(index)}>Alterar</button>

            {/* Se o índice atual estiver sendo editado, mostra o campo e botão de salvar alteração */}
            {editIndex === index && (
              <>
                <input
                  type="text"
                  placeholder="Digite a alteração do título"
                  value={InputNewTile}
                  onChange={(e) => SetInputNewTitle(e.target.value)} // Atualiza o novo valor
                />
                <button onClick={() => handleUpdateTask(index)}>
                  Salvar Alteração
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListExample1;
