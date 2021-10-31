import React from "react";
import { Route } from 'react-router-dom'

const Burger = ({ name, image }) => {
    return (
        <div className='burger'>
            <img className='burger-img 'src={`/images/${image}`} alt='' />
            <h3>{name}</h3>
            <Route path='/' exact>
            <p>Looks yummy right?</p>
            </Route>
        </div>
    )
}

export default Burger