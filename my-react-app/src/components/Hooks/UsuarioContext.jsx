//Exemplo utilizado em HookUseContext.jsx que segue o exemplo do hook useContext

import React, {createContext, useState} from 'react'

// 1. Criar o contexto
export const UsuarioContext = createContext(); // export nomeado

// 2. Criar o provider que vai disponibilizar os valores
const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState({nome: "klaus", logado: true}); //usuario é um único estado, só que ele armazena um objeto com duas propriedades: nome e logado

    return (
        // Dentro do UsuarioProvider, o children é injetado aqui
        //React substitui {children} por <HookUseContext />
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    );
};

export default UsuarioProvider;  // export default
 