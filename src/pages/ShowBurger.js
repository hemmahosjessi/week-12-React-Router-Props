import React from "react";
import { useParams, useHistory } from "react-router-dom";
import burgers from 'data/burgers.json'
import Burger from "components/Burger";


const ShowBurger = () => {
    const history = useHistory()
    const { slug } = useParams()
    const burgerMatch = burgers.find((burger) => burger.slug === slug)
    
    if (!burgerMatch) {
        // return (
        //     <div>
        //         <h1>Burger Not Found...</h1>
        //     </div>
        // )
        history.push('/')
    }
    
    return (
        <div className='burgerPage'>
            <Burger { ...burgerMatch } />        
        </div>
    )
}

export default ShowBurger