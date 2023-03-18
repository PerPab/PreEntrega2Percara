
import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ datosParam }) => {
const [contador, setContador] = useState(0);

useEffect(()=>{
  setCantidadCarrito(contador)
},[contador])

  const [cantidadCarrito, setCantidadCarrito] = useState(contador)

  function onAdd () {
    alert(`Cantidad agregada ${cantidadCarrito}`)
    setContador(0)

  }

  return ( 
    <div className="itemDetail">
      <div className="contenedor-item">
        <h2 className="titulo">{datosParam.title}</h2>
        <p className="descripcion">{datosParam.description}</p>
        <div className="contenedor-imagen">
          <img className="imagen-1" src={datosParam.img1} />
          <img className="imagen-2" src={datosParam.img2} />
        </div>
        <ItemCount 
          stockParam={datosParam.stock}
          contador = {contador}
          setContador = {setContador}
          />
        <button className="btn-cont-carrito" onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
