import ItemDetailContainer from "./ItemDetailContainer";
import NavBar from "../componentes/NavBar/NavBar";




import React from 'react'

const ItemRoot = (id) => {
  return (
    <div className="App">
        <NavBar />
        <ItemDetailContainer id = {id}/>
    </div>
  )
}

export default ItemRoot