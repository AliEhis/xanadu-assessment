import React from 'react'
import Navbar from '../components/Navbar'
import Listings from '../components/Listings'
import SideNavbar from '../components/SideNavbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='main-wrapper'>
                <SideNavbar />
                <Listings />
            </div>
        </div>
    )
}

export default Home
