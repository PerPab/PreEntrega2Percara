import React from 'react'
import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({stockParam}) => {

 
  const [contador, setContador] = useState(0)
  const [stockDis, setStock] = useState(stockParam)


  useEffect(()=>{
    stockDis == undefined && setStock(stockParam)
  })


 
  return (
    <div>
        <p className='stock'>Stock disponible:{stockDis}</p>
    <div className='contador'>
     
    <button className='btn' onClick={()=>{
      contador > 0 && setContador(contador - 1)
      contador > 0 && setStock(stockDis + 1)


    }}>-</button>
    <div>{contador}</div>
    <button className='btn' onClick={()=>{
      stockDis > 0 && setContador(contador + 1)
      stockDis > 0 && setStock(stockDis - 1)

    }}>+</button>


    </div>

    </div>




  )
}

export default ItemCount