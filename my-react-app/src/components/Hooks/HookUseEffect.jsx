//useEffect gerencia efeitos colaterais (fetch, timers, manipulação do DOM). Ele roda depois da renderização. Pode rodar sempre, uma vez, ou com dependências específicas.

//useEffect roda depois da renderização e não retorna valores para serem usados na renderização atual:

import React, { useEffect, useState } from 'react'

function HookUseEffect() {
    
    const [contador, setContador] = useState(0);
    const [mensagem, setMensagem] = useState("");
    const [tempo, setTempo] = useState(0);

    //Executa apenas 1 vez (ao carregar) sem dependência '[]'
    useEffect(() => {
        console.log("Componente montado uma única vez ao carregar");
    }, []);


    //Executa toda vez que o state contador mudar tem dependência '[contador]'
    /*
    Como saber que o REACT atualizou somente o campo necessario do DOM  
    Pressione F12 ou clique com o botão direito → Inspecionar.
    Na aba Elements (ou Inspector), você vê o DOM real, que é o HTML que o navegador realmente renderizou.
    quando você clica no botão Incrementar, você verá que só o <p>Contador: X</p> mudou
    */    
    useEffect( () => {
      console.log("Contador atualizado:", contador );      
    }, [contador]);


    //Executa algo em um intervalo de tempo , exemplo com necessidade de limpar vestigio quando componente sai da tela
    useEffect(() => {      
      console.log("iniciando o contador automático...")

      //cria um intervalo que incrementa o tempo a cada 1s
      const intervalId = setInterval(() => {
        setTempo((t) => t + 1);
      }, 1000);

      // cleanup -> remove o intervalo quando o componente sai da tela
      return () => {
        clearInterval(intervalId);
        console.log("Intervalo limpo! componente desmontado.");
      }


    }, []); //roda só uma vez ao montar


// RENDER    
  return (

    <div>
        <h2>Exemplo useEffect com dependência "contador"</h2>
        <p>{mensagem}</p>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador +1)}>Incrementar</button>
        <h2>Exemplo useEffect com necessidade CleanUp</h2>
        <p>Segundos passados: {tempo}</p>        
    </div>
    
  );
}

export default HookUseEffect;