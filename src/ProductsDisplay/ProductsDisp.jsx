import React, {useContext} from "react"
import { StoreContext } from "../Context/StoreContext"
import ProdDisplay from "../ProdItem/ProdDisplay"
import '../ProductsDisplay/ProductsDisp.css'

const ProductsDisp =({category}) =>{
    const {productDetails} = useContext(StoreContext)

    return(
        <div className="prod-display" id="prod-display">
            <p>Products for you...</p>
            <div className="prod-display-list">
                {productDetails.map((item,index)=>{
                        return(
                            <ProdDisplay key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        )
                    
                })}
            </div>

        </div>
    )
}

export default ProductsDisp