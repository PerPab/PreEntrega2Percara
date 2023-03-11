import React from "react";
import "../CartWidget/CartWidget.css";

function CartWidget() {
  return (
    <>
        <div className="contenedor-carrito">
        <img className="carrito-logo" src="./public/cart.svg" />
        <span className="carrito-numero">101</span>
        </div>
       
      
    </>
  );
}

export default CartWidget;
