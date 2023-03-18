
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ datosParam }) => {
  return ( 
    <div className="itemDetail">
      <div className="contenedor-item">
        <h2 className="titulo">{datosParam.title}</h2>
        <p className="descripcion">{datosParam.description}</p>
        <div className="contenedor-imagen">
          <img className="imagen-1" src={datosParam.img1} />
          <img className="imagen-2" src={datosParam.img2} />
        </div>
        <ItemCount stockParam={datosParam.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
