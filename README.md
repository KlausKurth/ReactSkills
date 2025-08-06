# 📘 React do Básico ao Avançado – Boas Práticas com Exemplos

Este repositório tem como objetivo documentar o uso eficiente de funcionalidades essenciais do React, com foco em performance, boas práticas e exemplos práticos com e sem debug.


---


## 📦 Criando projeto com Vite

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
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
// Forma com arrow function (mais usada)
const Welcome = () => <h2>Bem-vindo!</h2>;
```

```jsx
// Forma com função comum
function Hello() {
  return <h2>Olá!</h2>;
}
```

---


### 🧾 formas de export componentes

```jsx
// export default => pode dar o nome que quiser ao importar
export default function Main() {}
```

```jsx
// export nomeado => precisa usar o mesmo nome
export const Header = () => {};
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


## ✅ `useState`

### 📌 O que é?

`useState` é um hook que permite adicionar um estado local a componentes funcionais.


### ✅ Uso Correto

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(prev => prev + 1); // Sempre usar o valor anterior
  setCount(prev => prev + 1); // Resultado: +2 corretamente
};
```

### ❌ Uso Incorreto

```jsx
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1); // Resultado: apenas +1
};
```

### ❗ Isso ocorre porque useState é assíncrono. Atualizações encadeadas não usam o novo valor imediatamente.


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


### 🧠 useEffect

### 📌 O que é?

`useEffect` Executa efeitos colaterais (fetch, timers, DOM).

### ✅ Uso Correto com CleanUp

```jsx
useEffect(() => {
  const interval = setInterval(() => console.log("executando"), 1000);

  return () => clearInterval(interval); // evita vazamento de memória
}, []);
```

### ❌ Uso Incorreto

```jsx
useEffect(() => {
  setInterval(() => console.log("executando"), 1000); 
}, []); // ❌ SEM limpar
```

### ⚠️ Resulta em vários timers empilhados em cada render → vazamento de memória!


---


### 🪞 useRef

### 📌 O que é?

`useRef` Executa efeitos colaterais (fetch, timers, DOM).

### ✅ Uso Correto

```jsx
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus(); // acesso direto ao DOM
};
```

### 🧠 Útil para inputs, timers, ou armazenar valores sem afetar o ciclo de renderização.

### ❌ Uso Incorreto

```jsx
const [input, setInput] = useState('');

<input value={input} onChange={e => setInput(e.target.value)} />
```

### Se você não precisa re-renderizar com o valor, use useRef para evitar renderizações desnecessárias.


---


### 🎯 useReducer

### 📌 O que é?

`useReducer` Usado para lógica de estado complexa.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```