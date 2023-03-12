import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ datos }) => {
  return (
    <div className="itemDetail">
      <div className="contenedor-item">
        <h2 className="titulo">{datos.title}</h2>
        <p className="descripcion">{datos.description}</p>
        <div className="contenedor-imagen">
          <img className="imagen-1" src={datos.img1} />
          <img className="imagen-2" src={datos.img2} />
        </div>
        <b className="descripcion">Agregar al carrito</b>
        <ItemCount stockParam={datos.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
