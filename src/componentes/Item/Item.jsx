import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'



const Item = ({ title, price, description, image, category, id }) => {



  
  return (
    
    <li className='card-contenedor' >
      <h2 className='titulo'>{title}</h2>
      <Link to='/item/' ><img className='imagen' src={image} alt="imagen-juego" /></Link>
      <p className='descripcion'>{description}</p>
      <p className='categoria'>{category}</p>
      <h4 className='precio'>${price}</h4>
      <button className='btn-agregar'>Agregar</button>
    </li>
  
  )
}

export default Item