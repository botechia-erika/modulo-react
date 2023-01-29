import React ,{components} from 'react';

import { Contador } from "./Componentes/Contador";
import { Garagem } from "./Componentes/Garagem";
import { GlobalStyled } from "./GlobalStyled";
import {useState} from 'react'
export default function App(props) {

const [nome, setNome ] = useState("Conway");
const mudaNome = ()=>{
if(nome === "Conway"){
setNome("Lbn22")
}
else if(nome === "Lbn22"){
setNome("TURMA CONWAY")
}
else{
setNome("Conway")
}
}

const [contador, setContador ] = useState(0);

  const incrementar = () => {

    
    setContador( contador+1)

  };
    console.log(contador);
    const decrementar = () => {

    if(contador>0){
    setContador(contador-1)
    } else {
    alert(`Carro Vazio`);
    }
    }

    console.log(nome)  ;
    console.log(contador);
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem 
        nome={nome}
         mudaNome={ mudaNome}
      />      
      <Contador 
      contador={contador}
 incrementar={incrementar}
decrementar={decrementar}
      />
    </div>
  );
}
