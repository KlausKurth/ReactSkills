//Similar ao Redux. Um state é controlado por um reducer (função que decide como atualizar baseado em action)
// Quando usar? Quando o estado é mais complexo que useState, especialmente quando envolve múltiplas condições.

import React, {useReducer} from 'react'

// Função que decide como mudar o estado
function contadorReducer(state, action){
    switch (action.type) {
        case "incrementar":
            return {count: state.count + 1};
        case "decrementar":
            return {count: state.count -1};
        default:
            return state;        
    }
}

function HookUseReducer() {
    const [state, dispath] = useReducer(contadorReducer, { count: 0 });

  return (
    <div>
        <h2>Exemplo useReducer</h2>
        <p>Contador: {state.count}</p>
        <button onClick={() => dispath({type: "incrementar"})}>+</button>
        <button onClick={() => dispath({type: "decrementar"})}>-</button>
    </div>
  )
}

export default HookUseReducer