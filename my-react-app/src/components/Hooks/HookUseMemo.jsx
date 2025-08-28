// Memoriza valores derivados de cálculos pesados para evitar recomputações desnecessárias
// Quando usar? Quando cálculos complexos precisam ser otimizados e usados em renderizações.

import React, { useState, useMemo } from "react";

// useMemo  guarda o resultado do cálculo da função — neste caso, o fatorial já calculado de um numero.
//Para n = 0 ou n = 1, ele retorna 1 imediatamente esse é o valor do resultado fatorial que é guardado pelo useMemo

function HookUseMemo() {
  const [numero, setNumero] = useState(0);  
    
  const fatorial = useMemo(() => {
    console.log("Calculando fatorial para:", numero);
    const calc = (n) => (n <= 1 ? 1 : n * calc(n - 1));
    return calc(numero);
  }, [numero]); // só recalcula quando numero muda

  return (
    <div>
      <h2>Exemplo useMemo</h2>
      <p>Número: {numero}</p>
      <p>Fatorial: {fatorial}</p>

      <button onClick={() => setNumero(numero + 1)}>Incrementar Número</button>      
    </div>
  );
}

export default HookUseMemo;