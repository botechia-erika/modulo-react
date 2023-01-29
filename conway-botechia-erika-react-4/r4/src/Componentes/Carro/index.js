import React ,{components} from 'react';

import { CarroContainer } from "./styles";
import {useState} from 'react'
export function Carro({ modelo, cor, ano, flex, adicionadoPor }) {

console.log(`
destruturing  key+props value 
- passar objeto direto em parenteses de Carro ( quem recebe)

--------destruturing props.modelo----
Carro({modelo})
-------------retorna------------------
Carro.modelo = {modelo} = ${modelo} 
----------------------------------------
`)
  return (

    <CarroContainer>
      
        <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? "Sim" : "Não"}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
    </CarroContainer>
  );
}
