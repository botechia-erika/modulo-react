import React from 'react'

import logo1 from './../logo1.png'
export function Navbar() {


    return (
        <nav className="menu">
            <label><img src={logo1} alt="logo libretaPET" className="logoBrand"/>Astro.SIDE
            </label>
            <ul className="menu__item ">
                <li className="item"><button className="link-item">Produtos</button></li>
                <li className="item"><button className="link-item">Carrinho</button></li>
            </ul>

            <span className="btn__menu" id="buttonMenu">
      <i className="fa fa-bars"></i>
    </span>
</nav>
    )
}