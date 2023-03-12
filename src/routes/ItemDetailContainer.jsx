import React from "react";
import ItemDetail from "../componentes/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import NavBar from "../componentes/NavBar/NavBar";
import { getGames } from "../componentes/productos/games";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = ({ id }) => {
  const [datos, setdatos] = useState({});
  //console.log("id parametro" + id)
  useEffect(() => {
    const games = getGames();
    games
      .then((gamesList) => {
        const data = gamesList.find((games) => games.id == id);
        setdatos(data);
        //console.log(data)
      })
      .catch((error) => {
        console.log(`Ha ocurrido un error: ${error}`);
      });
  });

  return (
    <div className="itemContainer">
      <ItemDetail datos={datos} />
    </div>
  );
};

export default ItemDetailContainer;
