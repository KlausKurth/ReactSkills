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


# Diferença entre Effects

1 - useEffect

- Executa depois que a tela já foi renderizada.

- O usuário pode ver o "estado antigo" por um instante antes da atualização.

2 - useLayoutEffect

- Executa logo depois do React montar/atualizar o DOM, mas antes do browser pintar na tela.

- Garantia: o usuário nunca vê a tela sem a alteração feita no hook.

- Usado para medir ou ajustar layout (ex: largura, altura, posição).

3 - useInsertionEffect

- Executa ainda antes do useLayoutEffect, durante a fase de inserção de estilos.

- Serve para injeção de CSS ou estilos dinâmicos com bibliotecas (ex: styled-components, emotion).

- Não é para manipular DOM manualmente, e sim para garantir que estilos estejam aplicados antes do layout.