import React from 'react'

const EmptyCart = () => {
  return (
    <div className=" m-auto text-center w-3/4">
          <img src="https://mms-cart.netlify.app/assets/empty-cart-587700a3.svg" />
          <p className="font-heading">There is no item in cart</p>
        </div>
  )
}

export default EmptyCart