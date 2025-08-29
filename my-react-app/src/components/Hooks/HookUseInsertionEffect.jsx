// Executa antes até do useLayoutEffect. Usado para injetar CSS ou estilos antes de renderizar a tela.
// Raramente usado em apps normais. Principalmente em bibliotecas de estilização.
// useInsertionEffect é executado muito cedo, antes do DOM final estar completamente "pronto" para manipulações visuais.
 
import React, { useInsertionEffect, useRef } from 'react'

export default function HookUseInsertionEffect() {
    useInsertionEffect(() => {
      // Injetar CSS global antes da renderização
      const styleTag = document.createElement("style");
      styleTag.innerHTML = `
        .insertion-effect-text {
          color: red !important;
          font-weight: bold;
        }
      `;
      document.head.appendChild(styleTag);
  
      return () => {
        document.head.removeChild(styleTag);
      };
    }, []);
  
    return (
      <div>
        <h2>Exemplo useInsertionEffect</h2>
        <p className="insertion-effect-text">
          Esse texto fica vermelho antes de renderizar.
        </p>
      </div>
    );
  }