//Permite expor funções personalizadas de um componente filho para o pai usando forwardRef
//Quando usar? Quando precisar que o pai controle funções internas do filho de forma explícita.


import React, { forwardRef, useRef, useImperativeHandle } from 'react'


// Componente filho
// Componente filho é apenas aquele que você renderiza dentro de outro componente:
// Um componente React comum não recebe ref como prop forwardRef “habilita” isso.
//Ele intercepta o ref que o pai passar (<CaixaTexto ref={...} />) e entrega como segundo parâmetro da função ((props, ref)).
//com useImperativeHandle você “personaliza” esse acesso para dar apenas o que quiser (ex.: a função focar).
const CaixaTexto = forwardRef((props, ref) => {
    //Ele precisa do inputRef (que é local do componente). Fora da função, você não teria acesso a esse inputRef.
    const inputRef = useRef();

    //Se não usarmos useImperativeHandle, o pai não teria acesso a essa função interna.
    useImperativeHandle(ref, () => ({
        focar: () => inputRef.current.focus()
    }));

    return <input type="text" ref={inputRef} placeholder="UseImperativeHandle"/>;
});



function HookUseImperativeHandle() {
    const caixaRef = useRef();

  return (
    <div>
        <h2>Exemplo useImperativeHandle</h2>
        {/*Aqui CaixaTexto é filho de HookUseImperativeHandle*/}
        {/* o filho diz: "pai, se você passar um ref, eu te dou acesso a essa função personalizada.*/}
        <CaixaTexto ref={caixaRef}/>
        <button onClick={() => caixaRef.current.focar()}>Focar Input</button>
    </div>
  );

}

export default HookUseImperativeHandle