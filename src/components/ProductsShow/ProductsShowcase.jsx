import React from 'react'
import './ProductsShowCase.css'
import {cover_list} from '../../assets/assets'



export default function ProdcutsShow({activeState,setActiveState}){
    return(
        <div className='productsShow' id="productsShow">
            <h2> Explore our products</h2>
            <div className='explore-product'>
                {cover_list.map((elem,index)=>{
                    return(
                        <div onClick={()=>setActiveState(prev=>prev===elem.category_name ? "Selected" : elem.category_name)}className="products-circle"key={index}>
                            <img src={elem.category_image} className={activeState === elem.category_name ? "Active" : elem.category_name} />
                            <p> {elem.category_name}</p>
                        </div>  
                    )
                })}
            </div>
        </div>

    )
}