//Permite compartilhar dados entre componentes sem precisar passar props manualmente em cada nível.
//Quando usar?Quando o mesmo dado precisa ser acessado em muitos níveis de componentes.

import React, { useContext } from 'react'

//components
import { UsuarioContext } from './UsuarioContext'


function HookUseContext() {
    // Pegando o valor do contexto
    const {usuario, setUsuario} = useContext(UsuarioContext);

  return (
    <div>
        <h2>Exemplo useContext</h2>
        <p>Nome do usuário: {usuario.nome}</p>
        <p>Status: {usuario.logado ? "Online" : "Offline"}</p>
        {/* "...usuario" copia todas as propriedades do objeto atual*/}    
        <button onClick={() => setUsuario({...usuario, logado: !usuario.logado})}>
            Alterar Status
        </button>
    </div>
  )
}

export default HookUseContext