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

# Renderização vs execução de função

- Sempre que o state ou props de um componente muda, React executa a função do componente novamente.

- Cada execução da função do componente é uma nova renderização, e todo o código dentro da função é reexecutado.

- Isso não significa que tudo dentro dele foi alterado no DOM. React atualiza apenas o que precisa.


# Criação vs execução de funções dentro do componente

- Toda função definida dentro do componente é recriada a cada renderização

- Criação: a cada render, React cria uma nova referência da função minhaFunc.

- Execução: só acontece se você executa de alguma forma a função um exemplo é ao clicar no botão.