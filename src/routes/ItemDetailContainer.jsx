import React from 'react'
import ItemDetail from '../componentes/ItemDetail/ItemDetail'
import '../componentes/ItemListContainer/ItemListContainer.css'
import NavBar from '../componentes/NavBar/NavBar'
import { getGames } from "../componentes/productos/games"


const ItemDetailContainer = (id) => {

  const datos = getGames()

  const juego = datos.then(datos)
  console.log(juego)

  return (
    <div>
      <NavBar />
      <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer