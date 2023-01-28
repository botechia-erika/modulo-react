import React from 'react'
import {Carro} from "./Carro"

export function Garagem(props){

return(
  <div>
    <header>
    <h1>Astro.SIDE {props.nome} </h1>
    <button onClick={()=>props.apresentaGaragem(props.nome)}>click</button>
    </header>
     <section>
     <div class="title__container">
     <h2>PRODUTOS</h2>
</div>
<div class="cardsPage">


<Carro
carro={props.carro1}
/>



       </div>

       </section>
       </div>
)
}