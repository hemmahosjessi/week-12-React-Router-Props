import React from "react";
import Burger from 'components/Burger'
import { Link } from 'react-router-dom'
import burgers from 'data/burgers.json'

const BurgerList = () => {
    return (
        <section className='burgers'>
           {burgers.map((burger) => (
               <Link key={burger.name} to={`/burgers/${burger.slug}`}>
                   <Burger {...burger} />
               </Link>
           
           ))}
        </section>
    )
}

export default BurgerList