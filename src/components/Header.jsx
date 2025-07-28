
import { useState } from 'react'
import logo from './imgs/logo.png'
import { Link } from 'react-router-dom'

const Header = ({ onSearchClick }) => {

    const [searchText, setSearchText] = useState("");

    console.log(searchText)

    return (
        <div className="header-container">
            <Link to={"/"}><img src={logo} className="logo" alt='logo' /></Link>
            <input type='text' placeholder='Search' className='search-bar' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className='search-btn' onClick={() => onSearchClick(searchText)}>Search</button>
            <div className='header-content'>
                <Link to={"/"} className='header-link'>Home</Link>
                <Link to={"/venue"} className='header-link'>Venues</Link>
                <span>My Bookings</span>
                <button className='login-btn'>Login</button>
            </div>
        </div>

    )
}

export default Header
