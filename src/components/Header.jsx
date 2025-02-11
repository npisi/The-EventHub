
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "./logo.png"



const Header = ({onSearchClick}) => {

    const [userState, setUserState] = useState("Login")

    const [searchText, setSearchText] = useState("")
    
    



    const changeUserState = () => {
        if (userState == "Login") {
            setUserState("Logout")
        } else if (userState == "Logout") {
            setUserState("Login")
        }
    }
 
    return (
        <div className="header-container">
            
                <img src={logo} className="logo"/>
         
            <input type="text" placeholder="Search For Events..." className="search-bar" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            <button className="search-btn" onClick={()=> onSearchClick(searchText)}>Search</button>
            <div className="header-content">
                <Link to={"/"}>Home</Link>
                <Link to={"/venue"}>Venues</Link>
                <span>My Bookings</span>
                <span>About Us</span>
                <Link to={"/login"}><button onClick={changeUserState} className="login-btn">{userState}</button></Link>

            </div>
        </div>
    )
}

export default Header