import React from 'react'
import './styles.css';
import logo1 from './logo1.png'
import {Garagem} from './Componentes/Garagem'

import './styles.css';
export default function App(props){
const nome = "Conway";
const apresentaGaragem = (nome ) => {
 alert(`Bem vindo a ASTRO SIDE STORE ${nome}`)
}

const carro1= {
imgCover: "https://i.ibb.co/z72dkMd/p00-darth-mug.jpg",
indexP: 0,
id: 1, 
nameDescription: "MUG - DARTH - BLACK",
name: "MUG - DARTH - BLACK",
category: "CASA E DECORACAO",
productType: "MUG",
priceBase: 25,
discountPercent: "10%",
priceClient: 25 * 0.8,
idP: "P01-C2-MUG",
description: "Linda caneca com formato de DARTH VADER em relieve",
isCat1: false,
isCat2: true,
isCat3: false,
isCat4: false,
stockProduct: [5],
refCharacter: "DARTH VADER",
};
const carro2= {
imgCover: "https://i.ibb.co/z72dkMd/p00-darth-mug.jpg",
id:2, 
nameDescription: "LEGO - DARTH - BOX ESPECIAL",
name: "dark-LEGO-box",
category: "CASA E DECORACAO",
productType: "MUG",
priceBase: 25,
discountPercent: "10%",
priceClient: true,
idP: "P00-C2-MUG",
description: "Linda caneca com formato de DARTH VADER em relieve",
isCat1: true,
isCat2: false,
isCat3: false,
isCat4: false,
stockProduct: [5],
refCharacter: "DARTH VADER"
};
return(
<div className="App">

<nav class="menu">
  <label><img src={logo1} alt="logo libretaPET" class="logoBrand" />Astro.SIDE
  </label>
  <ul class="menu__item ">
    <li class="item"><a href="index.html" class="link-item">Home</a></li>
    <li class="item"><a href="buscaTermos.html" class="link-item">Buscador</a></li>
    <li class="item"><a href="formmato.html" class="link-item">Pagamento</a></li>
   </ul>

  <span class="btn__menu" id="buttonMenu">
      <i class="fa fa-bars"></i>
    </span>
</nav>

	<Garagem  
	nome={nome}
	nome={"DESTAQUES"}
	apresentaGaragem={apresentaGaragem}
carro1={carro1}


/>

	    <footer>
    <ul class="social-icons-list">
    <li>
      <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-google-plus-g"></i></a>
    </li>
    <li>
      <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
    </li>
    </ul>
    
    </footer>
</div>
);
}

