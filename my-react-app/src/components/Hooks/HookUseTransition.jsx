//Permite marcar atualizações como não urgentes, mantendo a interface fluida.
//Quando usar? Quando atualizações pesadas (listas, cálculos) não devem travar a interação imediata. Quando você controla mais de um estado (input + lista) e pode separar o que é urgente do que não é. use useTransition quando você mesmo dispara um setState caro.

/* Sobre o exemplo abaixo:
O input (setTexto) é urgente.
A lista (setLista) é marcada como não urgente via startTransition.
Mas na prática, na primeira tecla, o React precisa montar tudo do zero → essa primeira lista grande trava um pouco a thread principal.

Sem useTransition
Cada letra digitada → trava forte (input lento).
Com useTransition
O input responde melhor, mas ainda pode haver um pequeno atraso na primeira interação.

*/

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

// useTransition: O input atualiza rápido (setTexto) e a lista demora (startTransition(setLista)).


import React, {useState , useTransition} from 'react'

function HookUseTransition() {
    const [texto, setTexto] = useState("");
    const [lista, setLista] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setTexto(value);

        // Atualização não urgente        
        startTransition(() => {
            const novalista = Array(20000)
                .fill()
                .map((_, i) => value + "" + i);
            setLista(novalista)
        });
    }

  return (
    <div>
        <h2>Exemplo useTransition</h2>
        {/*Quando você digita no input, o React faz duas atualizações:
        Atualiza o estado texto (urgente → precisa aparecer no input imediatamente).
        Gera a lista com 20.000 itens (não urgente → pode demorar). */}
        <input type="text" value={texto} onChange={handleChange}/>

        {isPending && <p>Carregando lista...</p>}

        <ul>
            {lista.map((item, i)=> (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
  );
}

export default HookUseTransition