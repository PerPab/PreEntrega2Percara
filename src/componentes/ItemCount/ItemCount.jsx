import React from 'react'
import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({stockParam}) => {
  let stock = stockParam
  const [contador, setContador] = useState(0)
  const [stockDis, setStock] = useState(stock)

 useEffect(()=>{
  setStock(stock)

 })

 
 
  return (
    <div>
        <p className='stock'>Stock disponible:{stockDis}</p>
    <div className='contador'>
     
    <button className='btn' onClick={()=>{
      contador > 0 && setContador(contador - 1)
      setStock(stockDis + 1)


    }}>-</button>
    <div>{contador}</div>
    <button className='btn' onClick={()=>{
      stock > 0 && setContador(contador + 1)
      stockDis > 0 && setStock(stockDis - 1)

    }}>+</button>


    </div>

    </div>




  )
}

export default ItemCount