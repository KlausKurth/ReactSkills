// useRef cria uma referência mutável que não causa re-renderização quando alterada.
// Quando usar? Quando precisar guardar valores entre renderizações sem re-renderizar, ou referenciar elementos do DOM.


import React, {useRef, useState} from 'react'

function HookUseRef() {
    const contadorRef = useRef(0); // ref não dispara renderização
    const [renderCount, setRenderCount] = useState(0);

    const incrementar = () => {
        contadorRef.current += 1;
        console.log("Valor atual do contadorRef:", contadorRef.current)

    };


  return (
    <div>
        <h2>Exemplo useRef</h2>
        <p>Renderização: {renderCount}</p>
        <button onClick={() => setRenderCount(renderCount + 1)}> Forçar Render</button>
        <button onClick={incrementar}>Incrementar ref</button>
    </div>
  )
}

export default HookUseRef