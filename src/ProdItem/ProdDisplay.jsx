import React from 'react'
import '../ProdItem/ProdDisp.css'
import { RxPlusCircled } from "react-icons/rx";
import { PiMinusCircleBold } from "react-icons/pi";
import {useState} from 'react'

export default function ProdDisplay({id, name, price, description, image}){
    
    const[select, setSelect] = useState(0)
    return(
        
        <div className='pr-item'>
            <div className='pr-item-container'>
                <img className = "prodImag" src={image} />
            </div>
            <div className="pr-name-info">
            <h2>{name}</h2>
            </div>
           <div className='pr-descp'>
            <h4>Description : </h4>
            <ul>
                {description && description.length ?
                description.map(elem=>{
                    return(
                        <li>{elem}</li>
                    )
                }):description}
            </ul>
            </div>
            <div className='pr-price'>
            <h3>Price : <span> £ {price} </span>
            {!select ? <span><button onClick={()=>setSelect(prev=> prev+1)} className='plusIcon'>Add to cart</button></span> : 
            <div className='counterFunc'><span><RxPlusCircled onClick={()=>setSelect(prev=>prev+1)} className='plusOne' /><h3>{select }</h3><PiMinusCircleBold onClick={()=>setSelect(prev=>prev-1)}className='minusOne' /></span></div> } 
            </h3>
            
            </div>

        </div>
    )
}