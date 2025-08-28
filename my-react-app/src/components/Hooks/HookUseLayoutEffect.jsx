// Similar ao useEffect, mas executa ANTES da renderização aparecer na tela.
// Quando você precisa medir ou modificar o layout antes da tela ser exibida ao usuário.

import React, { useRef, useLayoutEffect } from 'react'

function HookUseLayoutEffect() {
    const divRef = useRef();

    useLayoutEffect(() => {
        divRef.current.style.backgroundColor = "Yellow"
    }, []);

  return (
    <div ref={divRef}>
        <h2>Exemplo useLayoutEffect</h2>
        <p>Cor alterada antes de renderizar para o usuário</p>
    </div>
  );
}

export default HookUseLayoutEffect
