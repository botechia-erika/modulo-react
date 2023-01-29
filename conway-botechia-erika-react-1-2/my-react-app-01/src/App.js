import React from 'react'
import './styles.css';
import logo1 from './logo1.png'

import {Navbar} from './Componentes/Navbar'
import {Garagem} from './Componentes/Garagem'
import './styles.css';
export default function App(props){
const nome = "Conway";
const apresentaGaragem = ((props) => {
alert(`Bem vindo a ASTRO SIDE STORE ${props.nome}`)
})
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
    const carro2 = {
        imgCover: "https://i.ibb.co/RYjzz3b/p01-darth-lego.png",
        id:2,
        nameDescription: "BOX ESPECIAL - LEGO DARTH-VADER",
        name: "LEGO VADER BLACK BOX",
        category: "MINIATURAS - LEGO - BRINQUEDOS",
        productType: "LEGO",
        priceBase: 600,
        discountPercent: "10%",
        priceClient: 600  * 0.9,
        idP: "P2C1",
        description: "BLACK BOX de EDICAO LIMITADA para COLECIONADOR especial DARK SIDE DARTH VADER",
        isCat1: true,
        isCat2: false,
        isCat3: false,
        isCat4: false,
        stockProduct: [1],
        refCharacter: "DARTH VADER",
        indexP: 1
    };
    const carro3= {
        imgCover: "https://i.ibb.co/d0cN375/p02-legion-lego.png",
        indexP: 2,
        id: 3,
        nameDescription: "LEGO LEGION",
        name: "MUG - DARTH - BLACK",
        category: "MINIATURAS - LEGO - BRINQUEDOS",
        productType: "LEGO",
        priceBase: 250,
        discountPercent: "5%",
        priceClient: 250 * 0.95,
        idP: "P2C1",
        description: "BOX LEGION LEGO ESPECIAL",
        isCat1: true,
        isCat2: false,
        isCat3: false,
        isCat4: false,
        stockProduct: [2],
        refCharacter: "DARTH VADER",
    };
    const carro4 =  {
        imgCover: "https://i.ibb.co/pWGXM7W/p03-legion-lego.png",
        id:4,
        nameDescription: "LEGO - DARTH - BOX ESPECIAL",
        name: "",
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
        refCharacter: "DARTH VADER",
        indexP: 3
    };
    const carro5= {
        imgCover: "https://i.ibb.co/HN1gbSN/p04-legion-lego.png",
        indexP: 0,
        id: 5,
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
    const carro6 = {
        imgCover: "https://i.ibb.co/7Qdj7bD/p05-darkside-custom.png",
        id:6,
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
    const carro7= {
        imgCover: "https://i.ibb.co/CMF9zxT/p04-starwars-lego.png",
        indexP: 2,
        id: 7,
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
    const carro8=  {
        imgCover: "https://i.ibb.co/Dk24BCk/p06-darth-poster.png",
        id:8,
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
        refCharacter: "DARTH VADER",
        indexP: 3
    };
    const carro9= {
        imgCover: "https://i.ibb.co/wRPQzXs/p07-darth-miniatura.png",
        indexP: 8,
        id: 9,
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
    const carro10 = {
        imgCover: "https://i.ibb.co/bPz06hy/p12-funkopop-darth.png",
        id:10,
        nameDescription: "MUG - DARTH - FATHER",
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
    const carro11= {
        imgCover: "https://i.ibb.co/SJp5fdH/mug-father.jpg",
        indexP: 10,
        id: 11,
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
    const carro12 =  {
        imgCover: "https://i.ibb.co/pjbGXTB/p11-tshirt.jpg",
        id:12,
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
        refCharacter: "DARTH VADER",
        indexP: 3
    };

return(
<div className="App">

    <Navbar/>


                    <main>
                        <header>
                            <h1>Astro.SIDE {props.nome}="CONWAY"

                        </h1>
                        </header>


                        <section>
                            <div className="title__container">
                                <h2>Encontre buscando </h2>
                            </div>
                            <div className="title__container">
                                <input placeholder={"BUSCAR PRODUTO"}/>
                            </div>
                        </section>
                            <section>
                                <div className="title__container">
                                <h2>TODOS PRODUTOS</h2>
                                </div>
                            <div className="cardsPage">
                                <Garagem
                                    carro={carro1}
                                    carro1={carro1}
                                />
                                <Garagem
                                    carro={carro2}
                                    carro2={carro2}
                                />
                                <Garagem
                                    carro={carro3}
                                    carro3={carro3}
                                />

                                <Garagem
                                    carro={carro4}
                                    carro4={carro4}
                                />
                                <Garagem
                                    carro={carro5}
                                    carro5={carro5}
                                />

                                <Garagem
                                    carro={carro6}
                                    carro6={carro6}
                                />
                                <Garagem
                                    carro={carro7}
                                    carro7={carro7}
                                />
                                <Garagem
                                    carro={carro8}
                                    carro8={carro8}
                                />
                                <Garagem
                                    carro={carro9}
                                    carro9={carro9}
                                />
                                <Garagem
                                    carro={carro10}
                                    carro10={carro10}
                                />
                                <Garagem
                                    carro={carro11}
                                    carro11={carro11}
                                />
                                <Garagem
                                    carro={carro12}
                                    carro12={carro12}
                                />


                            </div>

                        </section>
                    </main>

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

