import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ title, price, description, image, category, id }) => {
  const url = `/item/${id}`;

  return (
    <li className="card-contenedor">
      <h3 className="nombre">{title}</h3>
      <Link to={url}>
        <img className="imagen" src={image} alt="imagen-juego" />
      </Link>
      <p className="descripcion">{description}</p>
      <p className="categoria">{category}</p>
      <h4 className="precio">${price}</h4>
      <button className="btn-agregar">Agregar</button>
    </li>
  );
};

export default Item;
