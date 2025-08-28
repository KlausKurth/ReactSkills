# 📘 React do Básico ao Avançado – Boas Práticas com Exemplos

Este repositório tem como objetivo documentar o uso eficiente de funcionalidades essenciais do React, com foco em performance, boas práticas e exemplos práticos com e sem debug.


---


## 📦 Criando projeto com Vite

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
```


## 📦 Executando projeto modo DEV

```bash
npm run dev
```

## 📦 Executando projeto modo PROD

```bash
npm run build
npm run preview
```


---


## 📦 instalando dependências projeto com NPM

```bash
npm install react-router-dom
```


---


### 🧠 JSX Regras

- Deve ter apenas um elemento pai

- As tags devem ser fechadas (<input />)

- className no lugar de class

- camelCase para eventos: onClick, onChange


---


### 🧾 formas de criar componentes

```jsx
// Forma com arrow function (mais usada) atalho VsCode -> 'rfcae'
import React from 'react'

const Hello = () => {
  return (
    <div>Olá</div>
  )
}

export default NavBar
```

```jsx
// Forma com função comum
import React from 'react'

function Hello() {
  return <h2>Olá!</h2>;
}

export { Hello };
```


---

### 🧬 Props e Children


```jsx
//App.jsx
import React from 'react';
import Test from './components/Test'

const App = () => {

  return(
    <>
      {/*titulo é um valor passado pelo Props */}
      <Test titulo="Minha Lista de tarefas">
        {/* P e tudo de baixo do componente Test é considerado children */}
        <p>Tarefas do dia:</p>
      </Test>
    </>
  );
};

export default App;
```

```jsx
//Test.jsx (componente)
import React, { useState } from "react";

//argumento esperado a receber valor de props de App.jsx
const Test = (props) => {
    return (
        <>
            {/*Valor do componente trazido de props de Test em App.jsx*/}
            <h1>{props.titulo}</h1>
            {/*Trazendo todo conteúdo children de App.jsx herdado em Test*/}
            <p>{props.children}</p>
        </>
    );
};

export default Test;
```


--- 


### 🆔 useId

### 📌 O que é?

`useId` Gera um ID estável que pode ser usado para acessibilidade ou associação de rótulos.

### ✅ Uso Correto

```jsx
import { useId } from "react";

function Form() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Nome</label>
      <input id={id} type="text" />
    </>
  );
}
```

### 🔍 Ideal quando você gera múltiplos inputs dinamicamente e precisa de um id único que persista entre renderizações.


---


### 📦 useParams (React Router)

### 📌 O que é?

`useParams` Permite acessar os parâmetros da URL.

### ✅ Uso Correto

```jsx
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams(); // Ex: /profile/123

  return <div>Perfil de ID: {id}</div>;
}
```

### 🚀 Útil em rotas dinâmicas como /profile/:id.




---
