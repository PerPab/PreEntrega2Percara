import React from "react";
import "./ItemCount.css";
import { useState, useEffect } from "react";


const ItemCount = ({ stockParam }) => {
  const sad = "/sad.png";
  const [contador, setContador] = useState(0);
  const [stockDis, setStock] = useState(stockParam);
  const [cantidadAddOn, setCantidadAddOn] = useState(0)

    useEffect(() => {
    stockDis == undefined && setStock(stockParam);
  },[stockParam]);

  useEffect(()=>{
    setCantidadAddOn(contador)
  },[contador])

  function onAdd () {
    alert(`cantidad agregada al carrito ${cantidadAddOn}`)
    setContador(0)
  }

  return (
    <div className="container-cont">
      {stockDis > 0 ? (
        <p className="stock">Stock disponible: {stockDis}</p>
      ) : (
        <p className="s-stock">
          Sin Stock <img className="sad" src={sad}></img>
        </p>
      )}
      <div className="contador">
        <button
          className="btn-contador"
          onClick={() => {
            contador > 0 && setContador(contador - 1);
            contador > 0 && setStock(stockDis + 1);
          }}
        >
          -
        </button>
        <div>{contador}</div>
        <button
          className="btn-contador"
          onClick={() => {
            stockDis > 0 && setContador(contador + 1);
            stockDis > 0 && setStock(stockDis - 1);
          }}
        >
          +
        </button>
      </div>
      <button className="btn-cont-carrito" onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
