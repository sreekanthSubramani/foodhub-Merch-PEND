import React from 'react'
import '../Home/Home.css'
import Header from '../../components/Header/Header'
import ProdcutsShow from '../../components/ProductsShow/ProductsShowcase'
import {useState} from 'react'
import ProductsDisp from '../../ProductsDisplay/ProductsDisp'


export default function Home(){
    const [activeState, setActiveState] = useState("Selected")
    
    return(
        <div>
            <Header />
            <ProdcutsShow activeState={activeState} setActiveState={setActiveState}/>
            <ProductsDisp category={activeState}/>
        </div>
    )
}