import React from 'react'

const CheckOutItems = ({ cartItem }) => {
  const { name, price, image } = cartItem
  console.log(cartItem);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={image} height={50} width={50} alt="" />
    </div>
  )
}

export default CheckOutItems