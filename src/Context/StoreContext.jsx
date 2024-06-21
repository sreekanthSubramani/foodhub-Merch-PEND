import { createContext } from "react";
import {productDetails} from '../assets/assets'
export const StoreContext = createContext(null)

const StoreContextProvider =(props) =>{

    const contextValue = {
        productDetails
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider