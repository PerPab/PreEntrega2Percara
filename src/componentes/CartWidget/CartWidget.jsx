import React from "react";
import "../CartWidget/CartWidget.css";


function CartWidget() {
  const url='/cart.svg'
  return (
    <>
        <div className="contenedor-carrito">
        <img className="carrito-logo" src={url} />
        <span className="carrito-numero">0</span>
        </div>
       
      
    </>
  );
}

export default CartWidget;
