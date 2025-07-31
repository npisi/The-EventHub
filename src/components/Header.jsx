import {NetworkContext} from '../context/networkConnection'
import { useContext, useState } from 'react'
import logo from './imgs/logo.png'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'

const Header = ({ onSearchClick }) => {

    const [searchText, setSearchText] = useState("");
    const [isOpen , setIsOpen] = useState(false)
    const isOnline = useContext(NetworkContext);

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
              <button className='login-btn' onClick={()=>setIsOpen(true)} disabled={!isOnline} >Login</button>
            </div>
            {isOpen && <LoginModal onClose={()=>setIsOpen(false)} />}
        </div>

    )
}

export default Header
