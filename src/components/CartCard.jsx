import React from 'react'

const CartCard = ({product}) => {

  const { name, price, image } = product;
  return (

        
<div className="cartCard">
  <img src={image} alt={name} />
  <p className='productName'>{name}</p>
  <p className='productPrice'>${price}</p>
  <button className='removeFromCart'>Remove</button>

</div>


  )
}

export default CartCard