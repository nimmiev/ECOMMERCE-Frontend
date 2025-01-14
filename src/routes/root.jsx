import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Root() {
    return (
        <>
            <div className='container'>
                <header className='navbar'>
                    <h1>Header</h1>
                    <Link to='/login' className='login'>Login</Link>
                </header>
                <Outlet />
                <footer>
                    <h1>Footer</h1>
                </footer>
            </div>
        </>
        
    )
}

export default Root