//Gera IDs estáveis e únicos em múltiplas renderizações.
// Quando usar? Quando precisar de IDs únicos para rótulos, inputs ou elementos acessíveis (aria).


import React, {useId} from 'react'

function HookUseId() {
    // Cada renderização mantém o mesmo id único
    const idNome = useId();
    const idEmail = useId();

  return (
    <div>
        <h2>Exemplo useId</h2>
        <label htmlFor={idNome}>Nome:</label>
        <input id={idNome} type="text"/>

        <br/>

        <label htmlFor={idEmail}>Email:</label>
        <input id={idEmail} type="email" />
    </div>
  );
}

export default HookUseId