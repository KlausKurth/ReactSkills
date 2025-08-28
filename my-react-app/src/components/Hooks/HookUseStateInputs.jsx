// useState em Inputs é usado para controlar inputs (controlled components). O valor exibido no input vem do estado, e o onChange atualiza esse estado.
//Quando usar? Sempre que precisar ler valores de formulários e refletir na tela.

//useState é assíncrono. Atualizações encadeadas não usam o novo valor imediatamente. então se colocar uma const useState em baixo da outra ela não acumula valor.

//Sempre criamos uma nova versão do objeto ou valor, garantindo que o React detecte a mudança e re-renderize o componente.

import React, { useState } from 'react'


function HookUseStateInputs() {
    const [email, setEmail] = useState("");

  return (
    <div>
        <h2>Exemplo useState em Inputs</h2>
        {/* O valor do input é controlado pela estado*/}
        <input 
            type="email"
            placeholder="Digite seu e-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} // atualiza o estado        
        />
        <p>Email digitado: {email}</p>
    </div>
  );
}

export default HookUseStateInputs
    