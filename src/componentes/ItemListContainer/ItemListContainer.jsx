import React from "react";
import './ItemListContainer.css'
import { useState, useEffect } from "react";
import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getGames } from "../productos/games";

const ItemListContainer = ({isCategoria, categoria }) => {
  const [useGame, setGame] = useState([]);
  

  useEffect(() => {
    const games = getGames();
    games
      .then((gamesList) => {
        
        if(isCategoria){
          const gamesFiltered = gamesList.filter((juego) => juego.category == categoria)
        {setGame(gamesFiltered)} 
        }else{
          setGame(gamesList)
        }
      })
      .catch((error) => {
        console.log(`Ha ocurrido un error: ${error}`);
      });
  });

  return (
    <div className="contenedor-item-list">
      <ItemList gamesList={useGame} />
    </div>
  );
};

export default ItemListContainer;
