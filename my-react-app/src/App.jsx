//React
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components 
import ListExample1 from './components/List/ListExample1'
import NavBar from './components/NavBar';
import HookUseEffect from './components/Hooks/HookUseEffect';
import HookUseStateInputs from './components/Hooks/HookUseStateInputs';
import HookUseReducer from './components/Hooks/HookUseReducer';
import HookUseContext from './components/Hooks/HookUseContext';

//context
import UsuarioProvider from './components/Hooks/UsuarioContext'; //import nomeado porque só pode haver um default por arquivo
import HookUseRef from './components/Hooks/HookUseRef';


const App = () => {

  return(
    <BrowserRouter>      
      <NavBar/>
      {/*Aqui o Provider envolve as rotas que vão usar o contexto */}
      <UsuarioProvider>
        {/*Routes só aceita <Route> como filhos diretos.*/}     
        <Routes>
          {/* Em ListExample1 titulo é um valor passado pelo Props */}
          <Route path="/listexemple1" element={<ListExample1 titulo="Minha lista de tarefas"/>}/>
          <Route path="/hookuseeffect" element={<HookUseEffect/>}/>
          <Route path="/hookusestateinputs" element={<HookUseStateInputs/>}/>
          <Route path="/hookusereducer" element={<HookUseReducer/>}/>
          {/*React pega <HookUseContext /> e passa como children para o componente UsuarioProvider */}       
          <Route path="/hookusecontext" element={<HookUseContext/>}/>
          <Route path="/hookuseref" element={<HookUseRef/>}/>        
        </Routes>
      </UsuarioProvider>       
    </BrowserRouter>
  );
};

export default App;
