// useParams é um hook do React Router que permite acessar parâmetros dinâmicos da URL. Ele retorna um objeto com todas as partes da URL definidas com :param.
//Quando usar: Sempre que você precisa ler informações da URL dentro do componente, sem precisar passar via props.Exemplo: IDs de usuários, produtos, posts, etc.

import React from 'react'
import { useParams } from 'react-router-dom'

function HookUseParams() {
    // Pega os parâmetros da URL
    const { id, nome} = useParams();

    console.log("useParams retornou:", {id , nome});

  return (
    <div>
        <h2>Exemplo useParams</h2>
        <p>O ID do item é: {id}</p>
        <p>O nome do item é: {nome}</p>
    </div>
  );
}

export default HookUseParams