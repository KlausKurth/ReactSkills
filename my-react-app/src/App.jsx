import React from 'react';

//components 
import ListExample1 from './components/List/ListExample1'

const App = () => {

  return(
    <>
      {/* ListExample1: titulo é um valor passado pelo Props */}
      <ListExample1 titulo="Minha Lista de tarefas">
        {/* ListExample1: P e tudo de baixo do componente Test é considerado children */}
        <p>Tarefas do dia:</p>
      </ListExample1>
    </>
  );
};

export default App;
