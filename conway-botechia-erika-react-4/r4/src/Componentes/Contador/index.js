import React ,{components} from 'react';


import { BotaoContador } from "./styles";

export function  Contador({contador, incrementar, decrementar}) {


  return (
  <div>
<BotaoContador>  

<p>{contador}</p>

          <button onClick={decrementar} > decrementar </button>
    

      <button onClick={incrementar} > incrementar </button>
</BotaoContador>
  </div>
  );
}