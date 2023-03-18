import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

import { getGames } from "../../../Mock/games";

import { useEffect, useState } from "react";

const ItemDetailContainer = ({ id }) => {
  const [datos, setdatos] = useState(null);
  useEffect(() => {
    const games = getGames();
    games
      .then((gamesList) => {
        const data = gamesList.find((games) => games.id == id);
        setdatos(data);
      })
      .catch((error) => {
        console.log(`Ha ocurrido un error: ${error}`);
      });
  });

  return (
    <div className="itemContainer">
      {datos ? <ItemDetail datosParam={datos} /> : <span className="span">Cargando...</span>}
    </div>
  );
};

export default ItemDetailContainer;
