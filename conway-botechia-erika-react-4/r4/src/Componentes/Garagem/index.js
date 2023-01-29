import React ,{components} from 'react';

import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";
import {useState} from 'react'
export function Garagem({ nome, mudaNome}) {

const [carro, setCarro] = useState({modelo: "Elantra", cor: "PRETO", ano: 2020, flex: "Nao", adicionadoPor: "Conway"})
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={carro.modelo}
          cor={carro.cor}
          ano={carro.ano}
          adicionadoPor={carro.adicionadoPor}
          flex={carro.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
