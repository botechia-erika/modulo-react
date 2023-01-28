import React from 'react'


export function Carro(props){


return(
<div class="cardsPage">
<div class="card-container">
<div class="card-flip">
<div class="card front">
  <img src={props.carro.imgCover} alt="produtos loja"/>
<div class="card-block" id="divC1front">
 <h4 class="card-title">
 {props.carro.name}
 </h4>
 </div>


</div>

<div class="card back">
<div class="card-header">

</div>
<div class="card-block">
<h4 class="card-title">
{props.carro.productType}
</h4>
<ul class="card-text">


<li>
{props.carro.category}
</li>
<li>
{props.carro.priceBase} </li>
<li>{props.carro.discountPercent}
</li>
<li>
{props.carro.priceClient} 
</li>

</ul>
<button><i class="fa-solid fa-cart-plus"></i>+1Produto</button>
<button><i class="fa-solid fa-heart-circle-plus"></i>LIKES</button>
</div>
</div>
</div>
</div>

</div>


);
}