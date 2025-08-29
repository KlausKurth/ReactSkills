// Deixa um valor “pesado” atrasado, para a UI não travar.
// Quando usar? Quando um valor muda rápido (ex: input) mas o uso dele (renderizar lista) é lento. Quando tem um único estado (texto) mas só parte do uso dele precisa ser atrasado (lista pesada, gráfico, etc.). useDeferredValue quando você só precisa atrasar o consumo de um valor já existente.

/*
Diferença conceitual

useTransition

Você mesmo marca um bloco de atualização como “não urgente”.

Exemplo: startTransition(() => setLista(...)).

Útil quando o estado caro é separado (texto + lista).

useDeferredValue

Você deixa o valor derivado atrasado.

Exemplo: const textoDeferido = useDeferredValue(texto).

Útil quando você já tem um estado (texto) mas só quer usar uma versão atrasada dele em algo pesado (lista).

Analogia

useTransition: você fala para o React → "Essa atualização aqui é prioridade baixa".

useDeferredValue: você fala → "Me dá uma cópia mais lenta desse valor, para usar em algo pesado".

*/

// useDeferredValue: O input atualiza rápido (setTexto) e a lista só escuta a versão atrasada (textoDeferido).


import React, { useDeferredValue, useState } from 'react'

function HookUseDeferredValue() {
    const [texto, setTexto] = useState("");
    const textoDeferido = useDeferredValue(texto) // Valor atrasado

    const lista = Array(20000)
        .fill()
        .map((_, i) => textoDeferido + "" + i);

  return (
    <div>
        <h2>Exemplo useDeferredValue</h2>
        <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
        />
        <ul>
            {lista.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default HookUseDeferredValue