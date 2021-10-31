import React from 'react'
import { Route, Link } from 'react-router-dom'

const Nav = () => {
    return (
    <header className='header'>
        <h1>Jes Burgers</h1>
        <Route path='/burgers'>
            <Link to='/'>
                Back to all Burgers
            </Link>
        </Route>
    </header>
    )
}


export default Nav