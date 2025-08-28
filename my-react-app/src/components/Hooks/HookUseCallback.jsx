//Memoriza funções para que não sejam recriadas a cada renderização.

/*Quando você passa funções para componentes filhos memorizados (React.memo)
Quando você passa funções para dependências de outros hooks (useEffect, useMemo)
Quando você quer evitar recriar funções pesadas toda renderização*/


import React, {useState, useCallback, useEffect} from 'react'

function HookUseCallback() {
    const [contador, setContador] = useState(0);

    // Não muda de referência entre renders, a não ser que suas dependências mudem (que aqui é [], nunca muda).
    const incrementar = useCallback(() => {
        setContador((c) => c + 1);
        console.log("Função incrementar executada")
    }, []);

    // Log apenaas quando o callback é criado/mudado
    useEffect(() => {
        console.log("função incrementar foi criada", incrementar);
    }, [incrementar]);



  return (
    <div>
        <h2>Exemplo useCallback</h2>
        <p>Contador: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default HookUseCallback