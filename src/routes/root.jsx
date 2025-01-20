import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <div className='container'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
        
    )
}

export default Root
