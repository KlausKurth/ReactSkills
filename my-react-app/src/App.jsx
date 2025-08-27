//React
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components 
import ListExample1 from './components/List/ListExample1'
import NavBar from './components/NavBar';
import HookUseEffect from './components/Hooks/HookUseEffect';


const App = () => {

  return(
    <BrowserRouter>      
      <NavBar/>     
      <Routes>
        {/* Em ListExample1 titulo é um valor passado pelo Props */}
        <Route path="/listexemple1" element={<ListExample1 titulo="Minha lista de tarefas"/>}/>
        <Route path="/hookuseeffect" element={<HookUseEffect/>}/>
      </Routes>       
    </BrowserRouter>
  );
};

export default App;
